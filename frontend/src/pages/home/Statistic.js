import React from 'react';
import CountUp from 'react-countup';
import bg2 from "./img/bg21.jpg";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from 'react-i18next';

function Statistic() {
    const { t } = useTranslation();

    const data = [
        { icon: "fa-university", value: 3, label: t('statistic.title1') },
        {
            icon: "fa-newspaper",
            value: 26,
            label: t('statistic.title2'),
            subValues: [
                { value: 16, label: t('statistic.title2_text1') },
                { value: 8, label: t('statistic.title2_text2') },  // Fixed the text key
                { value: 2, label: t('statistic.title2_text3') }   // Fixed the text key
            ]
        },
        { icon: "fa-building-user", value: 61, label: t('statistic.title3') },
    ];

    return (
        <div className="bg-[#004C88] p-2">
            <div className="graduates_bg grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 justify-center">
                {data.map((item, index) => (
                    <Zoom key={index}>
                        <div
                            className="border-2 p-2 my-20 rounded-xl shadow-xl text-center hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
                            style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}
                        >
                            <div className="flex gap-4 items-center align-center justify-center">
                                <i className={`fa ${item.icon} text-6xl text-[#004C88]`} aria-hidden="true"></i>
                                <h2>
                                    <CountUp start={0} end={item.value} duration={5} />
                                </h2>
                            </div>
                            <h5 className="my-2 xl:text-2xl md:text-1xl sm:text-md min-[320px]:text-md text-[#012c6e]">
                                {item.label}
                            </h5>
                            {item.subValues && (
                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                    {item.subValues.map((subItem, subIndex) => (
                                        <div key={subIndex} className="text-[#004C88] text-xl">
                                            <span>{subItem.label}: <CountUp start={0} end={subItem.value} duration={2} /></span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
}

export default Statistic;
