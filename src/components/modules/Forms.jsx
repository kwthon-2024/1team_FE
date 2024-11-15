import { CiLock, CiUser, CiMenuBurger, CiFaceSmile, CiMail, CiPaperplane } from 'react-icons/ci'
import { FlexColumn } from '../atoms'
import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useRegister } from '@/components/modules'
import * as S from './Forms.styled'

export const StudentIdInput = () => {
  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>학번</S.Label>
      <S.InputWrapper>
        <CiUser />
        <S.Input placeholder='학번을 입력해주세요.' {...register('studentId')} />
      </S.InputWrapper>
    </FlexColumn>
  )
}

// 추후에 select로 변경 (개발 후순위)
export const DepartmentInput = () => {
  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>학과</S.Label>
      <S.InputWrapper>
        <CiMenuBurger />
        <S.Input placeholder='학과를 입력해주세요.' {...register('department')} />
      </S.InputWrapper>
    </FlexColumn>
  )
}

export const NameInput = () => {
  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>이름</S.Label>
      <S.InputWrapper>
        <CiFaceSmile />
        <S.Input placeholder='이름을 입력해주세요.' {...register('name')} />
      </S.InputWrapper>
    </FlexColumn>
  )
}

export const PasswordInput = () => {
  const register = useRegister()
  const [isShowingPassword, setIsShowingPassword] = useState(false)

  const handleToggleShowingPassword = () => {
    setIsShowingPassword(!isShowingPassword)
  }

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>비밀번호</S.Label>
      <S.InputWrapper>
        <CiLock />
        <S.Input
          type={isShowingPassword ? 'text' : 'password'}
          placeholder='비밀번호를 입력해주세요.'
          {...register('password')}
        />
        <button type='button' onClick={handleToggleShowingPassword}>
          {isShowingPassword ? <BsEye /> : <BsEyeSlash />}
        </button>
      </S.InputWrapper>
    </FlexColumn>
  )
}

export const MailInput = ({ isCertify }) => {
  const handleClickPostEmail = () => {
    alert('메일을 보냈습니다.')
  }

  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>메일</S.Label>
      <S.InputWrapper>
        <CiMail />
        <S.Input
          type='email'
          placeholder='메일을 입력해주세요.'
          {...register('email')}
          readOnly={isCertify}
        />
        <S.CerifyButton onClick={handleClickPostEmail} type='button'>
          인증하기
        </S.CerifyButton>
      </S.InputWrapper>
    </FlexColumn>
  )
}

export const MailCertifyInput = ({ isCertify, setIsCertify }) => {
  const handleClickCertify = () => {
    alert('인증되었습니다.')
    setIsCertify(true)
  }

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>인증번호</S.Label>
      <S.InputWrapper>
        <CiPaperplane />
        <S.Input type='text' placeholder='인증번호를 입력해주세요.' disabled={isCertify} />
        <S.CerifyButton onClick={handleClickCertify} type='button'>
          확인하기
        </S.CerifyButton>
      </S.InputWrapper>
    </FlexColumn>
  )
}
