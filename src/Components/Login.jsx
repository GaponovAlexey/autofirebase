import React from 'react'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { useDispatch } from 'react-redux'
import { setUser } from 'store/userSlice'
import { Form } from './Form'


export const Login = () => {
  const dispatch = useDispatch(setUser)

  
  
  const handelLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error)
  }
  return (
    <div>
      <Form
      title='sign in'
      handleClick={handelLogin}
      />
    </div>
  )
}
