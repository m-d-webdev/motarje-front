"use client";
import React from 'react'
import { Sparkles } from 'lucide-react'
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';

const ToNewCars = ({ className }) => {
    const { dict } = useUser();

    return (
        <LocalezedLink href={'/cars/new'} className={`text-white gap-2 r-c-c  ${className}`}>
            {dict?.filters?.new}
            <Sparkles className='w-5 h-5 opacity-80 ' />
        </LocalezedLink>
    )
}

export default ToNewCars
