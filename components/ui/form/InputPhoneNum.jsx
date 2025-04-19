"use client";
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

const InputPhoneNum = ({ onChange = () => { }, value, className }) => {
    const newLocal = "#";
    return (
        <div className='w-full  gap-3  '>
            <PhoneInput
                onChange={e =>
                    onChange({
                        target: {
                            value: e
                        }
                    })
                }
                alwaysDefaultMask={true}
                autocompleteSearch
                enableClickOutside
                enableSearch
                dropdownClass='dropDownClass'
                buttonClass='p-5 '
                className={"w-full scrl_none   r-b-c !rounded-2xl  flex-row-reverse  relative h-[46px]"}

                buttonStyle={{
                    minWidth: "60px",
                    height: "100%",
                    justifyContent: "space-between",
                    display: "flex",
                    paddingRight: "35px",
                    flexDirection: "row",
                    borderRadius: "30px",
                    backgroundColor: "#fff",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px !important",
                }}
                placeholder='000 0000 000'
                inputStyle={{
                    padding: "6px ",
                    paddingLeft: 20,
                    fontSize: "16px",
                    fontWeight: 500,
                    width: "85%",
                    margin: "0 4px",
                    marginLeft: "80px",
                    height: "100%",
                    borderRadius: "30px",
                }}

                country={"fr"}
                value={value ?? undefined}
            />
        </div>
    )
}

export default InputPhoneNum
