import { getFriendMail, getKWTreeMail, getMyMail } from '@/apis'
import { Button, CardItem, ToggleFilter } from '@/components/modules'
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
  const [page, setPage] = useState(0)
  const watchId = useWatchId()
  const userId = useUserId()
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['list', watchId, filter, page],
    queryFn: () => {
      if (watchId === CHRISMASID) {
        return getKWTreeMail()
      } else if (userId === watchId) {
        return getMyMail(watchId, filter, {
          page,
          size: 10,
        })
      } else {
        return getFriendMail(watchId, {
          page,
          size: 10,
        })
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
      <Button style={{ width: '200px', margin: '0 auto' }} onClick={() => setPage(page + 1)}>
        페이지 추가
      </Button>
    </>
  )
}
