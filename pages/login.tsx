import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SignUp from '../components/auth/signUp'
import { useAuth } from '../context/AuthContext';
import { Router, useRouter } from 'next/dist/client/router';


const Login = () => {
  const { user, login } = useAuth()
  console.log(user)
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(data)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
      //aşağıda yaptığım fonksiyonda json serverdan alınacak data burada işlenecek yine aşığıda statete tutulan data reactcontexe koyulacak, fetch yerine react query kullnılılack

    } catch (err) {
      console.log(err);
      window.alert("wrong password")
     
    }
  }
  React.useEffect(() => {
    user && router.push('/dashboard')
    return () => {
    }
  }, [user])
  const [userData, setUserData]=useState<any>(null)



  React.useEffect(() => {
    fetch("http://localhost:4000/posts").then((res:any)=>{
      return res.json();
    }).then((resp:any)=>{
      setUserData(resp);
      console.log(resp)
    }).catch((err:any)=>{
      console.log(err.message)
    })
  
    
  }, [])


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      > 
      <p>{data.email}</p>
      { userData &&
        userData.map(item => (
          <tr key={item.id}>
            <td>{item.mail}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.telno}</td>

          </tr>
        ))
      }
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
        
          <TextField
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
         
          <Grid container>
            <Grid item xs direction="row">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>

            </Grid>
            <Grid item>
              <Link variant="body2">

              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <SignUp></SignUp>
    </Container>
  );
}

export default Login