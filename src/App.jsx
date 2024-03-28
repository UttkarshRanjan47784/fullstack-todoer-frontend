import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import Header from './components/Header'
// import RegisterPage from './pages/RegisterPage'
const RegisterPage = React.lazy(() => import( `./pages/RegisterPage`))

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<React.Suspense fallback="loading"><RegisterPage /></React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
