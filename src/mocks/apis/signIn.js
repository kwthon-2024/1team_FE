import { http, HttpResponse } from 'msw'

export const signIn = http.post('/auth/login', (res) => {
  console.log(res)

  return HttpResponse.json({
    status: 200,
    message: '로그인 성공',
    data: {
      studentId: 2022203000,
    },
  })
})
