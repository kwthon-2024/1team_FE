import { Flex } from '@/components/atoms'
import { CiSearch, CiUser, CiMail } from 'react-icons/ci'
import { PiTreeEvergreenThin, PiArrowRightThin } from 'react-icons/pi'
import { colors } from '@/theme/colors'

export const MainHeaderIcons = () => {
  return (
    <Flex gap={32}>
      <CiSearch size={36} color={colors.white} />
      <PiTreeEvergreenThin size={36} color={colors.white} />
      <CiUser size={36} color={colors.white} />
      <CiMail size={36} color={colors.white} />
    </Flex>
  )
}

export const ContentHeaderIcons = () => {
  return <PiArrowRightThin size={36} color={colors.white} />
}
