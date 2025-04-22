import React from 'react';
import './style.css'; // Ensure your CSS file is correctly imported
import bino1 from './img/bino1.jpg';
import bino2 from './img/bino22.png';
import bino3 from './img/bino3.jpg';
import bino4 from './img/bino4.jpg';
import {useNavigate} from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from 'react-i18next';

function Facilities() {
    const { t } = useTranslation();

    const navigate = useNavigate()
    return (
        <section id="facilities" className="position-relative padding-medium my-4 mb-10">
            <div className="text-center wow fadeInUp " data-wow-delay="0.1s">
                <h1 className={"xl:text-4xl md:text-3xl sm:text-2xl min-[320px]:text-2xl text-[#012c6e] "}>
                    {t('kampus.title')}
                </h1>

            </div>
            <div className="container-fluid">
                <div className="row g-3 mt-3 mt-lg-0">
                    {/* Cafeteria */}
                    <Zoom>
                        <div className="col-md-6 text-center">
                            <div className="product-item position-relative bg-black overflow-hidden">
                                <img src={bino2} className="post-image img-fluid" alt="Cafeteria"/>
                                <div
                                    className="product-description position-absolute top-50 start-50 translate-middle p-3">
                                    <h3 className="mb-2 display-6 text-white">{t('kampus.bn1')}</h3>
                                    <p className="product-paragraph d-none d-lg-block m-0 text-white">
                                        {t('kampus.bn1_text')}
                                    </p>
                                    <a href="#">
                                        <p className="text-decoration-underline text-white m-0 mt-2">{t('batafsil.title')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    {/* Classes */}
                    <Zoom>
                        <div className="col-md-6 text-center">
                            <div className="product-item position-relative bg-black overflow-hidden">
                                <img src={bino1} className="post-image img-fluid" alt="Classes"/>
                                <div
                                    className="product-description position-absolute top-50 start-50 translate-middle p-3">
                                    <h3 className="mb-2 display-6 text-white">{t('kampus.bn2')}</h3>
                                    <p className="product-paragraph d-none d-lg-block m-0 text-white">
                                        {t('kampus.bn2_text')}
                                    </p>
                                    <a href="#">
                                        <p className="text-decoration-underline text-white m-0 mt-2">{t('batafsil.title')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    {/* Environment */}
                    <Zoom>
                        <div className="col-md-6 text-center">
                            <div className="product-item position-relative bg-black overflow-hidden">
                                <img src={bino4} className="post-image img-fluid" alt="Library"/>
                                <div
                                    className="product-description position-absolute top-50 start-50 translate-middle p-3">
                                    <h3 className="mb-2 display-6 text-white">{t('kampus.bn3')}</h3>
                                    <p className="product-paragraph d-none d-lg-block m-0 text-white">
                                        {t('kampus.bn3_text')}
                                    </p>
                                    <a href="#">
                                        <p className="text-decoration-underline text-white m-0 mt-2">{t('batafsil.title')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>


                    {/* Library */}
                    <Zoom>
                        <div className="col-md-6 text-center">
                            <div className="product-item position-relative bg-black overflow-hidden">
                                <img src={bino3} className="post-image img-fluid" alt="Environment"/>
                                <div
                                    className="product-description position-absolute top-50 start-50 translate-middle p-3">
                                    <h3 className="mb-2 display-6 text-white">{t('kampus.bn4')}</h3>
                                    <p className="product-paragraph d-none d-lg-block m-0 text-white">
                                        {t('kampus.bn4_text')}
                                    </p>
                                    <a href="#">
                                        <p className="text-decoration-underline text-white m-0 mt-2">{t('batafsil.title')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
}

export default Facilities;
