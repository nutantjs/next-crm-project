import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../components/user/profile.module.css';
import { useAuth } from '../context/AuthContext';
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '',
    width: '',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function profile() {

    // const [active, setActive] = useState<any>(false);
    // const handleClick = () => {
    //     setActive(!active);

    // }
    // const { user } = useAuth()

    // const [name, setName] = useState("")
    // const [mail, setMail] = useState(user.email)
    // const [surname, setSurname] = useState("")
    // const [age, setAge] = useState("")
    // const [telno, setTelno] = useState("")
    // const [userData, setUserData]=useState<any>(null)


    //   React.useEffect(() => {
    //     fetch(`http://localhost:4000/posts/?mail=${user.email}`).then((res:any)=>{
    //       return res.json();
    //     }).then((resp:any)=>{
    //       setUserData(resp);
    //       console.log(resp)
    //     }).catch((err:any)=>{
    //       console.log(err.message)
    //     })


    //   }, [])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(name, surname, mail, age, telno)
    //     const data = { name, surname, mail, age, telno }



    //     fetch("http://localhost:4000/posts",{
    //         method: "POST",
    //         headers:{"content-type":"application/json"},
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         alert("saved succesfull")
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [telno, setTelno] = useState("");
    const [age, setAge] = useState("");
    const [userData, setUserData] = useState<any>([])
    const { user } = useAuth()

//matevmatik admin projesine bakıp stateleri düzenle daha az olması gerekir
//setstate nasıl düzgün ve yanlış kullanılır
// react antipattern öğren 

  
        

       
 

  

    

React.useEffect(() => {
    axios.get(`http://localhost:4000/posts/?mail=${user.email}`).then((res) => {
        setUserData(res.data.reverse())
        setName(res.data[0].name)
        setEmail(res.data[0].email)
        setSurname(res.data[0].surname)
        setTelno(res.data[0].telno)
        setAge(res.data[0].age)
    
    
        console.log(res.data)
    })
 
}, [])


  





    async function Update(e) {
        e.preventDefault()
        const data = {
            name: name,
            mail: email,
            surname: surname,
            age: age,
            telno: telno,
        }
        console.log(data)
        await axios({

            url: `/posts/${userData[0].id}`,
            baseURL: "http://localhost:4000",
            method: "put",
            data: data,
            headers: {
                validateStatus: false,
                'Access-Control-Allow-Origin': 'ttp://localhost:4000',

                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',


            }

        }).then((res)=>{
            alert("saved succ")
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }} className='img'>
            {/* { userData &&
        userData.map(item => (
          <tr key={item.id}>
            <td>{item.mail}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.telno}</td>

          </tr>
        ))
      } */}
            <Grid container spacing={2}>
                <Grid xs={1}>
                </Grid>
                <Grid xs={3}>
                    <Card
                        sx={{
                            margin: '30px',
                            flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <Typography
                                alignContent={'center'}
                                variant="subtitle2"
                                textAlign={'center'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="text.secondary">
                                Genel bilgiler 🙂
                            </Typography>
                            {
                                
                                userData && userData.map(item =>(
                                    

                          

                                <>
                                    <TextField id="outlined-basic"
                                        defaultValue={item.mail}
                                        disabled
                                        margin="normal"
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={item.name}
                                        onChange={(e) => setName(e.target.value)}
                                        margin="normal"
                                        label="name"
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={item.surname}

                                        onChange={(e) => setSurname(e.target.value)}
                                        margin="normal"
                                        label="surname"
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        defaultValue={item.age}
                                        onChange={(e) => setAge(e.target.value)}
                                        margin="normal"
                                        label="age"
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        onChange={(e) => setTelno(e.target.value)}
                                        margin="normal"
                                        defaultValue={item.telno}
                                        variant="outlined" />
                                </>
                           

                            ))
                               }
                            <div className={style.buttonWrapper}>
                                <Button
                                    className={style.button}
                                    variant="contained"
                                    type='submit'
                                    onClick={Update}


                                >onayla</Button>
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </Box>
    )
}

export default profile