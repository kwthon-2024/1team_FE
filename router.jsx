import { Route, Routes, Navigate } from 'react-router-dom'
import { Header } from '@/components/templates'
import {
  DetailPage,
  MainPage,
  ReadPage,
  SearchPage,
  SignInPage,
  SignUpPage,
  WritePage,
} from '@/pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' replace />} />
      <Route path='/main' element={<Header.Main />}>
        <Route index element={<MainPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='/auth' element={<Header.Auth />}>
        <Route path='sign-in' element={<SignInPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
      </Route>
      <Route path='/content' element={<Header.Content />}>
        <Route path='write' element={<WritePage />} />
        <Route path='detail/:mailId' element={<DetailPage />} />
        <Route path='read' element={<ReadPage />} />
      </Route>
    </Routes>
  )
}
