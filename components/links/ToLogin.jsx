'use client';
import PublicApi from '@/config/axios/PublicApi';
import { User } from 'lucide-react'
import Link from 'next/link'
import { getDictionary } from '@/app/i18n';
import { useUser } from '@/context/UserContext';
import LocalezedLink from '../Globals/LocalezedLink';

const ToLogin = ({ className }) => {

    // const login = async () => {
    //     const res = await PublicApi.get("/refresh-token")
    //     console.log(res);
    // }

    const { lng } = useUser();
    const dict = getDictionary(lng);
    return (
        <>
            <LocalezedLink
                href={'/login'}
                className={`text-white gap-2 opacity-75 hover:opacity-100   border border-[#ffffffb4]  p-1 rounded-3xl px-4  r-c-c  ${className}`}
            >
                {dict?.auth?.login}

                <User className='w-5 h-5 opacity-80 ' />
            </LocalezedLink>
        </>
    )
}

export default ToLogin
