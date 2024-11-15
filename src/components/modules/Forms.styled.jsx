import styled from 'styled-components'

export const Label = styled.label`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray2};
`

export const Input = styled.input`
  border: none;
  height: 37px;
  flex: 1;
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`

export const CerifyButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red2};
`
