import { postLogin } from '@/apis'
import { H3, Text } from '@/components/atoms'
import { Button, PasswordInput, StudentIdInput } from '@/components/modules'
import { useUserActions } from '@/stores'
import { colors } from '@/theme/colors'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const SignInPage = () => {
  const navigate = useNavigate()
  const methods = useForm()
  const { setUserId } = useUserActions()

  const onSubmit = async (form) => {
    try {
      const { data } = await postLogin(form) // await 추가
      if (data.status === 200) {
        alert('로그인되었습니다.')
        setUserId(data.data.studentId)
        navigate('/')
      } else {
        alert('로그인에 실패했습니다.')
      }
    } catch (error) {
      console.error('로그인 오류:', error)
      alert('서버 오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <FormProvider {...methods}>
      <H3>Sign In</H3>
      <Text style={{ marginTop: '32px' }}>아직 KWTree 회원이 아닌가요?</Text>
      <Text
        style={{ color: colors.red2, marginBottom: '56px', cursor: 'pointer' }}
        onClick={() => navigate('/auth/sign-up')}
      >
        지금 가입하세요!
      </Text>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <StudentIdInput />
        <PasswordInput />
        <Button type='submit' style={{ marginTop: '32px' }}>
          로그인
        </Button>
      </Form>
    </FormProvider>
  )
}
