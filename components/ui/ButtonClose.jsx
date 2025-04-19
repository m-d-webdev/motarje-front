"use client"
import { X } from 'lucide-react'
import React from 'react'
import { useUser } from '@/context/UserContext';

const ButtonClose = ({ className = "", withText = true, onClick = () => { }, ...props }) => {
    const { dict } = useUser();

    return (
        <button
            onClick={onClick}
            className={`${className} rounded-xl font-medium r-c-c  `}
            {...props}
        >
            <X className='opacity-70' />
            {
                withText &&
                dict?.common?.back
            }
        </button>
    )
}

export default ButtonClose
