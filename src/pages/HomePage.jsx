import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to='/create'>
        <button>create</button>
      </Link>
    </div>
  )
}
