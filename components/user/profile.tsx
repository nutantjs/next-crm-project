import React from 'react'
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
import Image from 'next/image';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '',
    width: '',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function profile() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid xs={1}>

                </Grid>
                <Grid xs={3}>
                    <Card
                   
                        sx={{
                            display: 'flex',
                            marginRight: '30px',
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
                                label="Adınız"
                                margin="normal"
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Cinsiyet</InputLabel>
                                <Select
                                    sx={{
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Erkek"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
                            <Button
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"

                            >onayla</Button>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            display: 'flex',
                            marginTop:'20px',
                            marginRight: '30px',
                            flexDirection: 'column', flexGrow: 1,
                            justifyContent: 'flex-end',
                            ':hover': {
                                boxShadow: 10,
                            }
                        }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px'
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
                                <img></img>
                          
                            <Button
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"

                            >onayla</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={3}>
                   
                    
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
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
                                Kimlik <img src='https://c.superprof.com/static/img/diplome.19807638.svg' width={15}/>
                            </Typography>
                            <TextField id="outlined-basic"
                                label="Adınız"
                                margin="normal"
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Cinsiyet</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Erkek"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
                            <Button
                                sx={{ borderRadius: '10px', margin: '15px', height: '40px' }}
                                variant="contained"

                            >onayla</Button>
                        </CardContent>
                    </Card>
                    
                </Grid>
                <Grid xs={3}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default profile