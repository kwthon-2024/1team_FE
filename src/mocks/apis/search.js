import { http, HttpResponse } from 'msw'

export const search = http.get('/search', () => {
  // 요청의 쿼리 파라미터에서 'query' 값을 추출
  // const searchQuery = req.url.searchParams.get('query')

  return HttpResponse.json({
    status: 200,
    message: '검색 결과를 불러왔습니다.',
    data: {
      results: [
        {
          studentId: 2022203043,
          name: '공태윤',
          department: '컴퓨터공학과',
        },
        {
          studentId: 2022304293,
          name: '공태은',
          department: '전자공학과',
        },
      ],
      total_results: 2,
    },
  })
})
