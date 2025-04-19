import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const ReadMore = ({ text = "", wanted_length, lang = 'en', className = {} }) => {
    const { t } = useTranslation();
    const [stringLength, setStringLength] = useState(wanted_length);


    const switch_wanted_legth = () => {
        if (stringLength == text.length) {
            setStringLength(wanted_length)
        } else {
            setStringLength(text.length)
        }
    }

    return (
        <div className={`text-base   text-wrap   ${stringLength == wanted_length ? "" : "textSlowShowing"}   ${className}`}>

            {
                text.substring(0, stringLength)
            }

            {
                text.length > wanted_length &&
                <span
                    onClick={switch_wanted_legth}
                    className='text-blue-500 opacity-60 hover:opacity-100 cursor-pointer ml-2 font-semibold'>
                    {
                        stringLength == text.length ?
                            t("LANDING_PAGE.SECTION_2.READ_LESS")
                            :
                            t("LANDING_PAGE.SECTION_2.READ_MORE")
                    }
                </span>
            }
        </div>
    )
}

export default ReadMore
