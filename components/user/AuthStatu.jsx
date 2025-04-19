"use client";
import { useUser } from '@/context/UserContext'
import React, { useState } from 'react'
import ToLogin from '../links/ToLogin';
import ToRegister from '../links/ToRegister';
import DropDownMenu from './DropDownMenu';
import { AnimatePresence } from 'framer-motion';

const UserLoggedIn = ({ user }) => {
    const [menuOpen, setmenuOpen] = useState(false)
    return <div className="relative ">
        <img onClick={() => setmenuOpen(true)} className='w-[35px] rounded-full object-cover  h-[35px]' src={user.profile_image} alt="" />
        <AnimatePresence>

            {
                menuOpen &&
                <DropDownMenu onClose={() => setmenuOpen(false)} />
            }
        </AnimatePresence>
    </div>
}

const AuthStatu = () => {

    const { isLoggedIn, user } = useUser()
    if (isLoggedIn == true) {
        return <UserLoggedIn user={user} />
    }

    return (
        <div className='r-c-c gap-3'>
            <ToLogin className={''} />
            <ToRegister />
        </div>
    )
}

export default AuthStatu
