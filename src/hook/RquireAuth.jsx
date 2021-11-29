import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './use-auth'

// export const RquireAuth = ({children}) => {
//   const location = useLocation()
//   const {isAuth} = useSelector(state => state.user)
//   const auth = isAuth
  
//   if (!auth) {
//     return <Navigate to='/login' state={{ from: location }} />
//   }
//   return children
// }
                  
export const RquireAuth = ({children}) => {
  const {isAuth} = useAuth()
  if (!isAuth) {
    return <Navigate to='/login'/>
  }
  return children
}