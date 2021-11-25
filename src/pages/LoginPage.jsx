import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const fromPage = location.state?.from?.pathname || '/'
  return (
    <div>
      <h1>Login</h1>
      {fromPage}
      <p>
        Alredy have an account?: <Link to='/login'>Sing in</Link>
      </p>
    </div>
  )
}
