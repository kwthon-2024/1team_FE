import { postSignUp } from '@/apis'
import { useIsValid } from '@/stores'
import { useNavigate } from 'react-router'

export const useSignUp = () => {
  const navigate = useNavigate()
  const confirmId = useIsValid()

  const handleSignUp = async (form) => {
    try {
      if (!confirmId) {
        alert('이메일을 인증해주세요.')
      } else {
        const { data } = await postSignUp(form) // Ensure `postSignUp` is async
        if (data.status === 200) {
          alert('회원가입 성공')
          navigate('/auth/sign-in')
        } else {
          alert('다시 입력해주세요.')
          navigate('/auth/sign-up')
        }
      }
    } catch (error) {
      console.error('회원가입 실패:', error)
      alert('서버 오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return handleSignUp
}
