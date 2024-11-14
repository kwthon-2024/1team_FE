import styled from 'styled-components'
import { Route, Routes, Navigate } from 'react-router-dom'

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.red1};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(360deg, #ffffff -5.09%, rgba(145, 145, 145, 0) 100%);
    /* pointer-events: none; */
    z-index: 0;
  }
`
function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigate to='/main' replace />} />
        <Route path='/main' element={<div />}>
          <Route path='/' element={<div />} />
          <Route path='/search' element={<div />} />
        </Route>
        <Route path='/auth' element={<div />}>
          <Route path='/sign-in' element={<div />} />
          <Route path='/sign-up' element={<div />} />
        </Route>
        <Route path='/content' element={<div />}>
          <Route path='/write' element={<div />} />
          <Route path='/detail/:mailId' element={<div />} />
          <Route path='/read/:userId' element={<div />} />
        </Route>
      </Routes>
    </AppContainer>
  )
}

export default App
