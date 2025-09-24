import React from 'react'
import { CustomForm } from '../../components/customForm'

export const SignUp = () => {
  return (
    <CustomForm.container>
      <CustomForm.title title='Register an account'/>
      <CustomForm.centeredBox>
        <CustomForm.textField label='Full name' type='text'/>
        <CustomForm.textField label='Address' type='text'/>
        <CustomForm.textField label='City' type='text'/>
        <CustomForm.textField label='Zip Code' type='number'/>
        <CustomForm.textField label='Username' type='text'/>
        <CustomForm.textField label='Password' type='password'/>
      </CustomForm.centeredBox>
      <CustomForm.centeredBox>
        <CustomForm.button text='Create account'/>
      </CustomForm.centeredBox>
      <CustomForm.rightBox>
        <CustomForm.link text='Already have an account?' to='/'/>
      </CustomForm.rightBox>
    </CustomForm.container>
  )
}