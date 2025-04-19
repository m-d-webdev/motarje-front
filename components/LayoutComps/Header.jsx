"use server";
import Logo from '../icones/Logo'
import ToNewCars from '../links/NewCars'
import ToUsedCars from '../links/UsedCars'
import ToElectricCars from '../links/ElectricCars'
import HeaderSearchButton from './HeaderComps/HeaderSearchButton'
import ToSellCar from '../links/SellCar'
import AuthStatu from '../user/AuthStatu'
import ChangeLang from './HeaderComps/ChangeLang'

const Header = async ({ params }) => {
    const { lang } = await params;
    return (
        <div className="w-full flex justify-center items-center">

            <div className={`${lang == "ar" ? "p-1" : "p-2"} rounded-3xl bg-black r-b-c w-[90%] max-w-[1500px] mt-5`}>

                <div className="r-b-c w-1/5" >
                    <Logo className={"text-white"} />
                    <HeaderSearchButton />
                </div>

                <div className="r-p-c w-3/12 gap-3">
                    <ToNewCars />
                    <ToUsedCars className={''} />
                    <ToElectricCars className={''} />
                </div>
                <ChangeLang />
                <div className="r-c-c gap-3 ">
                    <ToSellCar />
                    <AuthStatu />
                </div>
            </div>
        </div>
    )
}

export default Header
