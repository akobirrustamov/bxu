import React from 'react'
import "../footer/Footer.css"
import logo from "../../images/buxpxti.png"
import locations from "../../images/location.png"
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal/Zoom";




const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='footer pb-0'>

            <div className={"f-block block items-center "}>
                <div>

                    <div className='flex flex-wrap  p-2 col-end-3 gap-4 justify-center'>

                        <div className={" xl:w-1/3 border-r border-white p-2  md:w-75"}>

                            <div className='flex   gap-1 '>
                                <CiLocationOn className='text-white my-2 text-[20px]' />
                                <p className='text-white '>{t('footer.adress2')}</p>
                            </div>
                            <div className='flex items-center text-center gap-1 mx-2'>
                                <CiPhone className='text-white text-[20px]' />

                                <a className='text-white' href="">+998 55 309-99-99</a>
                            </div>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8958577959097!2d64.42846967583635!3d39.80932777154381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5009003f1c477b%3A0x920d498788a13e58!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054121217!5m2!1sru!2s"
                                    width="360" height="200" allowFullScreen="" loading="lazy"
                                    className={"my-2"}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>


                        <div className={"border-r border-white p-2 xl:w-1/3 md:w-75"}>
                            <div className='flex   gap-1 items-center '>
                                <CiLocationOn className='text-white my-2 text-[20px]' />
                                <p className='text-white  '>{t('footer.adress1')}</p>
                            </div>
                            <div className='flex items-center text-center '>
                                <CiPhone className='text-white text-[20px]' />
                                <a className='text-white' href="">+998 55 305-55-55</a>
                            </div>
                            <div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19946.77748909167!2d64.50137016920861!3d39.80150096920902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f501b37c5f08b1d%3A0xf1d1690431b464ac!2sBuxoro%20psixologiya%20va%20xorijiy%20tillar%20instituti!5e0!3m2!1sru!2s!4v1728054406842!5m2!1sru!2s"
                                    width="360" height="200" allowFullScreen="" loading="lazy"
                                    className={"my-2"}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>


                        <div className=''>

                            <div className='mx-8 lg:mx-2 xl:mx-2 my-2'>
                                <ul className="">
                                <p className={"text-white text-lg"}>{t('footer.title')}</p>
                                    <li className='py-1'>
                                        <a className="no-underline  text-lg text-white" href="https://t.me/bxu_uz" target="_blank"><i class="text-[#0088cc] fa-brands fa-telegram"></i> Telegram</a>
                                    </li>
                                    <li className='py-1'>
                                        <a className="no-underline text-lg text-white" href="https://www.instagram.com/bxu.uz" target="_blank"><i class="text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text fa-brands fa-square-instagram"></i> Instagram</a>
                                    </li>
                                    <li className='py-1'>
                                        <a className="no-underline text-lg text-white" href="https://www.facebook.com/share/16Cvb6AEEv/" target="_blank"><i class="text-[#1877F2] fa-brands fa-square-facebook"></i> Facebook</a>
                                    </li>
                                    <li className='py-1'>
                                        <a className="no-underline text-lg text-white" href="https://youtube.com/@bxu_uz" target="_blank"><i class="text-[#FF0000] fa-brands fa-youtube"></i> YouTube</a>
                                    </li>
                                    <li className='py-1'>
                                        <a target="_blank" className='text-white text-lg  no-underline' href=""><i class="text-[#4285F4] fa-solid fa-envelope"></i> buxpxti@gmail.com</a>
                                    </li>

                                </ul>


                            </div>
                            <br />

                        </div>



                    </div>
                </div>


            </div>
            <div className='mt-3 pb-0'>
                <div className='w-[90%] bg-white  '></div>
                <p className='text-center text-white pb-4 m-0 w-75'>{t('footer.copyright')}</p>
            </div>

        </div>
    )
}

export default Footer