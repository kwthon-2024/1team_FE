import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: black;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(360deg, #ffffff -5.09%, rgba(145, 145, 145, 0) 100%);
    pointer-events: none;
    z-index: 0;
  }
`

function App() {
  return (
    <Container>
      <div>안녕하세요</div>
    </Container>
  )
}

export default App
