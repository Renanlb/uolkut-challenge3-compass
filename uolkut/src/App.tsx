import './App.css'
import ContainerUserAccess from './pages/UserAccess/ContainerUserAccess'
import HeaderUserAccess from './pages/UserAccess/HeaderUserAccess'
import LoginForm from './pages/UserAccess/Forms/LoginForm/LoginForm'
import {  BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <HeaderUserAccess/>
      <ContainerUserAccess/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
