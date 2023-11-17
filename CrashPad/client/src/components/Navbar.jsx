import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import {  useAuth } from '../context/AuthContext'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { auth, logout , user} = useAuth();
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
         setAnchorEl(null);
        logout();
        // navigate('/');
       
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
              {console.log(user)}
            <Toolbar>
       
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
  
                  <Link to="/"> CrashPad</Link>
                </Typography>
              
                
                {user && user.id ?  (
                    <div>
                    <Button color="inherit" component={Link} to="/add-listing">
                        Add Listing
                        </Button>
                      
                        <IconButton
                            size="large"
                            onClick={handleMenu}
                            color="inherit"
                        >
                          
                                <Avatar src={user.avatarurl} />
                            {/* <AccountCircle /> */}
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={closeMenu}
                        >
                            <MenuItem component={Link} to="/my-dashboard">Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <div>
                        {/* <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/create-profile">Sign Up</Button> */}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;