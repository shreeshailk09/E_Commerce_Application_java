import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';

export const RegisterForm = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt");
const {auth}=useSelector(store=>store);
useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }
},[jwt,auth.jwt])



  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data=new FormData(event.currentTarget);
    const userData={
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    }

    dispatch(register(userData));
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
