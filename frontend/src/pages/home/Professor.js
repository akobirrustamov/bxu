import React from "react";
import Slider from "react-slick";

import proff1 from "./prof/1.png";
import proff2 from "./prof/2.png";
import proff3 from "./prof/3.png";
import proff4 from "./prof/4.png";
import proff5 from "./prof/5.png";
import proff6 from "./prof/6.png";
import proff7 from "./prof/7.png";
import proff8 from "./prof/8.png";
import proff9 from "./prof/9.png";
import proff10 from "./prof/10.png";
import proff11 from "./prof/11.png";
import proff12 from "./prof/12.png";
import proff13 from "./prof/13.png";
import proff14 from "./prof/14.png";
import { useTranslation } from 'react-i18next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Proff() {
    const { t,i18n } = useTranslation();


    const partners = [
        { id: 1, src: proff1, alt: "Partner 1", name: { en: "Baratov Sharif Ramazanovich", ru: "Баратов Шариф Рамазанович", uz: "Баратов Шариф Рамазанович" }, rank: { en: "Doctor of Psychology, Professor", ru: "Доктор психологии, профессор", uz: "Psixologiya fanlari doktori, professor" }},
        { id: 2, src: proff2, alt: "Partner 2", name: { en: "Baratova Dilafruz Sharifovna", ru: "Баратовa Дилафруз Шарифовна", uz: "Баратова Дилафруз Шарифовна" }, rank: { en: "Doctor of Psychology (DSc), Professor", ru: "Доктор психологии (DSc), профессор", uz: "Psixologiya fanlari doktori(DSc), professor" }},
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
        <div className="p-2 text-center my-4">
            <h1 className="xl:text-3xl md:text-2xl sm:text-xl text-xl text-[#012c6e]">
                {t('professor.title')}
            </h1>
            <div className="partner-carousel container mx-auto px-4 py-8">
                <Slider {...settings}>
                    {partners.map((partner) => (
                        <div key={partner.id} className="text-center">
                            <div className="flex justify-center items-center">
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    style={{ width: "160px", height: "160px" }}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <p className="mt-2 font-semibold text-md">{partner.name[currentLanguage]}</p>
                            <p className="text-gray-500 text-sm">{partner.rank[currentLanguage]}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Proff;