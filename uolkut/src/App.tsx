import './App.css'

// React Routes imports
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages
import ContainerUserAccess from './pages/UserAccess/ContainerUserAccess'
import HeaderUserAccess from './pages/UserAccess/HeaderUserAccess'
import LoginForm from './pages/UserAccess/Forms/LoginForm'
import RegisterForm from './pages/UserAccess/Forms/RegisterForm'
import ForgotPasswordForm from './pages/UserAccess/Forms/ForgotPasswordForm'
import ChangePasswordForm from './pages/UserAccess/Forms/ChangePasswordForm'
import Footer from './pages/UserAccess/Footer'
import Profile from './pages/Profile/Profile'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
// import { AuthProvider } from './hooks/useAuth'; 



function App() {

  const [user] = useAuthState(auth);

  return (
      <BrowserRouter>
        {!user && (
          <>
            <HeaderUserAccess />
            <ContainerUserAccess />
            <Footer />
          </>
        )}
        <Routes>
          <Route path="/" element={user ? <Profile /> : <LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
