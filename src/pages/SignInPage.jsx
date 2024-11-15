import { H3, Text } from '@/components/atoms'
import { Button, PasswordInput, StudentIdInput, useFormSubmit } from '@/components/modules'
import { colors } from '@/theme/colors'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const SignInPage = () => {
  const onSubmit = useFormSubmit()

  return (
    <>
      <H3>Sign In</H3>
      <Text style={{ marginTop: '32px' }}>아직 KWTree 회원이 아닌가요?</Text>
      <Text style={{ color: colors.red2, marginBottom: '56px' }}>지금 가입하세요!</Text>
      <Form onSubmit={onSubmit}>
        <StudentIdInput />
        <PasswordInput />
        <Button style={{ marginTop: '32px' }}>로그인</Button>
      </Form>
    </>
  )
}
