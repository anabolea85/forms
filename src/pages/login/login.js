import React from 'react'
import { CustomForm } from '../../components/customForm'
import { Typography } from '@mui/material'

export const Login = () => {
  return (
    <CustomForm.container>
      <CustomForm.title title='Login'/>
      <CustomForm.centeredBox>
        <CustomForm.textField label='Username' type='text'/>
        <CustomForm.textField label='Password' type='password'/>
      </CustomForm.centeredBox>
      <CustomForm.centeredBox>
        <CustomForm.button text='Login'/>
      </CustomForm.centeredBox>
      <CustomForm.rightBox>
        <CustomForm.link text='Do not have an account?' to='/register'/>
      </CustomForm.rightBox>
    </CustomForm.container>
  )
}