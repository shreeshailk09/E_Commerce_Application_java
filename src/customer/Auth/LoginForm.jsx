import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
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
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
       
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
        Login
      </Button>
          <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
            <p>Don't have  an account?</p>
            <Button onClick={()=>navigate("/register")} className='ml-5' size='small' >Register</Button>
          </div>
          </div>
    </form>
  )
}
