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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from './profile.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAuth } from '../../context/AuthContext';

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
    console.log(user)
    
    return (
        <Box sx={{ flexGrow: 1 }} className='img'>
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
                            <TextField id="outlined-basic"
                                disabled
                                label={user.email}
                                margin="normal"
                                variant="outlined" />
                                 <TextField
                                id="outlined-basic"
                                margin="normal"
                                label="İsim"
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                margin="normal"
                                label="Soyadınız"
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                margin="normal"
                                label="mail"
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                margin="normal"
                                label="Yaş"
                                variant="outlined" />
                            <TextField
                                id="outlined-basic"
                                margin="normal"
                                label="Telefon"
                                variant="outlined" />
                            <div className={style.buttonWrapper}>
                                <Button
                                    className={style.button}
                                    variant="contained"

                                >onayla</Button>
                            </div>

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
                                <FormControlLabel className={style.formGroup}  control={<Switch defaultChecked />} label="Hesap hareketleri" />
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