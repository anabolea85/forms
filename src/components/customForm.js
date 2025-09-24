import React from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router'

export const CustomForm = () => {
  return (
    <></>
  )
}

const container = ({children}) => {
  return (
    <Box sx={{width: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Container sx={{height: 'auto'}}>
        <Box>
          <Paper elevation={6}>
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

const title = ({title}) => {
  return (
    <Box>
      <Typography sx={{fontSize:'2rem', textAlign: 'center'}}>{title}</Typography>
    </Box>
  )
}

const centeredBox = ({children}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', paddingBottom: '35px'}}>
      {children}
    </Box>
  )
}

const rightBox = ({children}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'right', gap: '20px', margin: '15px', paddingBottom: '35px'}}>
      {children}
    </Box>
  )
}

const textField = ({label, type}) => {
    return (
      <TextField label={label} type={type}/>
    )
}

const button = ({text}) => {
  return (
    <Button>{text}</Button>
  )
}

const link = ({to, text}) => {
  return (
    <Link to={to} >{text}</Link>
  )
}

CustomForm.container = container
CustomForm.title = title
CustomForm.centeredBox = centeredBox
CustomForm.rightBox = rightBox
CustomForm.textField = textField
CustomForm.button = button
CustomForm.link = link