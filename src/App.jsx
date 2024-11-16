import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from '../router'
import styled from 'styled-components'
import { FallingSnow } from '@/components/modules/Snowing' // FallingSnow 컴포넌트 경로를 수정하세요.

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
    z-index: 0;
  }
`

const SnowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 눈송이가 클릭 이벤트를 방해하지 않도록 설정 */
  z-index: 1; /* AppRoutes 위에 눈송이가 보이도록 설정 */
`

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <SnowContainer>
          <FallingSnow />
        </SnowContainer>
        <AppRoutes />
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App
