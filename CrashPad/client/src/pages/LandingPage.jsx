import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    const AUTH_URL = `${props.url}/auth/github`
   
    return (
        <div className="container mx-auto text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome To CrashPad</h1>
            <p className="text-xl mb-4">Here you can find your roommate.
            <a href={AUTH_URL}>
                {console.log(AUTH_URL)}
          <button className="headerBtn"> 🔒 Login via Github </button>
        </a></p>
        </div>
    );
};

export default LandingPage;
