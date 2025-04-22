import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./welcome.css";
import Header from "../header/Header";
import bgImage from "../../images/header2.jpg"; // Ensure this path is correct
import asoschi from "./img.png"
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';
import pimage from "./imagep.jpg"
function Welcome(props) {
    const [message, setMessage] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {

    }, []);

    return (
        <div>

            <div
                className="  w-full h-72 bg-cover bg-center bg-scroll text-center	  text-white "
                style={{ backgroundImage: `url(${bgImage})`, borderBottomRightRadius:"50px", borderBottomLeftRadius:"50px" }}
            >
            
             <Header />
                <div className={"header_title"}>
               <h2 className={"my-2"}>
                   {t('welcome_speech.title')}
               </h2>
                <p className={"text-xl"}>{t('welcome_speech.descr')}</p>
                </div>
            </div>
            <div className="flex flex-wrap p-3 gap-0 ">
                <div className="w-full md:w-1/3 p-3">
                    <img className="shadow-md rounded w-full" src={pimage} alt="Asoschi"/>
                </div>
                <div className="w-full md:w-2/3 p-3">
                    <div className="shadow-md rounded p-3 my-3 flex flex-wrap ">
                        <h4>{t('welcome_speech.title1')}</h4>
                        <p className={"justify-center text-justify"}>
                            {t('welcome_speech.text1')}
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-1/3 p-3">
                    <img className="shadow-md rounded w-full" src={asoschi} alt="Asoschi"/>
                </div>
                <div className="w-full md:w-2/3 p-3">

                    <div className="shadow-md rounded pt-2 pb-2 p-1">
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                            {t('welcome_speech.title2')}
                        </h4>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Welcome;
