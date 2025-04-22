import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bgImage from "../../images/header2.jpg"; // Import your background image here
import logo from "../../images/logoySymbol.png"
import symbol1 from "../../images/symbol1.png"
import symbol2 from "../../images/symbol2.png"
import symbol3 from "../../images/symbol3.png"
import symbol4 from "../../images/symbol4.png"
import symbol5 from "../../images/symbol5.png"
import symbol6 from "../../images/symbol6.png"
import symbol7 from "../../images/symbol7.png"
import gimn from "../../images/gimn.mp3"
import { useTranslation } from 'react-i18next';


const Symbols = () => {
    const { t } = useTranslation();
    const values = [
        {
            title: `${t("symbols.title1")}`,
            content:  `${t("symbols.text1")}`,
            icon: symbol1,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title:  `${t("symbols.title2")}`,
            content: `${t("symbols.text2")}`,
            icon: symbol2,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title:  `${t("symbols.title3")}`,
            content: `${t("symbols.text3")}`,
            icon: symbol3,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title:  `${t("symbols.title4")}`,
            content: `${t("symbols.text4")}`,
            icon: symbol4,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title:  `${t("symbols.title5")}`,
            content: `${t("symbols.text5")}`,
            icon: symbol5,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title:  `${t("symbols.title6")}`,
            content: `${t("symbols.text6")}`,
            icon: symbol6,
            width: "lg:w-1/2 md:w-full"
        },
        {
            title: "",
            content: `${t("symbols.text7")}`,
            icon: symbol7,
            width: "lg:w-1/2 md:w-full"
        }
    ];

    return (
        <div className={"bg-slate-50"}>
          
            <div
                className="w-full h-72 bg-cover bg-center text-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}
            >
                  <Header />
                <div className={"header_title"}>

                    <h2 className="my-2">{t("symbols.title")},</h2>
                </div>
            </div>
            <div className={"p-5"}>
                <div className={"text-center flex justify-center"}>
                    <div className={"w-80  p-2 bg-white shadow-md rounded-lg h-full flex items-start"}>
                        {/*sdd*/}
                        <img width={300} height={200} src={logo}/>
                    </div>
                </div>
                <div className="">

                    <div className="flex flex-wrap justify-start gap-0">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`p-4 ${value.width}`}
                            >
                                <div className="bg-white shadow-md rounded-lg h-full flex items-start gap-5 p-4">
                                    <img src={value.icon} alt={`${value.title} `} className="w-20 h-20 mt-1"/>
                                    <div>
                                        <h5 className="font-semibold">{value.title}</h5>
                                        <p className="mt-2">{value.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="flex flex-wrap justify-between items-start gap-0  p-5 pt-0  rounded-lg">
                    <div className="lg:w-1/2 md:w-full p-4">
                        <h3 className="text-2xl font-bold">{t("symbols.title_madhiya1")}</h3>
                        <audio controls className="w-full mt-4">
                            <source src={gimn} type="audio/mp3"/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div className="lg:w-1/2 md:w-full p-4">
                        <h3 className="text-2xl font-bold">{t("symbols.title_madhiya2")}</h3>
                        <p className="mt-4">
                            Ona yurtim tarixini o‘rgatguvchi o‘zing san,<br/>
                            Xorijiy til sirlarini so‘zlatguchi o‘zing san.<br/>
                            Ibn Sino hazratlari topib ming dardga davo,<br/>
                            O‘zi uchun topolmagan dardga malham o‘zing san…<br/>
                            Najot yo‘li, bilim koni, ilm nuri o‘zing san,<br/>
                            Sen jonajon oliy gohim, ZARMED o‘zing san!<br/>
                            <br/>
                            Iqtisod – bir yo‘nalishi, bilim maskanim yuzi,<br/>
                            Muallimlik, ruhshunoslik – naq mo‘jizaning o‘zi,<br/>
                            Al-Buxoriy “Sahih” lari ma’naviyatning so‘zi,<br/>
                            Top mingtalik orzusida ish boshlagan o‘zing san…<br/>
                            Najot yo‘li, bilim koni, ilm nuri o‘zing san,<br/>
                            Sen jonajon oliy gohim, ZARMED o‘zing san!<br/>
                            <br/>
                            Keldi qancha olimlarkim, har bittasi bir jahon,<br/>
                            Buxoroyu Samarqanddan, azim Toshkentdan tomon.<br/>
                            Ilmi sabab ustozlarni taniydib u keng jahon…<br/>
                            O‘z kasbinig ustasidir, ular – alloma zamon!<br/>
                            Najot yo‘li, bilim koni, ilm nuri o‘zing san,<br/>
                            Sen jonajon oliy gohim, ZARMED o‘zing san!<br/>
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Symbols;
