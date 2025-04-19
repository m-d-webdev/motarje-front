'use client';
import React from 'react'
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';

const ToSellCar = ({ className, text }) => {
    const { dict } = useUser();
    return (
        <LocalezedLink
            href={'/cars/sell'} className={`rounded-full px-4 p-1 bg-white r-c-c  ${className}`}>
            {
                text ??
                dict?.navigation?.sell

            }
        </LocalezedLink>
    )
}

export default ToSellCar
