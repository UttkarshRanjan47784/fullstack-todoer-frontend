import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RecoilRoot } from "recoil"

import LoginPage from './pages/LoginPage'
const HomePage = React.lazy(() => import (`./pages/HomePage`))
const RegisterPage = React.lazy(() => import( `./pages/RegisterPage`))

export default function App() {
  return (
    <div>
      <RecoilRoot >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<React.Suspense fallback="loading"><RegisterPage /></React.Suspense>} />
            <Route path='/home' element={<React.Suspense fallback="loading"><HomePage /></React.Suspense>} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}
