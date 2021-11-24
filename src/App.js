import { HomePage } from 'pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/' element={<Navigate path='/login' />} />
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
