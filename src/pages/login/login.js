import React, { useEffect, useState } from 'react'
import { CustomForm } from '../../components/customForm'
import useLoggerHook from '../../customHooks/useLoggerHook'

export const Login = () => {

  const [ username, setUsername ] = useState('') 
  const [ password, setPassword ] = useState('')

  useLoggerHook('username: ', username)
  useLoggerHook('password: ', password)

  const onClickLogin = () => {
    console.log('clicked login')
  }

  return (
    <CustomForm.container>
      <CustomForm.title title='Login'/>
      <CustomForm.centeredBox>
        <CustomForm.textField label='Username' type='text' onChange={(e) => setUsername(e.target.value)}/>
        <CustomForm.textField label='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
      </CustomForm.centeredBox>
      <CustomForm.centeredBox>
        <CustomForm.button text='Login' onClick={onClickLogin}/>
      </CustomForm.centeredBox>
      <CustomForm.rightBox>
        <CustomForm.link text='Do not have an account?' to='/register'/>
      </CustomForm.rightBox>
    </CustomForm.container>
  )
}