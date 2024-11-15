import { CHRISMASID } from '@/constants/chrismas'
import { useUserId, useWatchId } from '@/stores'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

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

  console.log('watch id', watchId)
  console.log('user id', userId)

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
      <Image.Small
        onClick={handleClickMailBox}
        style={{ cursor: 'pointer' }}
        src='/images/mailbox.png'
      />
      <Image.Big src='/images/tree.png' />
      <Image.Small
        onClick={handleClickFeathers}
        style={{ cursor: 'pointer' }}
        src='/images/feathers.png'
      />
    </Container>
  )
}
