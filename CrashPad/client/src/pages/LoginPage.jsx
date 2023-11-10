import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../context/AuthContext'; 

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        // Simulating login, set auth to true
        // In real scenario, you would validate credentials and handle auth state
        navigate('/view-listings'); // Redirect to ViewListings page after login
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                    label="Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
