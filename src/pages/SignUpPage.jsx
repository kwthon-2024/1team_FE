import { H3 } from '@/components/atoms'
import {
  Button,
  DepartmentInput,
  MailCertifyInput,
  MailInput,
  NameInput,
  PasswordInput,
  StudentIdInput,
  useFormSubmit,
} from '@/components/modules'
import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const SignUpFirstStep = ({ next }) => {
  return (
    <>
      <H3 style={{ marginBottom: '32px' }}>Sign Up</H3>
      <Form>
        <StudentIdInput />
        <DepartmentInput />
        <NameInput />
        <Button type='button' style={{ marginTop: '32px' }} onClick={next}>
          다음으로
        </Button>
      </Form>
    </>
  )
}

const SignUpSecondStep = () => {
  const onSubmit = useFormSubmit()
  const [isCertify, setIsCertify] = useState(false)

  return (
    <>
      <H3 style={{ marginBottom: '32px' }}>Sign Up</H3>
      <Form onSubmit={onSubmit}>
        <MailInput isCertify={isCertify} />
        <MailCertifyInput isCertify={isCertify} setIsCertify={setIsCertify} />
        <PasswordInput />
        <Button style={{ marginTop: '32px' }}>회원가입</Button>
      </Form>
    </>
  )
}

export const SignUpPage = () => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(2)
  }

  return step === 1 ? <SignUpFirstStep next={handleNextStep} /> : <SignUpSecondStep />
}
