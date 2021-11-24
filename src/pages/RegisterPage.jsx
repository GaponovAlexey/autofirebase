import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Login</h1>

      <p>
        Alredy have an account?: <Link to='/login'>Sing in</Link>
      </p>
    </div>
  )
}
