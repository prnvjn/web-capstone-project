import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container mx-auto text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome To CrashPad</h1>
            <p className="text-xl mb-4">Here you can find your roommate. Sign up or Sign In to proceed.</p>
        </div>
    );
};

export default LandingPage;
