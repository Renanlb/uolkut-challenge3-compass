import './App.css'
import ContainerUserAccess from './pages/UserAccess/ContainerUserAccess'
import HeaderUserAccess from './pages/UserAccess/HeaderUserAccess'
import LoginForm from './pages/UserAccess/Forms/LoginForm'
import RegisterForm from './pages/UserAccess/Forms/RegisterForm'
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import ForgotPasswordForm from './pages/UserAccess/Forms/ForgotPasswordForm'
import ChangePasswordForm from './pages/UserAccess/Forms/ChangePasswordForm'


function App() {

  return (
    <>
      <HeaderUserAccess/>
      <ContainerUserAccess/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/forgot-password" element={<ForgotPasswordForm/>}/>
          <Route path="/change-password" element={<ChangePasswordForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
