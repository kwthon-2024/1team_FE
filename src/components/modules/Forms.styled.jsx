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

export const TextArea = styled.textarea`
  min-height: 200px;
  padding: 12px;
  flex: 1;
`

export const Select = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`

export const SelectButton = styled.button`
  width: 100%;
  height: 52px;
  color: #3c3c3c;
  background-color: ${(props) => (props.$active ? 'rgba(138, 22, 1, 0.2)' : '')};
  border: 1px solid ${(props) => props.theme.colors.gray2};
  border-radius: 10px;
`
