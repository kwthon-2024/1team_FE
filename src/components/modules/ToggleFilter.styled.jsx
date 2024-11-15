import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  height: 60px;
  border-radius: 32px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.gray3};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  color: ${(props) => props.theme.colors.red2};

  &.selected {
    background-color: ${(props) => props.theme.colors.red2};
    color: ${(props) => props.theme.colors.white};
  }
`
