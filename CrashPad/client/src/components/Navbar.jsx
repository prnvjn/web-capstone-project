import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static"  style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    CrashPad
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/create-profile">
                    Create Profile
                </Button>
                {/* Add more navigation links here */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
