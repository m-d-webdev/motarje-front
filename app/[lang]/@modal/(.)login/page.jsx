"use client";

import { getDictionary } from "@/app/i18n";
import LoginForm from "@/Client/LoginForm";
import PortalLogin from "@/Client/LoginForm";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Modal_back from "@/components/ui/modal_back";
import { useUser } from "@/context/UserContext";
import { Mail } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const page = ({ params }) => {

    const { dict, isLoggedIn } = useUser();
    if (isLoggedIn) return redirect("/");
    const Router = useRouter();
    const onClose = () => {
        Router.back()
    }
    return (
        <>
            <Modal_back  >
                <Card
                    subtitle={dict.titles.login1}
                    thirdtitle={dict.titles.login2}
                    onClose={onClose}>
                    <LoginForm />
                </Card>
            </Modal_back>
        </>
    )
}

export default page
