"use client";
import React from 'react'
import { TicketCheck } from 'lucide-react'
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';

const ToUsedCars = ({ className }) => {
    const { dict } = useUser();

    return (
        <LocalezedLink href={'/cars/used'} className={`text-white gap-2 r-c-c  ${className}`}>
            {dict?.filters?.used}
            <TicketCheck className='w-5 h-5 opacity-80 ' />
        </LocalezedLink>
    )
}

export default ToUsedCars
