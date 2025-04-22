import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../images/logoMain.png";
import { IoLanguage, IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import uz from "../../images/flag-uzb.jpg"
import ru from "../../images/flag-rus.jpg"
import eng from "../../images/flag-eng.jpg"
import { useTranslation } from 'react-i18next';
import ApiCall from "../../config";
import "../home/style.css"
function Header(props) {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false);
    };

    const [newspapers, setNewspapers] = useState([]);

    useEffect(() => {
        fetchNewspapers();
    }, []);

    const fetchNewspapers = async () => {
        try {
            const response = await ApiCall('/api/v1/newspaper', 'GET', null, null, true);
            setNewspapers(response.data);

        } catch (error) {
            console.error("Error fetching newspapers:", error);
        }
    };
    return (
        <div className={"my-bg-second"}>
        <div className="blur-container text-start rounded-bottom-5">
            <nav id='blur-header' className='h-[70px] sticky top-0 transition-all border-b-slate-300 duration-300 md:h-24 max-w-screen-xl mx-auto  border-b-[1px] flex items-center justify-between flex-wrap w-full'>
                <Link to={"/"}>
                    <img className='h-10 md:h-16 filter contrast-more' alt='logo' src={logo} />
                </Link>
                <div className='h-full flex items-center'>
                    <ul className='hidden items-center mt-2 md:hidden lg:flex '>
                        {/*<li className='mx-1 relative'>*/}
                        {/*    <Link to={"/"} id="dropdown1Link" data-dropdown-toggle="dropdown1"*/}
                        {/*          className="flex items-center justify-evenly !gap-0 w-full py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent no-underline">*/}
                        {/*        {t('navbar.nav_item_title0')}*/}
                        {/*    </Link>*/}

                        {/*</li>*/}
                        <li className=' relative'>
                            <button id="dropdown1Link" data-dropdown-toggle="dropdown1"
                                    className="flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                {t('navbar.nav_item_title0')}
                                <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0"/>
                            </button>
                            <div id="dropdown1"
                                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute">
                                <ul id='menyucha' className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdown1Link">
                                    {/*<li id='ota-ul'>*/}
                                    {/*    <a id='ota-ul'*/}
                                    {/*       href={"https://buxpxti.uz/wp-content/uploads/2024/08/Buxoro-psixologiya-va-xorijiy-tillar-institutining-PASPORTI.pdf"}*/}
                                    {/*       target="_blank" rel="noopener noreferrer"*/}
                                    {/*       className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">*/}
                                    {/*        Institut haqida*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/welcome"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item1')}
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link to={"/kampusies"} id='ota-ul' href="#"
                                              className="block px-2 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item2')}</Link>
                                    </li>


                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/contact-us"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item3')}</Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/faculties"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item4')}</Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/academic-calendar"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item5')}
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/all-news"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item6')}
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/rektorat"}
                                              className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">
                                            {t('navbar.nav_item7')}
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/fakultet"}
                                              className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item8')}
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className='mx-2 relative'>
                            <Link to={"/all-books"} id="dropdown1Link" data-dropdown-toggle="dropdown1"
                                  className="flex items-center justify-evenly !gap-0 w-full py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent no-underline">
                                {t('navbar.nav_item_title1')}

                            </Link>

                        </li>

                        <li className='mx-3 relative'>
                            <Link to={"/memorandum"} id="dropdown3Link" data-dropdown-toggle="dropdown3"
                                    className="no-underline flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                {t('navbar.nav_item_title2')}

                            </Link>

                        </li>


                        <li className='mx-2 relative'>
                            <a
                                href={"https://library.buxpxti.uz"}
                                id="dropdown1Link"
                                data-dropdown-toggle="dropdown1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-evenly !gap-0 w-full py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent no-underline"
                            >
                                {t('navbar.nav_item_title3')}
                            </a>


                        </li>

                        <li className='mx-3 relative'>
                            <Link id="dropdown3Link" data-dropdown-toggle="dropdown3"
                                  className="text-decoration-none flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                {t('navbar.nav_item_title4')}
                                <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0"/>
                            </Link>
                            <div id="dropdown3"
                                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-25 dark:bg-gray-700 dark:divide-gray-600 absolute">
                                <ul id='menyucha' className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdown3Link">
                                    {/*<li id='ota-ul'>*/}
                                    {/*    <Link id='ota-ul' to={"/newspaper/all"}*/}
                                    {/*          className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">*/}
                                    {/*        Barchasi </Link>*/}
                                    {/*</li>*/}
                                    {/*{newspapers.map(item =>*/}
                                    {/*    <li id='ota-ul'>*/}
                                    {/*        <Link id='ota-ul' to={"/newspaper/" + item?.year}*/}
                                    {/*              className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">*/}
                                    {/*            {item?.year}-yil chop etilganlar </Link>*/}
                                    {/*    </li>*/}
                                    {/*)}*/}


                                        <li id='ota-ul'>
                                                <Link id='ota-ul' to={"/newspaper/hamkor-jurnallar" }
                                                  className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">
                                                    Hamkor jurnallar </Link>
                                        </li>
                                        <li id='ota-ul'>
                                            <Link id='ota-ul' to={"/newspaper/ilmiy-axborotnomalar" }
                                                  className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">
                                                Ilmiy axborotnomalar </Link>
                                        </li>



                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>


                <div className='flex items-center gap-x-3 mr-2'>
                    <div className='flex items-start lg:hidden'>
                        <button onClick={toggleDrawer}
                                className='flex items-center gap-x-2 text-white w-[40px] h-[36px] lg:w-[155px] lg:h-[36px] bg-[#004C88] justify-center rounded-md text-[16px] uppercase'>
                            <MdMenu color='#FFF' size={"24px"} className='flex lg:hidden'/>
                        </button>
                    </div>
                    {/*language button*/}
                    <div className='relative'>

                        <button className='ms-2 p-2 transition-all duration-200 ease-in-out border-[1px]   flex items-center justify-center w-[36px] rounded-md h-[36px] bg-white text-2xl'
                                onClick={toggleDropdown}>
                            <IoLanguage className={"text-black"} />
                        </button>
                        {isDropdownOpen && (
                            <div className='absolute  mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                                <div className='py-1'>
                                    <button
                                        className={`flex w-full gap-2 px-4 py-2 text-sm text-gray-700  ${i18n.language === "uz" ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                                        onClick={() => selectLanguage('uz')}>
                                        <img src={uz} className="w-4 h-4 me-2" alt="Uzbek" />
                                        O'zbekcha
                                        {/* {i18n.language === 'uz' && <IoCheckmarkCircleSharp />}*/}
                                    </button>
                                    <button
                                        className={`flex w-full gap-2 px-4 py-2 text-sm text-gray-700  ${i18n.language === "ru" ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                                        onClick={() => selectLanguage('ru')}>
                                        <img src={ru} className="w-4 h-4 me-2" alt="Russian" />
                                        Русский
                                    </button>
                                    <button
                                        className={`flex w-full gap-2 px-4 py-2 text-sm text-gray-700  ${i18n.language === "en" ? 'bg-blue-100' : 'hover:bg-gray-200'}`}
                                        onClick={() => selectLanguage('en')}>
                                        <img src={eng} className="w-4 h-4 me-2" alt="English" />
                                        English
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div id="dropdownLanguage"
                         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>


            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='block lg:hidden h-auto overscroll-x-auto'
            >
                <div className={"bg-black p-3 h-screen"}>
                    <Link to={"/"}>
                        <img className='h-10 md:h-16 filter contrast-more' alt='logo' src={logo}/>
                    </Link>
                    <hr className={"text-white"}/>
                    <ul className=' items-start mt-2  lg:flex '>


                        <li className='mx-1 relative border-b-[1px]'>
                            <button id="dropdown2Link" data-dropdown-toggle="dropdown2"
                                    className="flex items-center justify-between w-full py-2  text-gray-900  md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 ">
                                Umumiy malumotlar
                            </button>
                            <div className={""}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-start"
                                    aria-labelledby="dropdown1Link">
                                    <li id='ota-ul'>
                                        <a id='ota-ul'
                                           href={"https://buxpxti.uz/wp-content/uploads/2024/08/Buxoro-psixologiya-va-xorijiy-tillar-institutining-PASPORTI.pdf"}
                                           target="_blank" rel="noopener noreferrer"
                                           className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            Institut haqida
                                        </a>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/welcome"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item1')}
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link to={"/kampusies"} id='ota-ul' href="#"
                                              className="block px-2 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item2')}</Link>
                                    </li>


                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/contact-us"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item5')}</Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/faculties"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            {t('navbar.nav_item9')}</Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/all-news"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                            Yangiliklar</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>

                        <li className='mx-1 relative border-b-[1px]'>
                            <Link to={"/all-books"} id='ota-ul' data-dropdown-toggle="dropdown2"
                                  className="flex  items-center justify-between w-full py-2  text-gray-900  md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 ">
                                Institut yutuqlari
                            </Link>
                        </li>

                        <li className='mx-1 relative border-b-[1px]'>
                            <a href={"https://library.buxpxti.uz"} id='ota-ul' data-dropdown-toggle="dropdown2"
                               className="flex  items-center justify-between w-full py-2  text-gray-900  md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 ">
                                Elektron kutubxona
                            </a>
                        </li>
                        <li className='mx-1 relative border-b-[1px]'>
                            <button id="dropdown2Link" data-dropdown-toggle="dropdown2"
                                    className="flex items-center justify-between w-full py-2  text-gray-900  md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 ">
                               Ilmiy jurnallar
                            </button>
                            <div className={""}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-start"
                                    aria-labelledby="dropdown1Link">

                                    <li id='ota-ul'>
                                        <Link id='ota-ul' to={"/newspaper/hamkor-jurnallar"}
                                              className="block px-2 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">
                                           Hamkor jurnallar
                                        </Link>
                                    </li>
                                    <li id='ota-ul'>
                                        <Link to={"/newspaper/ilmiy-axborotnomalar"} id='ota-ul' href="#"
                                              className="block px-2 py-2  dark:hover:bg-gray-600 dark:hover:text-white">
                                            Ilmiy axborotnomalar</Link>
                                    </li>




                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
            </Drawer>
        </div>
    );
}

export default Header;
