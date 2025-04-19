"use client"
import React, { useEffect, useState } from 'react'
import { changeLanguage, current_language } from "@/lib/i18n";
import { Button, buttonVariants } from '@/components/ui/button';
import PortalBackGround from '@/components/Globals/PortalBackGround';
import ReactDOM from 'react-dom'
import { useUser } from '@/context/UserContext';
import Logo from '@/components/icones/Logo';
import ButtonClose from '@/components/ui/ButtonClose';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Card from '@/components/ui/card';
import { AnimatePresence } from 'framer-motion';
import FranceLogo from "@/public/icones/france.svg"
import UsLogo from "@/public/icones/united-states-flag.svg"
import ArLogo from "@/public/icones/morocco.svg"
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getDictionary } from '@/app/i18n';
const LangCard = ({ href, onClick, lngVal, langKey }) => {
    const { lng } = useUser();
    const router = useRouter()
    const handelClick = () => {

        onClick();
        console.log(href);
        router.push(href);
    }
    return <button
        className={`hover:opacity-100 p-2 flex items-center justify-center gap-4 text-center rounded-xl ${lng == langKey
            ? "text-white w-full bg-black  opacity-100 font-semibold "
            : "text-black bg-white hover:bg-[#fff] w-full opacity-70 font-medium "
            }`}
        onClick={handelClick}
    >
        {lngVal}
        {
            langKey == "en"
                ? <Image src={UsLogo} alt="EN" width={24} height={24} />
                : (
                    langKey == "fr"
                        ? <Image src={FranceLogo} alt="EN" width={24} height={24} />
                        : <Image src={ArLogo} alt="EN" width={24} height={24} />
                )
        }
    </button>
}

const ChangeLangsPortal = ({ onClose }) => {
    const { setLng } = useUser();
    const pathName = usePathname();
    const currentPath = pathName.split('/').slice(2).join('/');

    const handleChangeLang = lng => {
        changeLanguage(lng);
        setLng(lng)

    };
    const { lng } = useUser();
    const dict = getDictionary(lng);
    return ReactDOM.createPortal(
        <PortalBackGround
            onClose={onClose}
        >
            <Card
                onClose={onClose}
                className='w-[400px] p-5'
                thirdtitle={dict?.titles?.CHOOSE_LANG}
            >
                {
                    [
                        {
                            key: "en",
                            value: "English"
                        },
                        {
                            key: "fr",
                            value: "Frensh"
                        },
                        {
                            key: "ar",
                            value: "العربية"
                        },

                    ].map(l => <LangCard onClick={e => handleChangeLang(l.key)} href={`/${l.key}/${currentPath}`} key={l.key} lngVal={l.value} langKey={l.key} />)
                }
            </Card>
        </PortalBackGround>
        , document.body
    )

}

const ChangeLang = () => {
    const { lng } = useUser()
    const [PortalVisible, setPortalVisible] = useState(false)
    return (
        <>
            <div
                onClick={() => setPortalVisible(true)}
                className='border cursor-pointer flex p-1 px-4 rounded-2xl gap-2 border-gray-500'>
                {
                    lng == "en"
                        ? <Image src={UsLogo} alt="EN" width={24} height={24} />
                        : (
                            lng == "fr"
                                ? <Image src={FranceLogo} alt="EN" width={24} height={24} />
                                : <Image src={ArLogo} alt="EN" width={24} height={24} />
                        )
                }
                <p className='text-white '>

                    {lng}
                </p>
            </div>
            <AnimatePresence >
                {
                    PortalVisible &&
                    <ChangeLangsPortal onClose={() => setPortalVisible(false)} />

                }
            </AnimatePresence >
        </>
    )
}

export default ChangeLang
