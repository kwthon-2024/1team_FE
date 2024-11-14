import styled from 'styled-components'
import { Logo, FlexBetween, Flex, H3 } from '@/components/atoms'
import { colors } from '@/theme/colors'
import { Outlet } from 'react-router'
import { ContentHeaderIcons, MainHeaderIcons } from '@/components/modules'

const HeaderLayout = styled.header`
  width: 100%;
  height: 116px;
  padding: 30px 64px;
`

const MainLayout = styled.main`
  width: 100%;
  height: calc(100vh - 196px);
`

const MainHeader = () => {
  return (
    <>
      <HeaderLayout>
        <FlexBetween>
          <Flex gap={16}>
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
  return (
    <>
      <HeaderLayout>
        <Flex gap={16}>
          <Logo />
          <H3 style={{ color: colors.white }}>KWTree</H3>
        </Flex>
      </HeaderLayout>
      <Outlet />
    </>
  )
}

const ContentHeader = () => {
  return (
    <>
      <HeaderLayout>
        <FlexBetween>
          <Flex gap={16}>
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
