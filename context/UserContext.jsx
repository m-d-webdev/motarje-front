"use client";
import Error from 'next/error';
import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { getDictionary } from '@/app/i18n';
import PublicApi from '@/config/axios/PublicApi';
import Cookies from 'js-cookie';
import { LoginUser, RefreshToken, RegisterUser } from '@/API/AuthServices';
import { UpdateProfileData } from '@/API/ProfileServices';

const Context = createContext();

const UserContext = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState();
    const [user, setUser] = useState({
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        profile_image: null,
        phone: null,
        age: null,
        verified: null,
        gender: null
    });
    const [lng, setLng] = useState('en')
    const dict = getDictionary(lng);
    const [isLoading, setLoading] = useState(false);

    // --------------FUNCTIONS 
    const submitLoginData = async (data) => {
        try {

            setLoading(true);
            const user = await LoginUser(data)
            setLoading(false);
            if (!user.data) {
                return false
            };

            setUser(user.data.user);
            setLoggedIn(true);
            return true

        } catch (error) {
            setUser({
                id: null,
                email: null,
                first_name: null,
                last_name: null,
                profile_image: null,
                phone: null,
                age: null,
                verified: null,
                gender: null
            });

            setLoggedIn(false);
            setLoading(false);
        }

    }
    const submitRegisterData = async (data) => {
        try {

            setLoading(true);
            const user = await RegisterUser(data)
            setLoading(false);
            if (!user.data) {
                return false
            };

            setUser(user.data.user);
            setLoggedIn(true);
            return true

        } catch (error) {
            setUser({
                id: null,
                email: null,
                first_name: null,
                last_name: null,
                profile_image: null,
                phone: null,
                age: null,
                verified: null,
                gender: null
            });

            setLoggedIn(false);
            setLoading(false);
        }

    }
    const updateFields = async (data) => {
        try {

            setLoading(true);
            const user = await UpdateProfileData(data)
            setLoading(false);
            if (!user.data) {
                return false
            };

            setUser(user.data.user);
            return true

        } catch (error) {
            setLoading(false);
        }

    }

    const value = {
        isLoggedIn,
        user,
        setUser,
        lng,
        setLng,
        dict,
        submitRegisterData,
        submitLoginData,
        isLoading,
        updateFields
    }
    const checkLogged = async () => {
        try {
            const user = await RefreshToken();
            if (user.data) {
                setLoggedIn(true)
                setUser(user.data.user)
            }
        } catch (error) {
            setLoggedIn(false)
        }

    }

    useEffect(() => {
        checkLogged()

        if (localStorage.getItem('i18nextLng')) {
            setLng(localStorage.getItem('i18nextLng'))
        }
    }, [])
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


export const useUser = () => {
    if (!Context) {
        toast.error("failed to  auth you ");
        throw new Error("failed to get the user context ,try refresh !")
    }
    return useContext(Context);
}


export default UserContext
