import { useAuth } from 'hook/use-auth'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const { isAuth, email, id, token } = useAuth
  return (
    <div>
      {isAuth ? (
        <div>razlogin</div>
      ) : (
        <div>
          <h1>home</h1>
          <Link to='/create'>
            <button>create content</button>
          </Link>
        </div>
      )}
    </div>
  )
}
