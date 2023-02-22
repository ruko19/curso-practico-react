import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../Pages/Login'
import NotFound from '../pages/NotFound'
import PasswordRecovery from '../Pages/PasswordRecovery'
import Home from '../pages/Home'
import Checkout from "../pages/Checkout"
import SendEmail from '../pages/SendEmail'
import NewPassword from '../pages/NewPassword'
import MyAccount from '../pages/MyAccount'
import CreateAccount from '../pages/CreateAccount'
import Orders from '../pages/Orders'
import "../styles/global.scss"



const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

          <Route exact path="/password-recovery" component={<PasswordRecovery />} />
          <Route exact path="/send-email" component={<SendEmail />} />
          <Route exact path="/new-password" component={<NewPassword />} />
          <Route exact path="/account" component={<MyAccount />} />
          <Route exact path="/signup" component={<CreateAccount />} />
          <Route exact path="/checkout" component={<Checkout />} />
          <Route exact path="/orders" component={<Orders />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Layout>

    </BrowserRouter>


  )
}

export default App