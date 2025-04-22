import React from 'react';
import { useTranslation } from 'react-i18next';

function Doctor(props) {
    const {t} = useTranslation()
    return (
        <div>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center  px-3">{t(("korusel.title"))}</h6>
                <h1 className="mb-5"> {t('news.title')}</h1>
            </div>
        </div>
    );
}

export default Doctor;