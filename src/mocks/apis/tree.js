import { http, HttpResponse } from 'msw'

export const tree = http.get('/tree/:id', (req) => {
  // 요청의 쿼리 파라미터에서 'query' 값을 추출
  // const searchQuery = req.url.searchParams.get('query')

  return HttpResponse.json({
    status: 200,
    message: '내 트리 정보를 불러왔습니다',
    data: {
      treeLevel: 10,
    },
  })
})
