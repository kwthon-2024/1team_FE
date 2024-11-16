import { getFriendMail, getMyMail } from '@/apis'
import { CardItem, ToggleFilter } from '@/components/modules'
import { CHRISMASID } from '@/constants/chrismas'
import { useUserId, useWatchId } from '@/stores'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Grid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 60px 68px 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 52px;
`

export const ReadPage = () => {
  const [filter, setFilter] = useState(true)
  const watchId = useWatchId()
  const userId = useUserId()
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['list', watchId, filter],
    queryFn: () => {
      if (userId === watchId) {
        return getMyMail(watchId, filter)
      } else {
        return getFriendMail(watchId)
      }
    },
  })

  if (isLoading) {
    return
  }

  const mailList = data?.data?.data?.mails ?? []

  return (
    <>
      {watchId === CHRISMASID || <ToggleFilter filter={filter} setFilter={setFilter} />}
      <Grid>
        {mailList?.map((item, index) => (
          <CardItem
            onClick={() => navigate(`/content/detail/${item.photo.photoId}`)}
            key={index}
            item={item}
            cardId={index}
          />
        ))}
      </Grid>
    </>
  )
}
