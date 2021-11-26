import { RquireAuth } from 'hook/RquireAuth'
import { CreatePost } from 'pages/CreatePost'
import { HomePage } from 'pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { Routes, Route, Navigate,Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>
        <Link to='/' >home</Link>
      </h1>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route path='/' element={<Navigate to='/login' replace />} />

        <Route
          exact
          path='/create'
          element={
            <RquireAuth>
              <CreatePost />
            </RquireAuth>
          }
        ></Route>

        <Route exact path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
