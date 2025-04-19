"use client";
import { useUser } from '@/context/UserContext'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { LogOut } from 'lucide-react';
import { Logout } from '@/API/AuthServices';
const DropDownMenu = ({ onClose = () => { } }) => {
    const { isLoggedIn, user, dict, lng } = useUser();
    if (!isLoggedIn) return null;
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <motion.div
        ref={PageRef}
            className={`absolute top-10 w-[240px]  ${lng == "ar" ? "-left-1" : "-right-1"} bg-white p-2 px-4 rounded-md drop-shadow-xl`}
        >
            <button onClick={() => Logout()} className='flex gap-2 font-medium justify-center  border-gray-300 rounded-xl p-1 w-full'>
                {
                    dict?.auth.logout
                }
                <LogOut className='w-5 h-5' />
            </button>
        </motion.div>
    )
}

export default DropDownMenu
