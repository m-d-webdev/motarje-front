'use client';
import { _onClickOutElem } from '@/utilityfunctions';
import { useRef, useEffect } from 'react'

const PortalBackGround = ({ children, onClose = () => { } }) => {
    const childrenContainer = useRef();
 
    const handleClickOutside = (e) => {
        if (!childrenContainer.current?.contains(e.target)) {
            document.removeEventListener("mousedown", handleClickOutside);
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            onClick={e => _onClickOutElem(childrenContainer.current, onClose)}
            className='bg-[#00000026] fixed w-full h-full top-0 left-0 c-c-c'>
            <div ref={childrenContainer}>
                {children}
            </div>
        </div>
    )
}

export default PortalBackGround
