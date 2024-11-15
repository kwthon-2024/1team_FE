import { CardItem, ToggleFilter } from '@/components/modules'
import { CHRISMASID } from '@/constants/chrismas'
import { useWatchId } from '@/stores'
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
  const watchId = useWatchId()

  const data = [
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 23,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 24,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
    {
      mailDate: '2024-11-13',
      mailName: '즐거운 월계축전',
      senderId: 2022203043,
      name: '공태윤',
      photo: {
        photoId: 25,
        photoUrl:
          'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
      },
    },
  ]

  return (
    <>
      {watchId === CHRISMASID || <ToggleFilter />}
      <Grid>
        {data.map((item, index) => (
          <CardItem key={index} item={item} cardId={index} />
        ))}
      </Grid>
    </>
  )
}
