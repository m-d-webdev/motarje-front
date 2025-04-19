import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react";

const Input = React.forwardRef(({ className, parentClass, icon = "", onFocus = () => { }, onBlur = () => { }, showEye = false, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [iFocus, setFocus] = React.useState(false)


  return (
    <div className={`r-s-c  bg-white p-1 px-4  rounded-3xl  w-full border max-w-[700px]  relative `}>

      {
        icon &&
        <span className={`opacity-80 duration-200  ${iFocus ? "text-blue-700" : ""}`}>
          {
            React.isValidElement(icon) ? icon : ""
          }
        </span>
      }
    
      <input
        {...props}
        onFocus={(e) => {
          setFocus(true);
          onFocus(e)
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur(e)
        }}
        type={showPassword ? "text" : type}
        className={`${className} z-10 peer  outline-none font-semibold placeholder:font-medium  w-full tracking-tight   h-9  placeholder:text-base`}
        ref={ref}
        
      />
      <div className="!w-full left-0 duration-200 top-0 peer-focus:border-[#3a89ff] rounded-3xl !h-full absolute border-[1px] "></div>

      {(showEye || type == "password") && (

        <span
          className={` z-10 flex items-center justify-center text-muted`}
        >
          {showPassword ?
            (
              <Eye

                className="w-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />

            )
            :
            (
              <EyeOff
                className="w-5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />

            )}
        </span>
      )}
    </div>
  );
})
Input.displayName = "Input"

export { Input }
