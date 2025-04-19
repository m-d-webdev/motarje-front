"use client";
import React from 'react'
import { BatteryCharging } from 'lucide-react'
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';


const ToElectricCars = ({ className }) => {
    const { dict } = useUser();
    return (
        <LocalezedLink href={'/cars/electric'} className={`text-white gap-2 r-c-c  ${className}`}>
            {dict?.filters?.electric}
            <BatteryCharging className={`w-6 h-6 opacity-80 `} />
        </LocalezedLink>
    )
}

export default ToElectricCars
