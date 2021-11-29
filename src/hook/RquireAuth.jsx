import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

export const RquireAuth = ({children}) => {
  const location = useLocation()
  const {isAuth} = useSelector(state => state.user)
  const auth = isAuth
  
  if (!auth) {
    return <Navigate to='/login' state={{ from: location }} />
  }
  return children
}
                  