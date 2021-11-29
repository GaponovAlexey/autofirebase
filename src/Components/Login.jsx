import React from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { setUser } from 'store/userSlice'
import { Form } from './Form'
import { useNavigate } from 'react-router'

export const Login = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handelLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }))
          navigate('/')
      })
      .catch(console.error)
  }
  return (
    <div>
      <Form title='sign in' handleClick={handelLogin} />
    </div>
  )
}
