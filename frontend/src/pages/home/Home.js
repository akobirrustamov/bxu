import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./home.css";
import News from "../news/News";
import TablePage from '../tablePage/TablePage';
import Footer from '../footer/Footer';
import Graduates from "./Graduates";
import Facilities from "./Facilities";
import NewNavbar from "./NewNavbar";
import Statistic from "./Statistic";
import Salohiyat from "./Salohiyat";
import Partner from "./Partner";
import Proff from "./Professor";
import Rank from "./Rank";
import BgImage from "./BgImage";
import Gallery from "./Gallery";

import Header2 from "../header2/Header";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import ApiCall, {baseUrl} from '../../config/index';
import logo from "./images/logo.png"


import { useTranslation } from 'react-i18next';
import MyCorusel from "./MyCorusel";
import NewIntoHome from "../news/NewIntoHome";



function Home(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });


    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 5000); // Opens modal after 5 seconds
        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiCall(
                `/api/v1/message`,      // Endpoint URL
                'POST',                 // HTTP Method
                formData,               // Data to send
                null,                   // Optional headers (can be null)
                true                    // JSON request option
            );


                setFormData({ name: '', phone: '', message: '' }); // Reset form
                setIsModalOpen(false);
            alert("Malumotlaringizni qoldirganingiz uchun raxmat.");

        } catch (error) {
            console.error("Error occurred while sending the message:", error);
            alert("Server bilan aloqa o'rnatishda xatolik yuz berdi.");
        }
    };


    return (
        <div className="my-bg-second">
            {/*<Header/>*/}
            <Header2/>
            {/*<div className="header-problem "></div>*/}
            <MyCorusel/>
            {/*<NewNavbar />*/}
            <NewIntoHome/>
            <Statistic />
           <div className={"py-12"}>
               <Partner />
           </div>
            <BgImage />
            {/*<Rank />*/}
            <Proff />
            <Facilities />
            <Graduates />
            <Salohiyat />
            <News />
            <Gallery />
            <div className="hidden lg:block">
                <TablePage />
            </div>

            <Footer />

            {/* Modal */}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center={window.innerWidth < 1024}
                classNames={{
                    modal: window.innerWidth >= 1024 ? 'lg:right-0 lg:top-16 lg:w-1/3' : 'w-11/12',
                }}
            >
                <div className={"flex align-center items-center justify-center gap-4"}>
                    <img src={logo} style={{width: "60px"}}/>
                    <h2 className="text-xl font-bold "> {t('modal.title')}</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 my-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              {t('modal.label1')}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            style={{height: "40px"}}
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=   {t('modal.placeholder1')}
                            className="mt-1 block px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            {t('modal.label2')}
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
        <span
            className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            +998
        </span>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder=   {t('modal.placeholder2')}
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            {t('modal.label3')}
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="mt-1 block w-full  px-1 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {t('modal.btn')}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default Home;
