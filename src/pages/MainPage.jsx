import { CHRISMASID } from '@/constants/chrismas'
import { useUserId, useWatchId } from '@/stores'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { getTree } from '@/apis'
import { useState } from 'react'
import { treeImageUrls } from '@/constants'

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 0 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
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
      try {
        const { data } = await getTree(watchId)
        const treeLevelIndex = Math.min(
          Math.floor(data.data.treeLevel / 3),
          treeImageUrls.length - 1,
        )
        setTreeLevel(treeLevelIndex)
      } catch (error) {
        console.error('Error fetching tree data:', error)
      }
    }

    fetchTreeData()
  }, [watchId])

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
      navigate('/content/write')
    }
  }

  return (
    <Container>
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
