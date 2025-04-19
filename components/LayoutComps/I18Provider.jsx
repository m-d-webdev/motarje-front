"use client";
import { DM_Sans, Baloo_Bhaijaan_2, Alexandria, Amiri, Markazi_Text } from "next/font/google";

import "@/lib/i18n";
import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next"
import { useUser } from "@/context/UserContext";
const rubik = DM_Sans({ subsets: ['latin'], weight: ['500'] })
const lateef = Markazi_Text({ subsets: ['latin'], weight: ['400'] })


const I18Provider = ({ children }) => {
    const { lng } = useUser()
    
    return (

        <I18nextProvider i18n={i18n}>
            <body
                dir={lng == "ar" ? "rtl" : "ltr"}
                className={` ${lng == "ar" ? lateef.className : rubik.className}  `}
            >
                {children}
            </body>
        </I18nextProvider>

    )
}

export default I18Provider
