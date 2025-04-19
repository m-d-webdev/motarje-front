"use client";

import { getDictionary } from "@/app/i18n";
import { useUser } from "@/context/UserContext";
import { Search } from "lucide-react"
import { useTranslation } from 'react-i18next';

const HeaderSearchButton = () => {
    const { dict } = useUser();
    return (
        <div className="r-c-c p-1 gap-3 cursor-pointer px-2  border-[#ffffff71] rounded-3xl font-medium border  text-white opacity-80 hover:opacity-100">
            <Search className="w-5 h-5  text-white" />
            {dict?.common?.search}
        </div>
    )
}

export default HeaderSearchButton
