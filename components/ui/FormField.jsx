import React, { useEffect, useState } from 'react'
import { Label } from "./label";
import { Input } from "./input";
import InputPhoneNum from './form/InputPhoneNum';
import { Link } from 'lucide-react';
import LocalezedLink from '../Globals/LocalezedLink';
import { useUser } from '@/context/UserContext';
const FormField = ({
    onChange = () => { },
    value,
    label,
    placeholder = "",
    id,
    error,
    name = "",
    input_className = "md:p-4 p-2   md:rounded-2xl   w-full  ",
    container_className = "",
    label_className,
    icon = "",
    position = "left",
    InpparentClass = "",
    InputProps = {},
    labelProps = {},
    ErrorProps = {},
    showEye,
    type,
    showRestPassLink = false

}) => {

    const { dict } = useUser()

    return (
        <div className={`flex   w-full   c-s-s  ${container_className} `} >
            <div className="r-b-c w-full mb-[7px]">
                <Label htmlFor={id ?? name} className={`font-semibold m px-3 opacity-80 text-base ${label_className}`} {...labelProps}>{label}</Label>
                {
                    showRestPassLink &&
                    <LocalezedLink className={"text-blue-600 text-sm font-medium opacity-60 hover:opacity-100"} href='/resetPassword' >
                        {dict?.auth.resetPassword}
                    </LocalezedLink>
                }
            </div>
            {
                type == "phone_number" ?
                    <InputPhoneNum value={value} onChange={onChange} />
                    :
                    <Input
                        {...InputProps}

                        parentClass={InpparentClass}
                        className={input_className}
                        name={name}
                        id={id ?? name}
                        icon={icon}
                        position={position}
                        showEye={showEye}
                        type={type}
                        placeholder={placeholder}
                        value={value ? value : undefined}
                        onChange={onChange}

                    />
            }




            {error &&
                <p
                    className="text-[14px] text-red-400"
                    {...ErrorProps}
                >
                    {error}
                </p>
            }
        </div >
    )
}

export default FormField
