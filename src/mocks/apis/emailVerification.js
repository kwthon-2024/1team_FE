import { http, HttpResponse } from 'msw'

export const emailVerification = http.post('/auth/emailVerification', (res) => {
  console.log(res)

  return HttpResponse.json({
    status: 200,
    message: '사용자 이메일 인증 성공',
    data: null,
  })
})
