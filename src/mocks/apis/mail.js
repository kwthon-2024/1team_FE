import { http, HttpResponse } from 'msw'

export const mail = http.post('/mail/:memberId', (res) => {
  console.log(res)

  return HttpResponse.json({
    status: 200,
    message: '편지 작성이 완료되었습니다.',
    data: {
      mailId: 13,
    },
  })
})
