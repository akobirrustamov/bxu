import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bgImage from "../../images/header2.jpg";
import { useTranslation } from 'react-i18next';
import dekan from "./dekan.png"
import dekan1 from "./dekan1.png"
import dekan2 from "./dekan2.png"
function Fakultet(props) {
    const { t, i18n } = useTranslation();

    return (
        <div className={"bg-slate-50"}>

            <div className="w-full h-72 bg-cover bg-center text-center  text-white" style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}>
                <Header />

                <div className={"header_title"}>
                    <h2 className="my-2">
                        Fakultet
                    </h2>
                </div>
            </div>
            <div className={"p-14 "}>
                <div className={" w-2/3"}>
                    <div className={"bg-white shadow-xl flex gap-4 rounded-xl"}>
                        <div>
                            <img className={"rounded-l-xl"} width={350} src={dekan}/>
                        </div>
                        <div className={"p-2"}>
                            <h3>Dekan</h3>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                Kurbanov Baxodir Samatovich
                            </p>

                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                    <polyline points="3 7 12 13 21 7"/>
                                </svg>
                                baxodir_kurbanov@buxpxti.uz
                            </p>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                </svg>
                                +998997073650
                            </p>
                            <p className={"flex text-xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                Qabul kunlari: Har kuni 09.00 dan 17.00 gacha
                            </p>
                        </div>
                    </div>
                    <div className={"bg-white shadow-xl flex gap-4 rounded-xl my-8"}>
                        <div>
                            <img className={"rounded-l-xl"} width={350} height={280} src={dekan2}/>
                        </div>
                        <div className={"p-2"}>
                            <h3>Dekan o'rinbosari</h3>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                Abdullayev Amrulla Nasullayevich
                            </p>

                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                    <polyline points="3 7 12 13 21 7"/>
                                </svg>

                            </p>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                </svg>
                                +9989941255252
                            </p>
                            <p className={"flex text-xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                Qabul kunlari: Dushanba-Shanba 09:00 dan 17:00 gacha
                            </p>
                        </div>
                    </div>

                    <div className={"bg-white shadow-xl flex gap-4 rounded-xl my-8"}>
                        <div>
                            <img className={"rounded-l-xl"} width={350} height={280} src={dekan1}/>
                        </div>
                        <div className={"p-2"}>
                            <h3>Dekan o'rinbosari</h3>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                Raxmatov Nurbek Erkinovich
                            </p>

                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                    <polyline points="3 7 12 13 21 7"/>
                                </svg>
                                nurbekrus@gmail.com
                            </p>
                            <p className={"flex text-2xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" width="24" height="24" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                </svg>
                                +998907106446
                            </p>
                            <p className={"flex text-xl align-baseline gap-2"}>
                                <svg className="h-8 w-8 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                Qabul kunlari: Dushanba-Shanba 09:00 dan 17:00 gacha
                            </p>
                        </div>
                    </div>


                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Fakultet;