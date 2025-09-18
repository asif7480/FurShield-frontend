import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import axiosInstance from '../axios/axiosInstance';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const register = async (data) => {
        try {
            const response = await axiosInstance.post("/auth/register", data, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            return response
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const login = async (data) => {
        try {
            const response = await axiosInstance.post(`/auth/login`, data)
            return response
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const profile = async () => {
        try {
            const response = await axiosInstance.get(`/auth/profile`)
            setUser(response.data.user)

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            const response = await axiosInstance.post(`/auth/logout`)
            setUser(null)
            // console.log(response);
        } catch (err) {
            console.log(err);
        } finally {

        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, register, login, profile, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};