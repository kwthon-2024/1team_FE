import styled from 'styled-components'
import { Logo, FlexBetween, Flex, H3 } from '@/components/atoms'
import { colors } from '@/theme/colors'
import { Outlet, useNavigate } from 'react-router'
import { ContentHeaderIcons, MainHeaderIcons } from '@/components/modules'

const HeaderLayout = styled.header`
  width: 100%;
  height: 116px;
  padding: 30px 64px;
`

const MainLayout = styled.main`
  width: 100%;
  height: calc(100vh - 116px);
`

const AuthLayout = styled.div`
  width: 100%;
  height: calc(100vh - 116px);
  padding: 0 40px 80px;
  display: flex;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AuthContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
`

const SignInForm = styled.div`
  width: 430px;
  margin: 0 auto;
`

const MainHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderLayout>
        <FlexBetween>
          <Flex onClick={() => navigate('/main')} style={{ cursor: 'pointer' }} gap={16}>
            <Logo />
            <H3 style={{ color: colors.white }}>KWTree</H3>
          </Flex>
          <MainHeaderIcons />
        </FlexBetween>
      </HeaderLayout>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  )
}

const AuthHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderLayout>
        <Flex onClick={() => navigate('/main')} style={{ cursor: 'pointer' }} gap={16}>
          <Logo />
          <H3 style={{ color: colors.white }}>KWTree</H3>
        </Flex>
      </HeaderLayout>
      <AuthLayout>
        <AuthWrapper>
          <AuthContainer>
            <SignInForm>
              <Outlet />
            </SignInForm>
          </AuthContainer>
        </AuthWrapper>
        <ImageWrapper>
          <img src='/images/tree.png' />
        </ImageWrapper>
      </AuthLayout>
    </>
  )
}

const ContentHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderLayout>
        <FlexBetween>
          <Flex onClick={() => navigate('/main')} style={{ cursor: 'pointer' }} gap={16}>
            <Logo />
            <H3 style={{ color: colors.white }}>KWTree</H3>
          </Flex>
          <ContentHeaderIcons />
        </FlexBetween>
      </HeaderLayout>
      <Outlet />
    </>
  )
}

export const Header = {
  Main: MainHeader,
  Auth: AuthHeader,
  Content: ContentHeader,
}
