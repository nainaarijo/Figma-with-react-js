import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/Logo (1).png';



function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: "flex", justifyContent: 'space-between', backgroundColor: '#f5f7fa', padding: '10px 0px' }}>
                        <Box>
                            <img src={logo} alt="Logo" sx={{ flexGrow: 1 }} />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                Home
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                Service
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                Features
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                Product
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                Testimonial
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ margin: '0px 15px', color: '#333' }}>
                                FAQ
                            </Typography>
                        </Box>
                        <Box>
                            <Button color="success">Login</Button>
                            <Button variant="contained" color="success">Sign Up</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}

export default Header;
