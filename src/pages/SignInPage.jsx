import { H3, Text } from '@/components/atoms'
import { Button, PasswordInput, StudentIdInput } from '@/components/modules'
import { colors } from '@/theme/colors'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const SignInForm = styled.div`
  width: 430px;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const SignInPage = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <SignInForm>
        <H3>Sign In</H3>
        <Text style={{ marginTop: '32px' }}>아직 KWTree 회원이 아닌가요?</Text>
        <Text style={{ color: colors.red2 }}>지금 가입하세요!</Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StudentIdInput register={register} />
          <PasswordInput register={register} />
          <Button>로그인</Button>
        </Form>
      </SignInForm>
    </>
  )
}
