import React, { createContext, useState, useContext,useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children, user ,data, logout}) => {
    const [auth, setAuth] = useState(false);
    


    const login = () => {
        if (user && user.id) {
            setAuth(true)
        }
        
    };

    // const logout = () => {
    //     setAuth(false);
    // };

    return (
        <AuthContext.Provider value={{ auth, login, logout, user, data  }}>
            {children}
        </AuthContext.Provider>
    );
};
