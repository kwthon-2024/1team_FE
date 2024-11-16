import { postSignUp } from '@/apis'
import { H3 } from '@/components/atoms'
import {
  Button,
  DepartmentInput,
  MailCertifyInput,
  MailInput,
  NameInput,
  PasswordInput,
  StudentIdInput,
} from '@/components/modules'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
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

const SignUpSecondStep = ({ methods }) => {
  const navigate = useNavigate()
  const [isCertify, setIsCertify] = useState(false)

  const onSubmit = async (form) => {
    try {
      const { data } = await postSignUp(form) // await 추가
      if (data.status === 200) {
        alert('회원가입 성공!')
        navigate('/auth/sign-in')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('로그인 오류:', error)
      alert('서버 오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <>
      <H3 style={{ marginBottom: '32px' }}>Sign Up</H3>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <MailInput isCertify={isCertify} />
        <MailCertifyInput isCertify={isCertify} setIsCertify={setIsCertify} />
        <PasswordInput />
        <Button type='submit' style={{ marginTop: '32px' }}>
          회원가입
        </Button>
      </Form>
    </>
  )
}

export const SignUpPage = () => {
  const [step, setStep] = useState(1)
  const methods = useForm()

  const handleNextStep = () => {
    setStep(2)
  }

  return (
    <FormProvider {...methods}>
      {step === 1 ? (
        <SignUpFirstStep next={handleNextStep} />
      ) : (
        <SignUpSecondStep methods={methods} />
      )}
    </FormProvider>
  )
}
