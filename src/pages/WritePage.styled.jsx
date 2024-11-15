import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 0 0 100px 0;
`
