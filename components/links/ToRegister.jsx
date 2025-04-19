"use client";
import { UserPlus } from 'lucide-react'
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';

const ToRegister = ({ className }) => {

    const { dict } = useUser();

    return (
        <LocalezedLink href={'/register'} className={`text-white gap-2 opacity-75 hover:opacity-100  border border-[#ffffffb4]  p-1 rounded-3xl px-4  r-c-c  ${className}`}>
            {dict?.auth?.register}
            <UserPlus className='w-5 h-5  opacity-80 ' />
        </LocalezedLink>
    )
}

export default ToRegister
