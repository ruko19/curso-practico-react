import React from 'react'
import { BrowserRouter, Route, Routes, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import NotFound from '../pages/NotFound'
import RecoveryPassword from '../containers/RecoveryPassword'
import Home from '../pages/Home'
import "../styles/global.scss"



const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Layout>

    </BrowserRouter>


  )
}

export default App