import { CiLock, CiUser } from 'react-icons/ci'
import { styled } from 'styled-components'
import { FlexColumn } from '../atoms'
import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const Label = styled.label`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray2};
`

const Input = styled.input`
  border: none;
  height: 37px;
`

const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`

export const StudentIdInput = ({ register }) => {
  return (
    <FlexColumn style={{ gap: '16px', marginTop: '56px' }}>
      <Label>학번</Label>
      <InputWrapper>
        <CiUser />
        <Input
          placeholder='학번을 입력해주세요.'
          style={{ flex: '1' }}
          {...register('studentId')}
        />
      </InputWrapper>
    </FlexColumn>
  )
}

export const PasswordInput = ({ register }) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false)

  const handleToggleShowingPassword = () => {
    setIsShowingPassword(!isShowingPassword)
  }
  return (
    <FlexColumn style={{ gap: '16px', marginBottom: '56px' }}>
      <Label>비밀번호</Label>
      <InputWrapper>
        <CiLock />
        <Input
          type={isShowingPassword ? 'text' : 'password'}
          placeholder='비밀번호를 입력해주세요.'
          style={{ flex: '1' }}
          {...register('password')}
        />
        <button onClick={handleToggleShowingPassword}>
          {isShowingPassword ? <BsEye /> : <BsEyeSlash />}
        </button>
      </InputWrapper>
    </FlexColumn>
  )
}
