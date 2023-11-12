import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as needed
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
}

export default App;
