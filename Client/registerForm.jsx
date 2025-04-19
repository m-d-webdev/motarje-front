"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import Modal_back from '@/components/ui/modal_back'
import { CalendarFold, Contact, ContactRound, Lock, Mail, MoveLeft, MoveRight, Save, Smartphone } from 'lucide-react'
import FormField from '@/components/ui/FormField'
import { useUser } from '@/context/UserContext'
import Card, { CardButtons } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import FormButtonWithErrors from '@/components/ui/form/FormButtonWithErrors'
import LocalezedLink from '@/components/Globals/LocalezedLink'
import { AnimatePresence, motion } from 'framer-motion'
import { testEmailIsValid } from '@/lib/utils'
import Spinner from '@/components/ui/loaders/Spinner'
import WhiteSpinner from '@/components/ui/loaders/WhiteSpinner'

const RegisterForm = () => {
    const { dict, lng, isLoading, user, submitRegisterData, isLoggedIn, updateFields } = useUser();
    const [isDataSaved, setisDataSaved] = useState(false)
    const router = useRouter();
    const [credential1, setcredential1] = useState({
        first_name: null,
        last_name: null,
        age: null,
        gender: null
    });
    const [credential2, setcredential2] = useState({
        email: null,
        phone: null,
        password: null,
        passwordCofirm: null,
    });

    const [newUserimg, setnewUserimg] = useState(null)

    const [ShowingSte, setShowingSte] = useState(1)
    const [canClick, setCanClick] = useState(false);
    const [errors, setErrors] = useState([])
    useEffect(() => {

        ShowingSte == 1
            ? setCanClick(!Object.values(credential1).some(v => v == null || v == ""))
            : setCanClick(!Object.values(credential2).some(v => v == null || v == "") && testEmailIsValid(credential2.email, () => { !errors.includes(dict?.input?.errors?.email) && setErrors(pv => [...pv, dict?.input?.errors?.email]) }))
    }, [credential1, credential2, ShowingSte]);


    const submitData = async () => {
        setisDataSaved(false)
        delete credential2['passwordCofirm'];
        let isOk = submitRegisterData({ ...credential1, ...credential2 });
        if (isOk) {
            setisDataSaved(true)
        }
    };
    const saveProfileImage = async () => {
        if (!newUserimg) return;
        const formData = new FormData();
        formData.append("profile_image", newUserimg)
        let isOk = await updateFields(formData);


    };

    return (
        <div className='  w-[600px] p-3 relative overflow-hidden '>
            {
                isDataSaved ?
                    <motion.div
                        initial={{ x: 300, opacity: 0, position: "absolute", top: "5px" }}
                        exit={{ x: 300, opacity: 0, position: "absolute", top: "5px", transition: { duration: .8 } }}
                        animate={{ x: 0, opacity: 1, position: "relative", top: "5px", transition: { duration: .8 } }}

                        className='w-full flex items-center flex-col ' >

                        <h1 className='font-semibold opacity-90 text-xl '>{dict.userAccount.CHANGE_PIC}</h1>
                        <input type='file' accept='image/*' onChange={e => setnewUserimg(e.target.files[0])} id='inpImg' className='hidden' />
                        <label htmlFor="inpImg" className='cursor-pointer'>
                            <img className='w-[200px] mt-8 rounded-full object-cover  h-[200px]'
                                src={newUserimg
                                    ? URL.createObjectURL(newUserimg)
                                    : user.profile_image}
                            />
                        </label>
                        <div className="w-full flex gap-4 justify-end mt-8 ">
                            <button
                                onClick={() => { }}
                                className='border p-2 font-semibold rounded-xl px-4  border-gray-300'>
                                {dict.common.later}
                            </button>
                            <FormButtonWithErrors

                                canClick={newUserimg != null}
                                onClick={saveProfileImage}
                                className='bg-black  flex justify-evenly p-2 w-[130px] text-white rounded-xl' >

                                {
                                    isLoading ?
                                        <WhiteSpinner />
                                        :
                                        <>
                                            {dict.common?.save}
                                            <Save />
                                        </>
                                }
                            </FormButtonWithErrors>
                        </div>
                    </motion.div>
                    :
                    <>
                        <div className="!w-full relative r-s-c">
                            <AnimatePresence
                            >

                                {
                                    ShowingSte == 1 &&
                                    <motion.div
                                        initial={{ x: -300, opacity: 0, position: "absolute", top: "5px" }}
                                        exit={{ x: -300, opacity: 0, position: "absolute", top: "5px", transition: { duration: .8 } }}
                                        animate={{ x: 0, opacity: 1, position: "relative", top: "5px", transition: { duration: .8 } }}
                                        className="w-full">
                                        <FormField
                                            name="first_name"
                                            type="text"
                                            container_className='!w-full mb-4 '
                                            required={true}
                                            onChange={e => setcredential1(pv => ({ ...pv, first_name: e.target.value }))}
                                            value={credential1.first_name}
                                            label={dict.input.labels.firstName}
                                            icon={<Contact />}
                                            placeholder={dict.input.placeholders.firstName}
                                        />
                                        <FormField
                                            name="last_name"
                                            type="text"
                                            container_className='!w-full mb-4 '
                                            required={true}
                                            onChange={e => setcredential1(pv => ({ ...pv, last_name: e.target.value }))}
                                            value={credential1.last_name}

                                            label={dict.input.labels.lastName}
                                            icon={<Contact />}
                                            placeholder={dict.input.placeholders.lastName}
                                        />
                                        <div className="c-s-s mb-4 pl-3">
                                            <label htmlFor="" className='font-semibold opacity-80  '>{dict?.input.placeholders.gender}</label>
                                            <div className="flex gap-2 items-center mt-2 justify-start">
                                                <button
                                                    onClick={() => setcredential1(pv => ({ ...pv, gender: pv.gender == "male" ? null : "male" }))}
                                                    className={`p-2 px-4 border duration-200 rounded-3xl border-gray-400 ${credential1.gender == "male" ? "bg-black text-white" : ""} `}>
                                                    {dict?.input.labels.male}
                                                </button>
                                                <button
                                                    onClick={() => setcredential1(pv => ({ ...pv, gender: pv.gender == "female" ? null : "female" }))}
                                                    className={`p-2 px-4 border duration-200 rounded-3xl border-gray-400  ${credential1.gender == "female" ? "bg-black text-white" : ""}`}>
                                                    {dict?.input.labels.female}
                                                </button>
                                            </div>
                                        </div>
                                        <FormField
                                            name="age"
                                            type="text"
                                            container_className='!w-full mb-4 '
                                            required={true}
                                            onChange={e => setcredential1(pv => ({ ...pv, age: e.target.value }))}
                                            value={credential1.age}
                                            label={dict.input.labels.age}
                                            icon={<CalendarFold />}
                                            placeholder={dict.input.placeholders.age}
                                        />
                                    </motion.div>
                                }
                            </AnimatePresence>
                            <AnimatePresence>
                                {
                                    ShowingSte == 2 &&
                                    <motion.div
                                        initial={{ x: 300, opacity: 0, position: "absolute", top: "5px" }}
                                        exit={{ x: 300, opacity: 0, position: "absolute", top: "5px", transition: { duration: .8 } }}
                                        animate={{ x: 0, opacity: 1, position: "relative", top: "5px", transition: { duration: .8 } }}
                                        className="w-full">
                                        <FormField
                                            name="phone"
                                            type="phone_number"
                                            container_className='!w-full    mb-4 '
                                            required={true}
                                            label={dict.input.labels.phone}
                                            onChange={e => setcredential2(pv => ({ ...pv, phone: e.target.value }))}
                                            value={credential2.phone}
                                            icon={<Smartphone />}
                                            placeholder={dict.input.placeholders.phone}
                                        />
                                        <FormField
                                            name="email"
                                            type="email"
                                            container_className='!w-full mb-4 '
                                            required={true}
                                            onChange={e => setcredential2(pv => ({ ...pv, email: e.target.value }))}
                                            value={credential2.email}
                                            label={dict.input.labels.email}
                                            icon={<Mail />}
                                            placeholder={dict.input.placeholders.email}
                                        />
                                        <FormField
                                            name="password"
                                            type="password"
                                            container_className='!w-full mb-4 '
                                            required={true}
                                            onChange={e => setcredential2(pv => ({ ...pv, password: e.target.value }))}
                                            value={credential2.password}

                                            label={dict.input.labels.password}
                                            icon={<Lock />}
                                            placeholder={dict.input.placeholders.password}
                                        />
                                        <FormField
                                            name="confirmPassword"
                                            type="password"
                                            container_className='!w-full    mb-6 '
                                            required={true}
                                            label={dict.input.labels.confirmPassword}
                                            onChange={e => setcredential2(pv => ({ ...pv, passwordCofirm: e.target.value }))}
                                            value={credential2.passwordCofirm}
                                            icon={<Lock />}
                                            placeholder={dict.input.placeholders.confirmPassword}
                                        />

                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                        <div className="w-full flex justify-between items-center mt-10 gap-3">
                            <LocalezedLink href={"/login"} >{dict?.auth?.alreadyHaveAccount}</LocalezedLink>
                            <div className="r-c-c gap-4">
                                {
                                    ShowingSte == 1 ?

                                        <button onClick={() => router.back()} className='p-2 px-4 opacity-70 hover:opacity-100 border border-gray-300 rounded-xl'>
                                            {dict?.common?.cancel}
                                        </button>
                                        :
                                        <button onClick={() => setShowingSte(pv => pv - 1)} className='p-2 px-4 opacity-70 hover:opacity-100 border border-gray-300 rounded-xl'>
                                            {dict?.common?.back}
                                        </button>
                                }

                                <FormButtonWithErrors
                                    onClick={() => {
                                        ShowingSte == 1
                                            ? setShowingSte(2)
                                            : submitData()
                                    }}
                                    canClick={canClick}
                                    errors={errors}

                                    className='bg-black  flex justify-center items-center gap-2   text-white p-2 px-5 rounded-xl'
                                >
                                    {
                                        isLoading ?
                                            <WhiteSpinner />
                                            :
                                            <>
                                                {dict?.common?.next}
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
                    </>
            }
        </div>
    )
}

export default RegisterForm
