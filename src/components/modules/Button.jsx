import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 52px;
  font-size: 18px;
  border-radius: 32px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red2};
  border: none;
`
