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

    useEffect( () => {
        profile()
    }, [])

    const profile = async() => {
        try{
            const response = await axiosInstance.get(`/auth/profile`)
            setUser(response.data.user)

        }catch(err){
            console.log(err);
        }finally{
            setLoading(false)
        }
    }

    return(
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            { children }
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