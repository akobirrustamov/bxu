import React from 'react';
// import "./GoalsAndValues.css";
import Header from "../header/Header";
import bgImage from "../../images/header2.jpg";
import Footer from "../footer/Footer"; // Import CSS if you need custom styles
import { useTranslation } from 'react-i18next';

import qrcode from "./qrcode.svg"
const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className={"bg-slate-50"}>
          
            <div
                className="  w-full h-72 bg-cover bg-center bg-scroll	text-center text-white "
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "50px",
                    borderBottomLeftRadius: "50px"
                }}
            >
                  <Header/>
                <div className={"header_title"}>
                    <h2 className={"my-2"}>
                        {t("contact.title")}
                    </h2></div>
            </div>

            <div className="p-60 pt-4 pb-4 flex flex-wrap ">
                <div className="lg:w-1/3 md:w-full gap-1 p-2">
                    <div className=" h-auto  bg-white shadow-md rounded-lg hover:shadow-2xl flex items-start ">
                        <div className="p-3">
                            <h3 className="text-xl font-semibold">
                                {t("contact.title2")}</h3>
                            <p>@buxpxti</p>
                            <p> {t("contact.descr2")}</p>
                        </div>
                    </div>
                    <div className=" h-auto  bg-white shadow-md rounded-lg my-4 flex items-start hover:shadow-2xl">
                        <div className="p-3">
                            <img src={qrcode}/>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-2/3 md:w-full grid grid-cols-1 my-2">
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                                <svg className="h-10 w-10 text-zinc-800 m-auto " viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">  <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                  </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle1")}</h5>
                                <p>+998 (55) 309-99-99</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                                <svg className="h-10 w-10 text-zinc-800 m-auto " viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">  <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                  </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle2")}</h5>
                                <p>+998 (55) 305-55-55</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg  hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                               <svg className="h-10 w-10 text-zinc-800 m-auto" width="24" height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path
                                   d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/></svg>
                                  </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle3")}</h5>
                                <p><a style={{textDecoration: 'none', color: "#0F172A"}} href="https://t.me/BuxPXTI_uz"
                                      target="_blank"
                                      rel="noopener noreferrer">t.me/buxpxti_uz</a></p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                                <svg className="h-10 w-10 text-zinc-800 m-auto " viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round">  <path
                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle4")}</h5>
                                <p><a style={{textDecoration: 'none', color: "#0F172A"}}
                                      href="https://facebook.com/buxpxti.uz" target="_blank"
                                      rel="noopener noreferrer">facebook.com/buxpxti.uz</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                                <svg className="h-10 w-10 text-zinc-800 m-auto " viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">  <path
                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>  <polygon
                                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>  </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle5")}</h5>
                                <p><a style={{textDecoration: 'none', color: "#0F172A"}}
                                      href="https://youtube.com/@buxpxti" target="_blank"
                                      rel="noopener noreferrer">youtube.com/@buxpxti</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg  hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                               <svg className="h-10 w-10 text-zinc-800 m-auto" width="24" height="24"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4"
                                                                                                             y="4"
                                                                                                             width="16"
                                                                                                             height="16"
                                                                                                             rx="4"/>  <circle
                                   cx="12" cy="12" r="3"/>  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/></svg>
                                  </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle6")}</h5>
                                <p><a style={{textDecoration: 'none', color: "#0F172A"}}
                                      href="https://www.instagram.com/buxpxti.uz" target="_blank"
                                      rel="noopener noreferrer">instagram.com/buxpxti.uz</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  ">
                        <div className="bg-white shadow-md rounded-lg  hover:shadow-2xl text-center pt-8 pb-8">
                            <span className="">
                               <svg className="h-10 w-10 text-zinc-800 m-auto"  viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">  <circle cx="12" cy="12" r="10"/>  <line x1="2" y1="12"
                                                                                                      x2="22" y2="12"/>  <path
                                   d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                           </span>
                            <div>
                                <h5 className="font-semibold"> {t("contact.linkTitle7")}</h5>
                                <p><a style={{textDecoration: 'none', color: "#0F172A"}} href="https://buxpzti.uz"
                                      target="_blank"
                                      rel="noopener noreferrer">buxpxti.uz</a></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
