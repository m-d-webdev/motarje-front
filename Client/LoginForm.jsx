"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import Modal_back from '@/components/ui/modal_back'
import { Lock, Mail, MoveLeft, MoveRight } from 'lucide-react'
import FormField from '@/components/ui/FormField'
import { useUser } from '@/context/UserContext'
import Card, { CardButtons } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import FormButtonWithErrors from '@/components/ui/form/FormButtonWithErrors'
import LocalezedLink from '@/components/Globals/LocalezedLink'
import { testEmailIsValid } from '@/lib/utils'
import WhiteSpinner from '@/components/ui/loaders/WhiteSpinner'
const LoginForm = ({ }) => {
    const { dict, lng, submitLoginData, isLoading } = useUser();
    const [errors, setErrors] = useState([])
    const router = useRouter();
    const [credential, setcredential] = useState({
        email: null,
        password: null
    });
    const [canClick, setCanClick] = useState(false);
    useEffect(() => {
        setCanClick(credential.password != "" && testEmailIsValid(credential.email, () => { setErrors(pv => pv.filter(e => e != dict?.input.errors.email)) }));
    }, [credential]);
    return (
        <div className='  w-[600px] p-3 '>
            <FormField
                name="email"
                type="email"
                container_className='!w-full    mb-10 '
                required={true}
                label={dict.auth.email}
                onChange={e => setcredential(pv => ({ ...pv, email: e.target.value }))}
                value={credential.email}
                icon={<Mail />}
                placeholder={dict.input.placeholders.email}
            />

            <FormField
                name="password"
                type="password"
                container_className='!w-full    mb-10 '
                required={true}
                showEye={true}
                label={dict.auth.password}
                placeholder={dict.input.placeholders.password}
                showRestPassLink={true}
                icon={<Lock />}
                onChange={e => setcredential(pv => ({ ...pv, password: e.target.value }))}
                value={credential.password}
            />

            <div className="w-full flex justify-between items-center mt-10 gap-3">
                <LocalezedLink href={"/register"}>{dict?.auth?.dontHaveAccount}</LocalezedLink>
                <div className="r-c-c gap-3">

                    <button onClick={() => router.back()} className='p-2 px-4 opacity-70 hover:opacity-100 border border-gray-300 rounded-xl'>
                        {dict?.common?.cancel}
                    </button>
                    <FormButtonWithErrors
                        onClick={() => submitLoginData(credential)}
                        errors={[...errors, credential.password == "" ? dict?.input.erros.ALL_REQUIRED : null]}
                        canClick={canClick}
                        className='bg-black  flex justify-center items-center gap-2   text-white p-2 px-5 rounded-xl'
                    >
                        {
                            isLoading ?
                                <WhiteSpinner />
                                :
                                <>
                                    {dict?.common?.submit}
                                    {
                                        lng == "ar"
                                            ? <MoveLeft />
                                            : <MoveRight />

                                    }
                                </>
                        }

                    </FormButtonWithErrors>
                </div>
            </div>
        </div >
    )
}

export default LoginForm
