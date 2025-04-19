"use server";
import "../globals.css";
import Header from "@/components/LayoutComps/Header";
import UserContext, { useUser } from "@/context/UserContext";
import I18Provider from "@/components/LayoutComps/I18Provider";
import { locales } from '../i18n';

export async function generateStaticParams() {
  return locales.map(locale => ({ lang: locale }));
}

const RootLayout = async ({ children, modal, params }) => {
  const { lang } = await params;
  console.log("thi s  ----------------------", lang);

  return (  
    <UserContext>
      <html lang={lang} >
        <I18Provider>
          <Header params={params} />
          {children}
          {modal}
        </I18Provider>
      </html>
    </UserContext>
  );
}
export default RootLayout