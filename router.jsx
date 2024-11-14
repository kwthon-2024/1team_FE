import { Route, Routes, Navigate } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' replace />} />
      <Route path='/main' element={<div />}>
        <Route path='/' element={<div />} />
        <Route path='/search' element={<div />} />
      </Route>
      <Route path='/auth' element={<div />}>
        <Route path='/sign-in' element={<div />} />
        <Route path='/sign-up' element={<div />} />
      </Route>
      <Route path='/content' element={<div />}>
        <Route path='/write' element={<div />} />
        <Route path='/detail/:mailId' element={<div />} />
        <Route path='/read/:userId' element={<div />} />
      </Route>
    </Routes>
  )
}
