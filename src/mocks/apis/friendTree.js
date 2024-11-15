import { http, HttpResponse } from 'msw'

export const friendTreeMailBoxList = http.get('/friendMail/:memberId', (req) => {
  return HttpResponse.json({
    status: 200,
    message: '친구 메일 정보를 불러왔습니다',
    data: {
      mails: [
        {
          mailDate: '2024-11-13',
          mailName: '즐거운 월계축전',
          senderId: 2022203043,
          name: '공태윤',
          photo: {
            // 사진 한장만 보여주기
            photoId: 23,
            photoUrl: 'https://example.com/photo1.jpg',
          },
        },
        {
          mailDate: '2024-11-13',
          mailName: '즐거운 월계축전',
          senderId: 2022203043,
          name: '공태윤',
          photo: {
            // 사진 한장만 보여주기
            photoId: 23,
            photoUrl: 'https://example.com/photo1.jpg',
          },
        },
        {
          mailDate: '2024-11-13',
          mailName: '즐거운 월계축전',
          senderId: 2022203043,
          name: '공태윤',
          photo: {
            // 사진 한장만 보여주기
            photoId: 23,
            photoUrl: 'https://example.com/photo1.jpg',
          },
        },
      ],
    },
  })
})

export const friendTree = http.get('/freindMail/detail/:mailId', (req) => {
  return HttpResponse.json({
    status: 200,
    message: '내 메일 정보를 불러왔습니다',
    data: {
      mailName: '즐거운 월계축전',
      mailText: '즐거운 월계 축전\n나랑 함께 즐겨줘서 고마워\n김길동아',
      senderId: '2022203043',
      senderName: '공태윤',
      isPublic: true,
      photos: [
        {
          photoId: 23,
          photoUrl: 'https://example.com/photo1.jpg',
        },
        {
          photoId: 24,
          photoUrl: 'https://example.com/photo2.jpg',
        },
        {
          photoId: 25,
          photoUrl: 'https://example.com/photo3.jpg',
        },
      ],
    },
  })
})