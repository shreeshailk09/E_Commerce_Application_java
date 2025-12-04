import { Button, TextField } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data=new FormData(event.currentTarget);
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    }
    console.log("userData",userData)
  }

  return (
    <>
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First Name"
          fullWidth
        />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last Name"
          fullWidth
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <TextField
          required
          id="email"
          name="email"
          label="Email Address"
          fullWidth
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
        />
      </div>

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: "100%", padding: ".8rem 0", backgroundColor: "#9155FD" }}
      >
        Register
      </Button>
      
    </form>
    <div className='flex justify-center flex-col items-center'>
      <div className='py-3 flex items-center'>
      <p>Already have an account?</p>
      <Button onClick={()=>navigate("/login")} className='ml-5' size='small' >Login</Button>
    </div>
    </div>
  </>
    
  )
}
