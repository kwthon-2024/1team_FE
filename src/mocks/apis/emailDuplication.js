import { http, HttpResponse } from 'msw'

export const emailDuplication = http.post('/auth/emailDuplication', (res) => {
  console.log(res)

  return HttpResponse.json({
    status: 200,
    message: '사용 가능한 이메일',
    data: null,
  })
})
