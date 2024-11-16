import { http, HttpResponse } from 'msw'

export const signUp = http.post('/auth/signUp', (res) => {
  console.log(res)

  return HttpResponse.json({
    status: 200,
    message: '회원가입이 완료되었습니다.',
    data: null,
  })
})
