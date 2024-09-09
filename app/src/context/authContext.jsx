import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useJwt } from "react-jwt";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const { decodedToken, isExpired } = useJwt(token);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/token/', { username, password });
            const { access, refresh } = response.data;
            setToken(access);
            localStorage.setItem('refreshToken', refresh);
            return true;
        } catch (error) {
            console.error('Error de login:', error);
            return false;
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('refreshToken');
    };

    const value = {
        token,
        decodedToken,
        isExpired,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};