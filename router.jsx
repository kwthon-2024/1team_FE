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
import { FormProvider } from '@/components/modules'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' replace />} />
      <Route path='/main' element={<Header.Main />}>
        <Route index element={<MainPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='/auth' element={<Header.Auth />}>
        <Route
          path='sign-in'
          element={
            <FormProvider>
              <SignInPage />
            </FormProvider>
          }
        />
        <Route
          path='sign-up'
          element={
            <FormProvider>
              <SignUpPage />
            </FormProvider>
          }
        />
      </Route>
      <Route path='/content' element={<Header.Content />}>
        <Route
          path='write'
          element={
            <FormProvider>
              <WritePage />
            </FormProvider>
          }
        />
        <Route path='detail/:mailId' element={<DetailPage />} />
        <Route path='read' element={<ReadPage />} />
      </Route>
    </Routes>
  )
}
