'use client';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

const Modal_back = ({ children, close = true }) => {
    const childrenRef = useRef();
    const Router = useRouter()
    const handelClickout = e => {
        if (!close) return;

        if (!childrenRef.current?.contains(e.target)) {
            Router.back()
        }
    }
    return (
        <div
            onClick={handelClickout}
            className='w-full h-full c-c-c fixed top-0 left-0 bg-[#00000080]'>

            <div ref={childrenRef}>
                {children}
            </div>
        </div>
    )
}

export default Modal_back
