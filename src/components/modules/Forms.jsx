import { CiLock, CiUser, CiMenuBurger, CiFaceSmile, CiMail, CiPaperplane } from 'react-icons/ci'
import { FlexColumn } from '../atoms'
import { useEffect, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useControl, useRegister } from '@/components/modules'
import { PiSubtitlesLight } from 'react-icons/pi'
import * as S from './Forms.styled'
import { Controller, useController } from 'react-hook-form'
import FileUpload from 'react-material-file-upload'
import { Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

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

export const TitleForm = () => {
  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label style={{ fontSize: '16px' }}>제목</S.Label>
      <S.InputWrapper>
        <PiSubtitlesLight />
        <S.Input
          style={{ fontSize: '16px' }}
          placeholder='제목을 입력해주세요.'
          {...register('title')}
        />
      </S.InputWrapper>
    </FlexColumn>
  )
}

export const ContentForm = () => {
  const register = useRegister()

  return (
    <FlexColumn style={{ gap: '16px' }}>
      <S.Label>내용</S.Label>
      <S.TextArea placeholder='내용을 입력해주세요.' {...register('content')} />
    </FlexColumn>
  )
}

export const SelectIsPublic = () => {
  const control = useControl()
  const { field } = useController({
    name: 'isPublic',
    control,
    defaultValue: true,
  })

  return (
    <S.Select>
      <S.SelectButton type='button' onClick={() => field.onChange(true)} $active={field.value}>
        Public
      </S.SelectButton>
      <S.SelectButton type='button' onClick={() => field.onChange(false)} $active={!field.value}>
        Private
      </S.SelectButton>
    </S.Select>
  )
}

export const FileUploader = () => {
  const control = useControl()
  useEffect(() => {
    const timer = setTimeout(() => {
      const icon = document.querySelector('.css-q6abum-MuiSvgIcon-root')
      icon.style.color = '#8A1601'

      const border = document.querySelector('.css-1sasres')
      border.style.border = '1px dashed #8A1601'
      border.style.borderColor = 'none'
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Controller
      name='image'
      control={control}
      defaultValue={[]}
      render={({ field: { onChange, value } }) => (
        <FileUpload
          value={value}
          onChange={onChange}
          multiple={false}
          accept={['image/jpeg', 'image/png']}
          title={
            <Typography
              sx={{
                fontFamily: 'moneygraphy, sans-serif',
                color: '#BBBBBB',
                fontWeight: 'bold',
              }}
            >
              드래그 앤 드랍 혹은 버튼을 통해 파일을 업로드하세요.
            </Typography>
          }
          buttonText='이미지를 선택하세요.'
          maxSize={251658240}
          buttonProps={{
            variant: 'contained',
            sx: {
              backgroundColor: '#8A1601',
              color: '#FFFFFF',
            },
            startIcon: <CloudUploadIcon />,
          }}
        />
      )}
    />
  )
}
