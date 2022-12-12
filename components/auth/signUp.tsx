import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../context/AuthContext';
import { Router, useRouter } from 'next/dist/client/router';


const signUp=()=> {
  const {user, signup} = useAuth()
  const router = useRouter()

  console.log(user)
  const [data, setData]=useState({
    email:'',
    password:'',
  })
  const handleSignUp = async (e:any) => {
    e.preventDefault();
    try{
      await signup(data.email, data.password)
    }catch(err){
      console.log(err);
    }
    
  }
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button style={{ textTransform: 'none', padding: '0px' }} variant='text' onClick={handleClickOpen}>
        Don't have an account? Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
       
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
            </Avatar> 
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
           <Box component='form' noValidate  onSubmit={handleSignUp}>
           <TextField
            onChange={(e:any)=>
              setData({
                ...data,
                email:e.target.value,
              })
            }
            value={data.email}
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
            />
            <TextField
            onChange={(e:any)=>
            setData({
              ...data,
              password:e.target.value,
            })}
            value={data.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
           </Box>
            <div style={{
              justifyContent: 'center',
              display: 'flex'
            }}>
            <CloseIcon onClick={handleClose}/>
            close
            </div>
         <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
            </Box>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
export default signUp
