"use client";

import { getDictionary } from "@/app/i18n";
import LoginForm from "@/Client/LoginForm";
import PortalLogin from "@/Client/LoginForm";
import RegisterForm from "@/Client/registerForm";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Modal_back from "@/components/ui/modal_back";
import PublicApi from "@/config/axios/PublicApi";
import { useUser } from "@/context/UserContext";
import { Mail } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const page = ({ params }) => {
    const { dict, isLoggedIn} = useUser();
    if(isLoggedIn) return redirect("/")
    const Router = useRouter();
    const onClose = () => {
        Router.back()
    }


    return (
        <>
            <Modal_back  >
                <Card
                    subtitle={dict.titles.register1}
                    // thirdtitle={dict.titles.register2}
                    onClose={onClose}>
                    <RegisterForm />
                </Card>
            </Modal_back>
        </>
    )
}

export default page
