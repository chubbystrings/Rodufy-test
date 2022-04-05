import { useState } from 'react'
import axiosIntance from "../services/axios";


const useAuth = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const register = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setError('');

            const res = await axiosIntance.post('/auth/register', {email, password});
            setIsLoading(false)
            return { error, data: res.data, isLoading}
        } catch (error: any) {
            setError(error.message);
            setIsLoading(false)
            return { error, data: null, isLoading}
        }
    }

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setError('');

            const res = await axiosIntance.post('/auth/login', { email, password});
            localStorage.setItem('RodufyUserToken', res.data.token)
            setIsLoading(false);
            await setCurrentUser()
            return { error, data: res.data, isLoading}
        } catch (error: any) {
            setError(error.message);
            setIsLoading(false)
            return { error, data: null, isLoading}
        }
    }

    const setCurrentUser = async () => {
        try {
            const token = localStorage.getItem('RodufyUserToken')
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const res = await axiosIntance.get('/auth/me', config);
            const user = {
                ...res.data
            }
            localStorage.setItem('RodufyUser', JSON.stringify(user))
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        await axiosIntance.get('/auth/logout');
        localStorage.clear();
        window.location.reload()
    }



    return {
        register,
        login,
        logout
    }
}

export default useAuth;