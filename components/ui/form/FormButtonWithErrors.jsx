import { CircleX } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FramerMotion_Utils } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useUser } from '@/context/UserContext';
const FormButtonWithErrors = ({ children, onClick = () => { }, className = "", canClick = true, OBJECT_ERRORS = "VALIDATION", errors = [], ...props }) => {


    const [isHovring, setHovering] = useState(false);
    const [Demontions, setdemontions] = useState({
        left: 0,
        top: 0
    });
    const { dict } = useUser();

    const handleSetDementions = e => { setdemontions({ left: e.clientX - 350, top: e.clientY - 200 }) }

    return (
        <>
            {
                isHovring && !canClick &&
                <motion.div
                    initial={FramerMotion_Utils.ShowSlowlly.init}
                    exit={FramerMotion_Utils.ShowSlowlly.exit}
                    animate={FramerMotion_Utils.ShowSlowlly.anim}
                    style={{
                        left: `${Demontions.left - 0}px`, top: `${Demontions.top}px`
                    }}

                    className={`fixed w-[300px]  !z-100 bg-white p-2 px-4 c-s-s rounded-xl drop-shadow-xl`}>
                    {errors.length > 0 ?
                        errors.map((e, i) => <p
                            className='text-red-600 mb-2  flex items-center font-medium'

                            key={i}>
                            <CircleX className='w-4 h-4 mr-2' />
                            {e}
                        </p>

                        )
                        :
                        <p
                            className='text-red-600 mb-2 flex items-center font-medium'>
                            <CircleX className='w-4 h-4 mr-2' />
                            {dict?.errors.FORM_ERROR}
                        </p>
                    }
                </motion.div >
            }
            <button
                {...props}
                onClick={canClick ? () => onClick() : () => { }}
                onMouseMove={handleSetDementions}
                onMouseOver={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={`${canClick ? "relative" : "opacity-60  !cursor-not-allowed"}  ${className}`}
            >


                {children}
            </button>
        </>
    )
}

export default FormButtonWithErrors
