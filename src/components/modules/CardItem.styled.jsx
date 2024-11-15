import styled from 'styled-components'

export const Wrapper = styled.article`
  height: 420px;
  border-radius: 30px;
  padding: 20px;
  background-color: ${(props) =>
    !props.isOdd ? props.theme.colors.green : props.theme.colors.white};
  color: ${(props) => (props.isOdd ? props.theme.colors.green : props.theme.colors.white)};
  filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.5));
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.01);
    background-color: ${(props) =>
      props.isOdd ? props.theme.colors.darkGreen : props.theme.colors.lightGray};
  }
`

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 23px;
`
