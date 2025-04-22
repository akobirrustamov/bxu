import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import bgImage from "../../images/bgImage1.png";
import qr from "../../images/qr.png"
import Table from "react-bootstrap/Table";
import { useTranslation } from 'react-i18next';

const AcademicCalendar = () => {
    const { t } = useTranslation();

    return (
        <div className={"bg-slate-50"}>
         
            <div
                className="w-full h-72 bg-cover bg-center text-center  text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}
            >
                   <Header />
                <div className={"header_title"}>
                    <h2 className="">
                        {t('academic.title')}
                    </h2>
                </div>
            </div>
            <div className="p-36 pt-0 flex flex-wrap gap-0 leading-0">



                <div
                    className="flex mx-3 w-full flex-col bg-white text-black shadow-md rounded-lg p-3 mt-6  items-center ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                        <h5 className="text-2xl font-semibold mb-3 mx-1 flex">
                            <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                            </svg>

                            {t('academic.card2_title')}
                        </h5>
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <Table striped hover>
                                    <thead className='bg-dark '>
                                    <tr>
                                        <th>{t('academic.table2_th1')}</th>
                                        <th>{t('academic.table2_th2')}</th>
                                        <th>{t('academic.table2_th3')}</th>
                                        <th>{t('academic.table2_th5')}</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td> {t('academic.table2_th1_td1')}</td>
                                        <td> 09.09.2024- 28.12.2024</td>
                                        <td>13.01.2025-18.01.2025</td>
                                        <td>25.12.2024 - 10.12.2025</td>
                                    </tr>
                                    <tr>
                                        <td> {t('academic.table2_th1_td2')}</td>
                                        <td> 03.02.2025-17.05.2025
                                        </td>
                                        <td>19.05.2025-31.05.2025</td>
                                        <td>01.06.2025 - 04.09.2025</td>
                                    </tr>


                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="flex mx-3 w-full flex-col bg-white text-black shadow-md rounded-lg p-3 mt-6  items-center ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
                        <h5 className="text-2xl font-semibold mb-3 mx-1 flex">
                            <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>

                            {t('academic.card3_title')}

                        </h5>
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <Table striped hover>


                                    <tbody>

                                    <tr>
                                        <td>{t('academic.table3_tr1_td1')}</td>
                                        <td>{t('academic.table3_tr1_td2')}</td>
                                        <td>{t('academic.table3_tr1_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr2_td1')}</td>
                                        <td>{t('academic.table3_tr2_td2')}</td>
                                        <td>{t('academic.table3_tr2_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr3_td1')}</td>
                                        <td>{t('academic.table3_tr3_td2')}</td>
                                        <td>{t('academic.table3_tr3_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr4_td1')}</td>
                                        <td>{t('academic.table3_tr4_td2')}</td>
                                        <td>{t('academic.table3_tr4_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr5_td1')}</td>
                                        <td>{t('academic.table3_tr5_td2')}</td>
                                        <td>{t('academic.table3_tr5_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr6_td1')}</td>
                                        <td>{t('academic.table3_tr6_td2')}</td>
                                        <td>{t('academic.table3_tr6_td3')}</td>

                                    </tr>
                                    <tr>
                                        <td>{t('academic.table3_tr7_td1')}</td>
                                        <td>{t('academic.table3_tr7_td2')}</td>
                                        <td>{t('academic.table3_tr7_td3')}</td>

                                    </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default AcademicCalendar;
