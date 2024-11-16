import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from '../router'
import styled from 'styled-components'

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 1000px;
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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App
