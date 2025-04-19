import { getDictionary } from "@/app/i18n";
import { Print } from "@/app/serverUtils";
import LoginForm from "@/Client/LoginForm";
import { useUser } from "@/context/UserContext";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";


const metadataByLang = {
    en: {
        title: 'Log in to your account | Motarje',
        description: 'Access your personalized dashboard, manage your settings, and continue where you left off. Your world, just one login away.',
    },
    fr: {
        title: 'Connectez-vous à votre compte | Motarje',
        description: 'Accédez à votre tableau de bord personnalisé, gérez vos paramètres et reprenez là où vous vous êtes arrêté. Votre monde est à un clic.',
    },
    ar: {
        title: 'تسجيل الدخول إلى حسابك | Motarje',
        description: 'ادخل إلى لوحتك الخاصة، وقم بإدارة إعداداتك، وواصل من حيث توقفت. كل شيء يبدأ بتسجيل دخولك.',
    }
};


export async function generateMetadata({ params }) {
    const lang = await params.lang || 'en';
    return metadataByLang[lang] || metadataByLang['en'];
}

const page = async ({ params }) => {
    const { lang } = await params;
    const Cookies = await cookies()
    Print(lang)
    const dict = getDictionary(lang)
    if (Cookies.get("accessToken")?.value) return redirect("/")

    return (
        <>
            <h1>{dict.SEO.LOGIN.TITLE}</h1>
            <h2>{dict.SEO.LOGIN.DESCRIPTION}</h2>
            <LoginForm />
        </>
    )
}

export default page
