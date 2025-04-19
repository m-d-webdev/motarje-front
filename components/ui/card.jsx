import React from 'react'
import Logo from '../icones/Logo'
import ButtonClose from './ButtonClose'
import { motion } from 'framer-motion'
import { FramerMotion_Utils } from '@/lib/utils'
export const CardButtons = ({ children, className }) => {
    return <div className={`${className} w-full  r-e-c`}>{children}</div>
}

const Card = ({ className = "", subtitleClassName, withAnimation = true, children, title, onClose = () => { }, subtitle, thirdtitle, thirdtitleClassName }) => {
    return (
        <motion.div
            initial={withAnimation ? FramerMotion_Utils.up.init : {}}
            exit={withAnimation ? FramerMotion_Utils.up.exit : {}}
            animate={withAnimation ? FramerMotion_Utils.up.anim : {}}
            className={`${className} c-c-s drop-shadow-2xl  rounded-xl bg-white gap-4 p-1 rounded-2`}>
            <div className="w-full bg-white drop-shadow-md p-1 py-3 px-2 rounded-xl r-b-c">

                {
                    title
                        ? <h1 className='text-xl font-bold tracking-tighter'>{title}</h1>
                        : <Logo className={"text-black "} />
                }

                <ButtonClose withText={false} onClick={onClose} />
            </div>
            {
                subtitle &&
                <h1 className={`text-xl  mb-2 mx-3  font-semibold ${subtitleClassName}`}>{subtitle}</h1>
            }
            {
                thirdtitle &&
                <h1 className={`text-base mb-2 mx-3 opacity-70 font-medium ${thirdtitleClassName}`}>{thirdtitle}</h1>
            }
            {children}
        </motion.div>
    )
}

export default Card
