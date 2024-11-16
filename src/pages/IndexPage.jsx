import LetterPaper from '@/components/modules/Letter'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IndexPage = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/main')
  }, 3000)

  return (
    <Wrapper>
      <LetterPaper text={'환영합니다!\n소중한 사람들과 행복했던 기억을 공유하세요!'} />
    </Wrapper>
  )
}
