import './App.css'
import {Route, Routes} from "react-router-dom"
import { RegisterPage } from './pages/user/RegisterPage'
import { LoginPage } from './pages/user/LoginPage'
import { HomePage } from './pages/user/HomePage'
import { ResetPasswordPage } from './pages/user/ResetPassword'
import { ForgetPasswordPage } from './pages/user/ForgetPassword'

function App() {

  return (
    <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/forget-password' element={<ForgetPasswordPage/>} />
      <Route path='/reset-password' element={<ResetPasswordPage/>} />
    </Routes>
  )
}

export default App