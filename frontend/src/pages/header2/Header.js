import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logoWhite from "../home/images/logotext-white.png";
import logo from "../../images/05.png";
import { IoLanguage, IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import uz from "../../images/flag-uzb.jpg";
import ru from "../../images/flag-rus.jpg";
import eng from "../../images/flag-eng.jpg";
import { useTranslation } from "react-i18next";
import ApiCall from "../../config";
import "../home/style.css";
function Header(props) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      if (window.scrollY > 90) {
        // Порог для появления/исчезновения хедера
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchNewspapers = async () => {
    try {
      const response = await ApiCall(
        "/api/v1/newspaper",
        "GET",
        null,
        null,
        true
      );
      setNewspapers(response.data);
    } catch (error) {
      console.error("Error fetching newspapers:", error);
    }
  };
  return (
    <div className={"my-bg-second"}>
      <div className="px-3 py-1  hidden lg:flex text-black  items-center justify-between">
        <Link to={"/"} className="no-underline text-4xl font-bold">
          <img
            className="h-10 md:h-16 filter contrast-more"
            alt="logo"
            src={logo}
          />
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex gap-8 border-r-2 border-r-slate-400 pr-6">
            <li>
              <a
                className="no-underline text-[#0088cc] text-2xl font-semibold"
                href="https://t.me/bxu_uz"
                target="_blank"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li>
              <a
                className="no-underline font-semibold text-2xl text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text"
                href="https://www.instagram.com/bxu.uz"
                target="_blank"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="no-underline font-semibold text-2xl text-[#1877F2]"
                href="https://www.facebook.com/share/16Cvb6AEEv/"
                target="_blank"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="no-underline font-semibold text-2xl text-[#FF0000]"
                href="https://youtube.com/@bxu_uz"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
          <button
            onClick={() =>
              window.open("https://qabul.bxu.uz/", "_blank")
            }
            className="py-2 px-8 bg-blue-800 hover:bg-blue-400 text-white rounded-xl text-xl font-semibold shadow-lg animate-pulse hover:animate-none hover:shadow-blue-500/50 transition-all duration-300"
          >
            {t("navbar.btn")}
          </button>
        </div>
      </div>
      <div
        className={`w-full bg-blue-800 transition-all duration-300 ease-in-out text-start z-20 fixed lg:${isScrolled ? "fixed top-0 left-0" : "relative"
          } `}
      >
        <nav
          id="blur-header"
          className={`h-[70px] transition-all duration-300 border-b-slate-300 md:h-14 max-w-screen-xl mx-auto border-b-[1px] flex items-center justify-between flex-wrap w-full`}
        >
          <Link
            to={"/"}
            className="flex lg:hidden no-underline md:text-4xl font-bold"
          >
            {/* <img className='h-10 md:h-16 filter contrast-more' alt='logo' src={logo} /> */}
            <img
              className="h-10 md:h-16 filter contrast-more"
              alt="logo"
              src={logoWhite}
            />
          </Link>
          <div className="h-full flex items-center">
            <ul className="hidden items-center md:hidden lg:flex lg:gap-3">
              {/*<li className='mx-1 relative'>*/}
              {/*    <Link to={"/"} id="dropdown1Link" data-dropdown-toggle="dropdown1"*/}
              {/*          className="flex items-center justify-evenly !gap-0 w-full py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent no-underline">*/}
              {/*        {t('navbar.nav_item_title0')}*/}
              {/*    </Link>*/}

              {/*</li>*/}
              <li className="relative">
                <button
                  id="dropdown1Link"
                  data-dropdown-toggle="dropdown1"
                  className="flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  {t("university.name")}
                  <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0" />
                </button>
                <div
                  id="dropdown1"
                  style={{ width: "500px" }}
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 absolute"
                >
                  <div className={"flex flex-wrap"}>
                    <div>
                      {/*bxu haqida*/}
                      <ul
                        id="menyucha"
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown1Link"
                      >
                        <li id="ota-ul" className={""}>
                          <p
                            className={
                              "font-bold text-[18px] text-blue-700  p-0 my-title"
                            }
                          >
                            {t("university.title")}
                          </p>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/about"}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white "
                          >
                            {t("university.about.title")}
                          </Link>
                        </li>
                        {/*<li id='ota-ul'>*/}
                        {/*    <Link to={"/university/rector-appeal"}*/}
                        {/*          className="block px-2 py-1 decoration-0   hover:text-white text-black rounded-1  font-light dark:hover:bg-blue-300 dark:hover:text-white">*/}
                        {/*        {t('university.about.rectorAddress')}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li id="ota-ul">
                          <Link
                            to={"/university/aim"}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            {t("university.about.goals")}
                          </Link>
                        </li>
                        {/*<li id='ota-ul'>*/}
                        {/*    <Link to={"/university/quality"}*/}
                        {/*          className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white">*/}
                        {/*        {t('university.about.qualitySystem')}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li id="ota-ul">
                          <Link
                            to={"/university/numbers"}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            {t("university.about.facts")}
                          </Link>
                        </li>
                        {/*<li id='ota-ul'>*/}
                        {/*    <Link to={"/university/morality"}*/}
                        {/*          className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white">*/}
                        {/*        {t('university.about.codeOfConduct')}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        <li id="ota-ul">
                          <Link
                            to={"/university/directions"}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            {t("university.about.directions")}
                          </Link>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/partnership"}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            {t("university.about.partnership")}
                          </Link>
                          <Link
                            to="/university/scientificactivity"
                            onClick={toggleDrawer}
                            className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                          >
                            {t("university.about.scientificactivity")}
                          </Link>
                        </li>
                      </ul>
                      {/*rector ofisi*/}
                      <ul
                        id="menyucha"
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown1Link"
                      >
                        <li id="ota-ul" className={""}>
                          <p
                            className={
                              "font-bold text-[18px] text-blue-700  p-0 my-title"
                            }
                          >
                            {t("university.rectorOffice.title")}
                          </p>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/rector"}
                            className="block px-2 decoration-0 no-underline  hover:text-white text-black rounded-1 py-1 dark:hover:bg-blue-300 dark:hover:text-white "
                          >
                            {t("university.rectorOffice.rector")}
                          </Link>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/prorector"}
                            className="block px-2 decoration-0  hover:text-white text-black rounded-1 py-1 dark:hover:bg-blue-300 dark:hover:text-white "
                          >
                            {t("university.rectorOffice.viceRectors")}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      {/*infratuzilma*/}
                      <ul
                        id="menyucha"
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown1Link"
                      >
                        <li id="ota-ul" className={""}>
                          <p
                            className={
                              "font-bold text-[18px] text-blue-700  p-0 my-title"
                            }
                          >
                            {t("university.infrastructure.title")}
                          </p>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/campuses"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.buildings")}
                          </Link>
                        </li>

                        <li id="ota-ul">
                          <Link
                            to={"/university/dormitory"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.dormitory")}
                          </Link>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/conference-hall"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.conferenceHall")}
                          </Link>
                        </li>

                        <li id="ota-ul">
                          <Link
                            to={"/university/classrooms"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.classrooms")}
                          </Link>
                        </li>

                        {/*<li id='ota-ul'>*/}
                        {/*    <Link to={"/welcome"}*/}
                        {/*          className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white">*/}
                        {/*        {t('university.infrastructure.publicOffer')}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        <li id="ota-ul">
                          <Link
                            to={"/university/research-centers"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.researchCenters")}
                          </Link>
                        </li>

                        <li id="ota-ul">
                          <Link
                            to={"/university/ecozone"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                          >
                            {t("university.infrastructure.ecozone")}
                          </Link>
                        </li>
                      </ul>
                      {/*rector ofisi*/}
                      <ul
                        id="menyucha"
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown1Link"
                      >
                        <li id="ota-ul" className={""}>
                          <p
                            className={
                              "font-bold text-[18px] text-blue-700  p-0 my-title"
                            }
                          >
                            {t("university.rectorOffice.staff")}
                          </p>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/head"}
                            className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white "
                          >
                            {t("university.rectorOffice.departmentHeads")}
                          </Link>
                        </li>
                        <li id="ota-ul">
                          <Link
                            to={"/university/professors"}
                            className="block px-2 decoration-0  hover:text-white text-black rounded-1 py-1 dark:hover:bg-blue-300 dark:hover:text-white "
                          >
                            {t("university.rectorOffice.professors")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/*talabalar*/}
              <li className=" relative">
                <button
                  id="dropdown1Link"
                  data-dropdown-toggle="dropdown1"
                  className="flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  {t("university.students.title")}
                  <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0" />
                </button>
                <div
                  id="dropdown1"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
                >
                  <ul
                    id="menyucha"
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown1Link"
                  >
                    <li id="ota-ul">
                      <Link
                        to={"/university/association"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.association")}
                      </Link>
                    </li>
                    <li id="ota-ul">
                      <Link
                        to={"/university/support"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.support")}
                      </Link>
                    </li>
                    <li id="ota-ul">
                      <a
                        href="https://library.buxpxti.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.library")}
                      </a>
                    </li>
                    <li id="ota-ul">
                      <Link
                        to={"/university/dormitory"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.dormitory")}
                      </Link>
                    </li>
                    {/* <li id="ota-ul">
                      <Link
                        to={"/university/timetable"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.timetable")}
                      </Link>
                    </li>
                    <li id="ota-ul">
                      <Link
                        to={"/university/successful"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.successful")}
                      </Link>
                    </li> */}
                    <li id="ota-ul">
                      <Link
                        to={"/university/distance"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("university.students.distance")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className=" relative">
                <a
                  href="https://qabul.bxu.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-2 py-1 no-underline font-semibold text-white hover:text-blue-500 shadow-lg animate-pulse hover:animate-none hover:shadow-blue-500/50 transition-all duration-250"
                >
                  {t("navbar.btn")}
                </a>
              </li>

              {/*yangiliklar va media*/}
              <li className=" relative">
                <button
                  id="dropdown1Link"
                  data-dropdown-toggle="dropdown1"
                  onClick={() => navigate("/all-news")}
                  className="flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  {t("navbar.nav_item_title2")}
                  <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0" />
                </button>
                <div
                  id="dropdown1"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
                >
                  <ul
                    id="menyucha"
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown1Link"
                  >
                    <li id="ota-ul">
                      <Link
                        to={"/all-news"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("navbar.nav_item9")}
                      </Link>
                    </li>

                    <li id="ota-ul">
                      <Link
                        to={"/all-images"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("navbar.nav_item10")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative">
                <Link
                  id="dropdown3Link"
                  data-dropdown-toggle="dropdown3"
                  className="text-decoration-none flex items-center justify-evenly !gap-0 w-full py-2  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  {t("navbar.nav_item_title4")}
                  <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0" />
                </Link>
                <div
                  id="dropdown3"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-25 dark:bg-gray-700 dark:divide-gray-600 absolute"
                >
                  <ul
                    id="menyucha"
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown3Link"
                  >
                    {/*<li id='ota-ul'>*/}
                    {/*  <Link to={"/newspaper/all"}*/}
                    {/*          className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">*/}
                    {/*        Barchasi </Link>*/}
                    {/*</li>*/}
                    {/*{newspapers.map(item =>*/}
                    {/*    <li id='ota-ul'>*/}
                    {/*      <Link to={"/newspaper/" + item?.year}*/}
                    {/*              className="block px-1 py-2 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white ">*/}
                    {/*            {item?.year}-yil chop etilganlar </Link>*/}
                    {/*    </li>*/}
                    {/*)}*/}

                    <li id="ota-ul">
                      <Link
                        to={"/newspaper/hamkor-jurnallar"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("navbar.nav_item12")}
                      </Link>
                    </li>
                    <li id="ota-ul">
                      <Link
                        to={"/newspaper/ilmiy-axborotnomalar"}
                        className="block px-2 decoration-0  hover:text-white text-black py-1 rounded-1 dark:hover:bg-blue-300 dark:hover:text-white"
                      >
                        {t("navbar.nav_item13")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className=" relative">
                <a
                  href="https://library.buxpxti.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-2 py-1 no-underline font-semibold text-white hover:text-blue-500"
                >
                  {t("navbar.nav_item_title3")}
                </a>
              </li>

              <li>
                <Link
                  to={"/university/contact"}
                  className="block px-2 py-1 no-underline font-semibold text-white hover:text-blue-500 "
                >
                  {t("navbar.nav_item_title5")}
                </Link>
              </li>

            </ul>
          </div>

          <div className="flex items-center mr-2">
            <div className="flex items-start lg:hidden">
              <button
                onClick={toggleDrawer}
                className="flex items-center gap-x-2 text-white w-[40px] h-[36px] lg:w-[155px] lg:h-[36px] bg-[#004C88] justify-center rounded-md text-[16px] uppercase"
              >
                <MdMenu color="#FFF" size={"24px"} className="flex lg:hidden" />
              </button>
            </div>
            {/*language button*/}
            <ul className="relative lang1 ">
              <li className="relative group">
                {/* Кнопка для выбора языка с флагом */}
                <button className="flex items-center text-white justify-evenly !gap-0 w-full py-2 hover:text-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  {/* Флаг перед языком */}
                  {i18n.language === "uz" && (
                    <img src={uz} className="w-6 h-4 mr-2 " alt="Uzbek flag" />
                  )}
                  {i18n.language === "ru" && (
                    <img src={ru} className="w-6 h-4 mr-2" alt="Russian flag" />
                  )}
                  {i18n.language === "en" && (
                    <img
                      src={eng}
                      className="w-6 h-4 mr-2"
                      alt="English flag"
                    />
                  )}

                  {/* Название языка */}
                  {i18n.language === "uz" && "UZB"}
                  {i18n.language === "ru" && "RUS"}
                  {i18n.language === "en" && "ENG"}

                  {/* Стрелка вниз */}
                  <RiArrowDropDownLine className="w-7 h-7 ms-2.5 m-0" />
                </button>

                {/* Выпадающий список языков */}
                <div
                  id="dropdown1"
                  className="z-30 hidden group-hover:block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-0 "
                >
                  <ul className="lang py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <button
                        onClick={() => selectLanguage("uz")}
                        className={`flex items-center px-2 py-1 text-left hover:text-blue-900 dark:hover:bg-blue-200 dark:hover:text-blue-900 ${i18n.language === "uz" ? "bg-blue-100 " : ""
                          }`}
                      >
                        <img src={uz} className="w-6 h-4 me-2" alt="Uzbek" />
                        UZB
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => selectLanguage("ru")}
                        className={`flex items-center px-2 py-1 text-left hover:text-blue-900 dark:hover:bg-blue-200 dark:hover:text-blue-900 ${i18n.language === "ru" ? "bg-blue-100" : ""
                          }`}
                      >
                        <img src={ru} className="w-6 h-4 me-2" alt="Russian" />
                        RUS
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => selectLanguage("en")}
                        className={`flex items-center px-2 py-1 text-left hover:text-blue-900 dark:hover:bg-blue-200 dark:hover:text-blue-900 ${i18n.language === "en" ? "bg-blue-100" : ""
                          }`}
                      >
                        <img src={eng} className="w-6 h-4 me-2" alt="English" />
                        ENG
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div
              id="dropdownLanguage"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="block lg:hidden h-auto overscroll-x-auto"
      >
        <div className={"bg-white p-3 h-screen"}>
          <Link to={"/"}>
            <img
              className="h-10 md:h-16 filter contrast-more"
              alt="logo"
              src={logo}
            />
          </Link>
          <hr className={"text-white"} />

          <div className="space-y-2">
            {/* University Section */}
            <div className="accordion-item">
              <button
                className="flex justify-between items-center w-full p-3 bg-blue-700 text-white rounded-lg"
                onClick={() =>
                  document
                    .getElementById("university-menu")
                    .classList.toggle("hidden")
                }
              >
                <span>{t("university.name")}</span>
                <RiArrowDropDownLine className="w-5 h-5 transform transition-transform" />
              </button>
              <div id="university-menu" className="hidden mt-1 space-y-1 pl-2">
                {/* About University */}
                <div className="accordion-item">
                  <button
                    className="flex justify-between items-center w-full p-2 bg-blue-600 text-white rounded"
                    onClick={() =>
                      document
                        .getElementById("about-menu")
                        .classList.toggle("hidden")
                    }
                  >
                    <span>{t("university.title")}</span>
                    <RiArrowDropDownLine className="w-5 h-5" />
                  </button>
                  <div id="about-menu" className="hidden mt-1 space-y-1 pl-2">
                    <Link
                      to="/university/about"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.title")}
                    </Link>
                    <Link
                      to="/university/aim"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.goals")}
                    </Link>
                    <Link
                      to="/university/numbers"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.facts")}
                    </Link>
                    <Link
                      to="/university/directions"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.directions")}
                    </Link>
                    <Link
                      to="/university/partnership"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.partnership")}
                    </Link>
                    <Link
                      to="/university/scientificactivity"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.about.scientificactivity")}
                    </Link>
                  </div>
                </div>

                {/* Rector's Office */}
                <div className="accordion-item">
                  <button
                    className="flex justify-between items-center w-full p-2 bg-blue-600 text-white rounded"
                    onClick={() =>
                      document
                        .getElementById("rector-menu")
                        .classList.toggle("hidden")
                    }
                  >
                    <span>{t("university.rectorOffice.title")}</span>
                    <RiArrowDropDownLine className="w-5 h-5" />
                  </button>
                  <div id="rector-menu" className="hidden mt-1 space-y-1 pl-2 ">
                    <Link
                      to="/university/rector"
                      onClick={toggleDrawer}
                      className="block p-2 hover:bg-blue-500 rounded"
                    >
                      {t("university.rectorOffice.rector")}
                    </Link>
                    <Link
                      to="/university/prorector"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.rectorOffice.viceRectors")}
                    </Link>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="accordion-item">
                  <button
                    className="flex justify-between items-center w-full p-2 bg-blue-600 text-white rounded"
                    onClick={() =>
                      document
                        .getElementById("infra-menu")
                        .classList.toggle("hidden")
                    }
                  >
                    <span>{t("university.infrastructure.title")}</span>
                    <RiArrowDropDownLine className="w-5 h-5" />
                  </button>
                  <div id="infra-menu" className="hidden mt-1 space-y-1 pl-2">
                    <Link
                      to="/university/campuses"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.infrastructure.buildings")}
                    </Link>
                    <Link
                      to="/university/dormitory"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.infrastructure.dormitory")}
                    </Link>
                    <Link
                      to="/university/conference-hall"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.infrastructure.conferenceHall")}
                    </Link>
                    <Link
                      to="/university/classrooms"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.infrastructure.classrooms")}
                    </Link>
                    <Link
                      to="/university/research-centers"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.infrastructure.researchCenters")}
                    </Link>
                  </div>
                </div>

                {/* Staff */}
                <div className="accordion-item">
                  <button
                    className="flex justify-between items-center w-full p-2 bg-blue-600 text-white rounded"
                    onClick={() =>
                      document
                        .getElementById("staff-menu")
                        .classList.toggle("hidden")
                    }
                  >
                    <span>{t("university.rectorOffice.staff")}</span>
                    <RiArrowDropDownLine className="w-5 h-5" />
                  </button>
                  <div id="staff-menu" className="hidden mt-1 space-y-1 pl-2">
                    <Link
                      to="/university/head"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.rectorOffice.departmentHeads")}
                    </Link>
                    <Link
                      to="/university/professors"
                      onClick={toggleDrawer}
                      className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      {t("university.rectorOffice.professors")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Students Section */}
            <div className="accordion-item">
              <button
                className="flex justify-between items-center w-full p-3 bg-blue-700 text-white rounded-lg"
                onClick={() =>
                  document
                    .getElementById("students-menu")
                    .classList.toggle("hidden")
                }
              >
                <span>{t("university.students.title")}</span>
                <RiArrowDropDownLine className="w-5 h-5" />
              </button>
              <div id="students-menu" className="hidden mt-1 space-y-1 pl-2">
                <Link
                  to="/university/association"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.association")}
                </Link>
                <Link
                  to="/university/support"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.support")}
                </Link>
                <a
                  href="https://library.buxpxti.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                  onClick={toggleDrawer}
                >
                  {t("university.students.library")}
                </a>
                <Link
                  to="/university/dormitory"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.dormitory")}
                </Link>
                <Link
                  to="/university/timetable"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.timetable")}
                </Link>
                <Link
                  to="/university/successful"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.successful")}
                </Link>
                <Link
                  to="/university/distance"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("university.students.distance")}
                </Link>
              </div>
            </div>

            {/* News Section */}
            <div className="accordion-item">
              <button
                className="flex justify-between items-center w-full p-3 bg-blue-700 text-white rounded-lg"
                onClick={() =>
                  document
                    .getElementById("news-menu")
                    .classList.toggle("hidden")
                }
              >
                <span>{t("navbar.nav_item_title2")}</span>
                <RiArrowDropDownLine className="w-5 h-5" />
              </button>
              <div id="news-menu" className="hidden mt-1 space-y-1 pl-2">
                <Link
                  to="/all-news"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("navbar.nav_item9")}
                </Link>
                <Link
                  to="/all-images"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {t("navbar.nav_item10")}
                </Link>
              </div>
            </div>

            {/* Scientific Publications */}
            <div className="accordion-item">
              <button
                className="flex justify-between items-center w-full p-3 bg-blue-700 text-white rounded-lg"
                onClick={() =>
                  document
                    .getElementById("publications-menu")
                    .classList.toggle("hidden")
                }
              >
                <span>{t("navbar.nav_item_title4")}</span>
                <RiArrowDropDownLine className="w-5 h-5" />
              </button>
              <div
                id="publications-menu"
                className="hidden mt-1 space-y-1 pl-2"
              >
                <Link
                  to="/newspaper/hamkor-jurnallar"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  Hamkor jurnallar
                </Link>
                <Link
                  to="/newspaper/ilmiy-axborotnomalar"
                  onClick={toggleDrawer}
                  className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  Ilmiy axborotnomalar
                </Link>
              </div>
            </div>

            {/* Library Link */}
            <a
              href="https://library.buxpxti.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
              onClick={toggleDrawer}
            >
              {t("navbar.nav_item_title3")}
            </a>

            {/* Contact Link */}
            <Link
              to="/university/contact"
              className="block px-2 py-1 decoration-0 no-underline  hover:text-white text-black rounded-1 dark:hover:bg-blue-600 dark:hover:text-white"
              onClick={toggleDrawer}
            >
              {t("navbar.nav_item_title5")}
            </Link>

            {/* Admission 2025 Button */}
            <a
              href="https://qabul.bxu.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-center rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300"
              onClick={toggleDrawer}
            >
              {t("navbar.btn")}
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
