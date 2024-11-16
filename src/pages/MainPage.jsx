import { CHRISMASID } from '@/constants/chrismas'
import { useUserId, useWatchId } from '@/stores'
import { useNavigate } from 'react-router'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import { getTree } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 0 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`
// 로딩 애니메이션 스타일
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`
const Small = styled.img`
  width: 150px;
  height: 300px;
`

const Big = styled.img`
  height: 100%;
`

const Image = {
  Small,
  Big,
}

export const MainPage = () => {
  const navigate = useNavigate()
  const watchId = useWatchId()
  const userId = useUserId()
  const [treeLevel, setTreeLevel] = useState(0)

  useEffect(() => {
    if (!watchId) return

    const fetchTreeData = async () => {
      setIsLoading(true)
      try {
        const { data } = await getTree(watchId)
        const treeLevelIndex = Math.min(Math.floor(data.treeLevel / 3), treeImageUrls.length - 1)
        setTreeLevel(treeLevelIndex)
      } catch (error) {
        console.error('Error fetching tree data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTreeData()
  }, [watchId])

  // treeImageUrls 배열 정의
  const treeImageUrls = [
    '/images/tree.png',
    '/images/Tree1.png',
    '/images/Tree2.png',
    '/images/Tree3.png',
    '/images/Tree4.png',
    '/images/Tree5.png',
    '/images/Tree6.png',
    '/images/Tree7.png',
    '/images/Tree8.png',
    '/images/Tree9.png',
    '/images/Tree10.png',
  ]

  console.log('treeLevel', treeLevel)

  const handleClickMailBox = () => {
    if (!(userId || watchId === CHRISMASID)) {
      navigate('/auth/sign-in')
    } else {
      navigate('/content/read')
    }
  }

  const handleClickFeathers = () => {
    if (!userId) {
      navigate('/auth/sign-in')
    } else {
      navigate('/content/read')
    }
  }

  return (
    <Container>
      {treeLevel}
      <Image.Small
        onClick={handleClickMailBox}
        style={{ cursor: 'pointer' }}
        src='/images/mailbox.png'
      />
      <Image.Big src={treeImageUrls[treeLevel ?? 0]} alt={`Tree level ${treeLevel}`} />
      <Image.Small
        onClick={handleClickFeathers}
        style={{ cursor: 'pointer' }}
        src='/images/feathers.png'
      />
    </Container>
  )
}
