import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const University = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(`/university/${path}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
            {/* University About Section */}
            <section className="mb-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    <div className="bg-white p-6 rounded-lg  "
                         onClick={() => handleNavigation('about')}>
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">{t('university.title')}</h1>
                        <div className=" flex flex-wrap items-center gap-2 ">
                            <p className="border-2  p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.title')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.rectorAddress')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.goals')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.qualitySystem')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.codeOfConduct')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.about.facts')}</p>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b  mt-4">{t('university.rectorOffice.title')}</h1>
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.rectorOffice.rector')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.rectorOffice.viceRectors')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.rectorOffice.managers')}</p>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b  mt-4">{t('university.staff.title')}</h1>
                        <div className=" flex flex-wrap items-center gap-2">
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.staff.rank')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.staff.staff')}</p>

                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg "
                         onClick={() => handleNavigation('about')}>
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">{t('university.infrastructure.title')}</h1>
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.dataCenter')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.printing')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.buildings')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.gym')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.dormitory')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.conferenceHall')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.transferOffice')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.cyberLab')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.classrooms')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.stadium')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.publicOffer')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.sponsorship')}</p>
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.infrastructure.researchCenters')}</p>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b  mt-4">{t('university.symbols.title')}</h1>
                        <div className="space-y-2 flex flex-wrap items-center gap-2">
                            <p className="border-2 p-2 px-4 rounded-1 text-blue-600 hover:text-blue-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">{t('university.symbols.emblem')}</p>
                        </div>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="space-y-3">

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default University;