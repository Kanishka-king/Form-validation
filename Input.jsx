import React from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import {
  Button,
  
  FormHelperText,
  
} from '@mui/material';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
    <div className="App__form">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p>Enter Your Username</p>
        <TextField 
          name="firstName" 
          color="success"
          placeholder="your Username"
          variant="outlined"
          fullWidth 
          {...register("firstName", { required: "Please Fill the column", pattern: {
            value: /^^[\w\s-]+$$/,
            message: 'First Name should not contain special characters',
          }
        })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <p>Enter your email</p>
        <TextField
         
          variant="outlined" color="success"
          fullWidth
          name="email"
          {...register("email", { required: "Invalid Email", pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        } })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <p>Enter your password</p>
        <TextField
        color="success"
          variant="outlined"
          fullWidth
          name="password"
          {...register("password", { required: "Please Fill the password", pattern: {
            value: /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.[!@#$%^&])(?=.{8,})$/,
            message: 'Your password is Weak',
        } })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
{}
        
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
        <div className="clearfix"></div>
        <Button variant="outlined" color="success" type="submit" className="btns">
            Submit
          </Button>
      </form>
    </div>
  )
}


export default App