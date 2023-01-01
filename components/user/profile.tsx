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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { formControlClasses } from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './profile.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAuth } from '../../context/AuthContext';
import { E } from 'chart.js/dist/chunks/helpers.core';
import { Drawer } from '@mui/material';
import axios from "axios";
import Link from 'next/link'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '',
    width: '',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function profile() {

    const [active, setActive] = useState<any>(false);
    const handleClick = () => {
        setActive(!active);

    }
    const { user } = useAuth()

    const [name, setName] = useState("")
    const [mail, setMail] = useState(user.email)
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [telno, setTelno] = useState("")
    const [userData, setUserData] = useState<any>(null)


    React.useEffect(() => {
        fetch(`http://localhost:4000/posts/?mail=${user.email}`).then((res: any) => {
            return res.json();
        }).then((resp: any) => {
            setUserData(resp);
            console.log(resp)
        }).catch((err: any) => {
            console.log(err.message)
        })


    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, surname, mail, age, telno)
        const data = { name, surname, mail, age, telno }



        fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            alert("saved succesfull")
        }).catch((err) => {
            console.log(err)
        })
    }
    // const { user } = useAuth()


    // function loadUser() {

    //     axios.get(`http://localhost:4000/posts/?mail=${user.email}`).then((res) => {
    //           setUserData(res.data.reverse())
    //         console.log(res.data.reverse)
    //     })
    // }

    // React.useEffect(() => {

    //     loadUser();

    // }, []);

    // const [userData, setUserData]= useState<any>([])

    return (
        <Box sx={{ flexGrow: 1 }} className='img'>
            {user.email}
            {userData &&
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
                        <form onSubmit={handleSubmit}>
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
                                {/* {
                                
                                userData && userData.map(item =>(
                                     */}



                                <>
                                    <TextField id="outlined-basic"
                                        disabled
                                        value={user.email}
                                        margin="normal"
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        onChange={e => setName(e.target.value)}
                                        margin="normal"
                                        label={"name"}
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        onChange={e => setSurname(e.target.value)}
                                        margin="normal"
                                        label={"surname"}
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        onChange={e => setAge(e.target.value)}
                                        margin="normal"
                                        label={"age"}
                                        variant="outlined" />
                                    <TextField
                                        id="outlined-basic"
                                        onChange={e => setTelno(e.target.value)}
                                        margin="normal"
                                        label={"telno"}
                                        variant="outlined" />

                                </>


                                {/* ))
                               } */}
                                <div className={style.buttonWrapper}>
                                    <Button
                                        sx={{
                                            margin: "10px"
                                        }}
                                        variant="contained"
                                        type='submit'>
                                        onayla
                                    </Button>

                                    <Button
                                        sx={{
                                            margin: "10px"
                                        }}
                                        variant="contained">
                                        <Link href="/edit">
                                            edit
                                        </Link>
                                    </Button>


                                </div>
                                { }

                            </CardContent>
                        </form>
                    </Card>
                    <Card
                        sx={{
                            display: 'flex',

                            margin: '30px', flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',

                            }}>
                            <Typography
                                className='img'
                                alignContent={'center'}
                                variant="subtitle2"
                                textAlign={'center'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="text.secondary">
                                Diploma <img src='https://c.superprof.com/static/img/diplome.19807638.svg' width={15} />
                            </Typography>
                            <div className={style.img}>
                                <img src='https://c.superprof.com/static/img/diplome.19807638.svg' width={150} />
                            </div>
                            <Button
                                component="label"
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"
                            >yükle
                                <input hidden accept="image/*" multiple type="file" />

                            </Button>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            display: 'flex',
                            margin: '30px', flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',

                            }}>
                            <Typography
                                className='img'
                                alignContent={'center'}
                                variant="subtitle2"
                                textAlign={'center'}
                                margin="normal"
                                paddingBottom={'20px'}
                                fontWeight={'bold'}
                                color="text.secondary">
                                Bildirimler <img src='https://c.superprof.com/static/img/contacter.5fc0bd11.svg' width={15} />
                            </Typography>

                            <Typography
                                textAlign={'start'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="black"
                                fontSize={'small'}                            >
                                SMS
                            </Typography>
                            <FormGroup >
                                <FormControlLabel className={style.formGroup} control={<Switch defaultChecked />} label="Ders talepleri" />
                            </FormGroup>
                            <Typography
                                textAlign={'start'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="black"
                                fontSize={'small'}                            >
                                E-MAIL

                            </Typography>
                            <FormGroup >
                                <FormControlLabel className={style.formGroup} control={<Switch defaultChecked />} label="Hesap hareketleri" />
                                <FormControlLabel className={style.formGroup} control={<Switch defaultChecked />} label="Ders talepleri" />
                                <FormControlLabel className={style.formGroup} control={<Switch defaultChecked />} label="İlanlarımı ilgilendiren teklifler" />
                            </FormGroup>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={3}>
                    <Card
                        sx={{
                            display: 'flex',
                            margin: '30px', flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',

                            }}>
                            <Typography
                                className='img'
                                alignContent={'center'}
                                variant="subtitle2"
                                textAlign={'center'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="text.secondary">
                                Kimlik <img src='https://c.superprof.com/static/img/id.a3f2729c.svg' width={15} />
                            </Typography>
                            <div className={style.img}>
                                <img src='https://c.superprof.com/static/img/id.a3f2729c.svg' width={150} />
                            </div>
                            <Button
                                component="label"
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"
                            >yükle
                                <input hidden accept="image/*" multiple type="file" />

                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={3}>
                    <Card
                        sx={{
                            display: 'flex',
                            margin: '30px', flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{


                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',

                            }}>
                            <div className={style.uploadImg}>


                            </div>
                            <Typography
                                marginTop='10px'
                                className='img'
                                alignContent={'center'}
                                variant="subtitle2"
                                textAlign={'center'}
                                margin="normal"
                                fontWeight={'bold'}
                                color="text.secondary">
                                Yeni fotoğraf yükle ⇪
                            </Typography>

                            <Button
                                component="label"
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"
                            >yükle
                                <input hidden accept="image/*" multiple type="file" />

                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default profile