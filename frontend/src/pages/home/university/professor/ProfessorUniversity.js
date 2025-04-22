import React, {useState} from "react";
import Slider from "react-slick";

import proff1 from "../../prof/1.png";
import proff2 from "../../prof/2.png";
import proff3 from "../../prof/3.png";
import proff4 from "../../prof/4.png";
import proff5 from "../../prof/5.png";
import proff6 from "../../prof/6.png";
import proff7 from "../../prof/7.png";
import proff8 from "../../prof/8.png";
import proff9 from "../../prof/9.png";
import proff10 from "../../prof/10.png";
import proff11 from "../../prof/11.png";
import proff12 from "../../prof/12.png";
import proff13 from "../../prof/13.png";
import proff14 from "../../prof/14.png";
import { useTranslation } from 'react-i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../../../../images/header2.jpg";
import Header from "../../../header2/Header";
import img2 from "../prorectors/img/img2.jpg";
import {MdOutlineEmail} from "react-icons/md";
import img3 from "../prorectors/img/img3.png";
import img4 from "../prorectors/img/img4.png";
import {FaFacebook, FaYoutube} from "react-icons/fa";
import {BsInstagram, BsTelegram} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import {Modal} from "react-responsive-modal";
import Footer from "../../../footer/Footer";
import { motion } from "framer-motion";

function Proff() {
    const { t,i18n } = useTranslation();
    const location = useLocation()

    const [modalOpen, setModalOpen] = useState(false); // renamed from 'open' to avoid conflict
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const partners = [
        { id: 1, src: proff1, alt: "Partner 1", name: { en: "Baratov Sharif Ramazanovich", ru: "Баратов Шариф Рамазанович", uz: "Baratov Sharif Ramazonovich" }, rank: { en: "Doctor of Psychology, Professor", ru: "Доктор психологии, профессор", uz: "Psixologiya fanlari doktori, professor" }},
        { id: 2, src: proff2, alt: "Partner 2", name: { en: "Baratova Dilafruz Sharifovna", ru: "Баратовa Дилафруз Шарифовна", uz: "Dilafruz Sharifovna Baratova" }, rank: { en: "Doctor of Psychology (DSc), Professor", ru: "Доктор психологии (DSc), профессор", uz: "Psixologiya fanlari doktori(DSc), professor" }},
        { id: 3, src: proff3, alt: "Partner 3", name: { en: "Sobirova Dilafruz Abduroziqovna", ru: "Собирова Дилафруз Абдуразиковна", uz: "Sobirova Dilafruz Abduroziqovna" }, rank: { en: "Doctor of Psychology (DSc), Professor", ru: "Доктор психологии (DSc), профессор", uz: "Psixologiya fanlari doktori(DSc), professor" }},
        { id: 5, src: proff5, alt: "Partner 5", name: { en: "Qodirov Umarali Do'stqobilovich", ru: "Кодиров Умарали Дӯстқобилович", uz: "Qodirov Umarali Do'stqobilovich" }, rank: { en: "Doctor of Psychology (DSc), Professor", ru: "Доктор психологии (DSc), профессор", uz: "Psixologiya fanlari doktori (DSc), professor" }},
        { id: 6, src: proff6, alt: "Partner 6", name: { en: "Nazarov Akmal Mardonovich", ru: "Назаров Акмал Мардонович", uz: "Nazarov Akmal Mardonovich" }, rank: { en: "Doctor of Psychology (DSc), Professor", ru: "Доктор психологии (DSc), профессор", uz: "Psixologiya fanlari doktori (DSc), professor" }},
        { id: 9, src: proff9, alt: "Partner 9", name: { en: "Ramazonov Jahongir Djalolovich", ru: "Рамазонов Жахонгир Жалолович", uz: "Ramazonov Jahongir Djalolovich" }, rank: { en: "Doctor of Philosophy in Psychology (DSc), Associate Professor", ru: "Доктор философии в психологии (DSc), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (DSc), dotsent" }},
        { id: 10, src: proff10, alt: "Partner 10", name: { en: "Elov Ziyodullo Sattorovich", ru: "Элов Зиёдулло Сатторович", uz: "Elov Ziyodullo Sattorovich" }, rank: { en: "Doctor of Psychology (DSc), Associate Professor", ru: "Доктор психологии (DSc), доцент", uz: "psixologiya fanlari doktori (DSc), dotsent" }},
        { id: 4, src: proff4, alt: "Partner 4", name: { en: "Barotov Xumoyin Sharifovich", ru: "Баровтов Хумоин Шарифович", uz: "Barotov Xumoyin Sharifovich" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (PhD), dotsent" }},
        { id: 7, src: proff7, alt: "Partner 7", name: { en: "Avezov Olmos Ravshanovich", ru: "Авезов Олмос Равшаневич", uz: "Avezov Olmos Ravshanovich" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (PhD), dotsent" }},
        { id: 8, src: proff8, alt: "Partner 8", name: { en: "Olimov Laziz Yarashovich", ru: "Олимов Лазиз Ярашович", uz: "Olimov Laziz Yarashovich" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori  (PhD), dotsent" }},
        { id: 11, src: proff11, alt: "Partner 11", name: { en: "Rustamov Shavkat Shuxrat o'g'li", ru: "Рустамов Шавкат Шухрат огли", uz: "Rustamov Shavkat Shuxrat o'g'li" }, rank: { en: "Doctor of Psychology (PhD), Associate Professor", ru: "Доктор психологии (PhD), доцент", uz: "psixologiya fanlari doktori (PhD), dotsent" }},
        { id: 12, src: proff12, alt: "Partner 12", name: { en: "Luqmonov Akmal Subhonovich", ru: "Луқмонов Акмал Субхонович", uz: "Luqmonov Akmal Subhonovich" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (PhD), dotsent" }},
        { id: 13, src: proff13, alt: "Partner 13", name: { en: "Haydarov Shahriyor Shuxrat o'g'li", ru: "Хайдаров Шахриёр Шухрат о'гли", uz: "Haydarov Shahriyor Shuxrat o'g'li" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (PhD), dotsent" }},
        { id: 14, src: proff14, alt: "Partner 14", name: { en: "Sobirov Abdulaziz Abduroziqovich", ru: "Собиров Абдулазиз Абдуразикович", uz: "Sobirov Abdulaziz Abduroziqovich" }, rank: { en: "Doctor of Philosophy in Psychology (PhD), Associate Professor", ru: "Доктор философии в психологии (PhD), доцент", uz: "Psixologiya fanlari bo'yicha falsafa doktori (PhD), dotsent" }},
    ];
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const currentLanguage = i18n.language; // Get current language directly from i18n

    return (
        <div
            className="w-full   h-36 xl:h-72 md:h-48 bg-[#DCDCDC] bg-cover bg-center text-center text-black"
            style={{
                backgroundImage: `url(${bgImage})`,
                borderBottomRightRadius: "60px",
                borderBottomLeftRadius: "60px",
            }}
        >
            <Header />
            <div className="header_title">
                <h2 className="my-4 text-white text-3xl lg:text-4xl"> </h2>
            </div>
            <div className="container mx-auto  py-12 pb-32">
                <div>
                    <div className=" flex flex-wrap mt-8 ">
                        {/* Main Content (2/3 width) */}

                        {/* Main Content (2/3 width) */}
                        <div className="w-full xl:w-2/3 p-2">
                            <div className="my-12">
                                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
                                    {t("rektorat.group")}
                                </h2>

                                {/* Professors Grid */}
                                <div className="flex flex-wrap gap-6">
                                    {partners.map((professor, index) => (
                                        <motion.div
                                            key={professor.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-xl shadow-lg w-64 overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="h-64 w-full overflow-hidden">
                                                <img
                                                    src={professor.src}
                                                    alt={professor.alt}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            <div className="p-4">
                                                <h3 className="text-lg font-bold text-gray-800 mb-1">
                                                    {professor.name[currentLanguage] || professor.name.en}
                                                </h3>
                                                <p className="text-sm text-blue-600 mb-3">
                                                    {professor.rank[currentLanguage] || professor.rank.en}
                                                </p>


                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/*/!* Alternative Carousel View *!/*/}
                                {/*<div className="mt-12">*/}
                                {/*    <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">*/}
                                {/*        {t('professors.carouselTitle')}*/}
                                {/*    </h3>*/}
                                {/*    <Slider {...settings}>*/}
                                {/*        {partners.map((professor) => (*/}
                                {/*            <motion.div*/}
                                {/*                key={professor.id}*/}
                                {/*                whileHover={{ scale: 1.05 }}*/}
                                {/*                className="px-2 py-4"*/}
                                {/*            >*/}
                                {/*                <div className="bg-white rounded-lg shadow-md p-4 h-full">*/}
                                {/*                    <div className="h-48 w-full overflow-hidden rounded-t-lg">*/}
                                {/*                        <img*/}
                                {/*                            src={professor.src}*/}
                                {/*                            alt={professor.alt}*/}
                                {/*                            className="w-full h-full object-cover"*/}
                                {/*                        />*/}
                                {/*                    </div>*/}
                                {/*                    <div className="p-2">*/}
                                {/*                        <h4 className="font-medium text-gray-800 text-center mt-2">*/}
                                {/*                            {professor.name[currentLanguage] || professor.name.en}*/}
                                {/*                        </h4>*/}
                                {/*                        <p className="text-sm text-blue-600 text-center">*/}
                                {/*                            {professor.rank[currentLanguage] || professor.rank.en}*/}
                                {/*                        </p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </motion.div>*/}
                                {/*        ))}*/}
                                {/*    </Slider>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className="w-full xl:w-1/3 px-8 mt-20">
                            <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-lg shadow-xl p-6 border border-blue-700">
                                <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-blue-600">
                                    Foydali havolalar
                                    <span className="block w-12 h-1 bg-blue-400 mt-2 rounded-full"></span>
                                </h2>

                                <ul className="space-y-3">
                                    {/* University Section */}
                                    <li>
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/about"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/about'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Learn more about our university"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.title')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/rector-appeal"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector-appeal'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Read the rector's message"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.rectorAddress')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.goals')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.qualitySystem')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.facts')}
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/university/aim"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/aim'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our mission and vision"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.about.codeOfConduct')}
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    {/* Rector Office Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.rectorOffice.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/rector"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/rector'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="About our rector"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.rector')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/prorector"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/prorector'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Meet our vice rectors"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.viceRectors')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Staff Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.rectorOffice.staff')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/head"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/head'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Department heads information"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.departmentHeads')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/professors"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/professors'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our teaching staff"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.rectorOffice.professors')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Infrastructure Section */}
                                    <li className="mt-5">
                                        <p className="font-bold text-white text-lg mb-2 flex items-center">
                                            <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                                            {t('university.infrastructure.title')}
                                        </p>
                                        <ul className="ml-5 space-y-2 border-l-2 border-blue-700 pl-4">
                                            <li>
                                                <Link
                                                    to="/university/data-center"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/data-center'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Our technical facilities"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.dataCenter')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/campuses"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/campuses'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="University buildings and locations"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.buildings')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/university/dormitory"
                                                    className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 ${location.pathname === '/university/dormitory'
                                                        ? 'bg-blue-600 text-white shadow-md'
                                                        : 'text-blue-200 hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                                                    title="Student accommodation"
                                                >
                                                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                                                    {t('university.infrastructure.dormitory')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                            </div>
                        </div>




                    </div>
                </div>


            </div>

            <Modal open={modalOpen} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Zoomed Professor"
                        style={{ width: "100%", height: "auto" }}
                    />
                )}
            </Modal>

            <Footer/>
        </div>
    );
}

export default Proff;