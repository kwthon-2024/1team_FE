import { Flex } from '@/components/atoms'
import { CiSearch, CiUser, CiMail } from 'react-icons/ci'
import { PiTreeEvergreenThin, PiArrowRightThin } from 'react-icons/pi'
import { colors } from '@/theme/colors'
import { useNavigate } from 'react-router'
import { useUserActions, useUserId } from '@/stores/userStore'
import { CHRISMASID } from '@/constants/chrismas'

export const MainHeaderIcons = () => {
  const navigate = useNavigate()
  const userId = useUserId()
  const { setWatchId } = useUserActions()

  const handleClickSearch = () => {
    navigate('/main/search')
  }

  const handleClickTree = () => {
    setWatchId(CHRISMASID)
    navigate('/main')
  }

  const handleClickUser = () => {
    if (!userId) {
      navigate('/auth/sign-in')
    } else {
      setWatchId(userId)
      navigate('/main')
    }
  }

  const handleClickMail = () => {
    if (!userId) {
      navigate('/auth/sign-in')
    } else {
      setWatchId(userId)
      navigate('/content/read')
    }
  }

  return (
    <Flex gap={32}>
      <CiSearch
        onClick={handleClickSearch}
        style={{ cursor: 'pointer' }}
        size={36}
        color={colors.white}
      />
      <PiTreeEvergreenThin
        onClick={handleClickTree}
        style={{ cursor: 'pointer' }}
        size={36}
        color={colors.white}
      />
      <CiUser
        onClick={handleClickUser}
        style={{ cursor: 'pointer' }}
        size={36}
        color={colors.white}
      />
      <CiMail
        onClick={handleClickMail}
        style={{ cursor: 'pointer' }}
        size={36}
        color={colors.white}
      />
    </Flex>
  )
}

export const ContentHeaderIcons = () => {
  const navigate = useNavigate()

  const handlleClickBack = () => {
    navigate(-1)
  }
  return (
    <PiArrowRightThin
      onClick={handlleClickBack}
      style={{ cursor: 'pointer' }}
      size={36}
      color={colors.white}
    />
  )
}
