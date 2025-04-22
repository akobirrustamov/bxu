import React, { useState, useEffect } from "react";
import Headers from "../../../header2/Header";
import { useInView } from "react-intersection-observer";
import Footer from "../../../footer/Footer";
import { useTranslation } from "react-i18next";

function StatisticUniversity() {
  const { t } = useTranslation();
  const stats = [ 
    { value: 1, label: t("statistics.text1"), color: "text-blue-600" },
    { value: 237, label: t("statistics.text2"), color: "text-green-600" },
    { value: 1937, label: t("statistics.text3"), color: "text-yellow-600" },
    { value: 146, label: t("statistics.text4"), color: "text-red-600" },
    { value: 374, label: t("statistics.text5"), color: "text-pink-600" },
    { value: 2, label: t("statistics.text6"), color: "text-indigo-600" },
    { value: 4, label: t("statistics.text7"), color: "text-teal-600" },
    { value: 128, label: t("statistics.text8"), color: "text-orange-600" },
    { value: 2, label: t("statistics.text9"), color: "text-cyan-600" },
    { value: 26, label: t("statistics.text10"), color: "text-lime-600" },
    { value: 3, label: t("statistics.text11"), color: "text-black" },
  ];
  

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();

      const animateCounters = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const newCounters = stats.map((stat, index) => {
          return Math.floor(progress * stat.value);
        });

        setCounters(newCounters);

        if (progress < 1) {
          requestAnimationFrame(animateCounters);
        }
      };

      requestAnimationFrame(animateCounters);
    }
  }, [inView]);

  return (
      <div>
        <Headers />
        <div className="max-w-7xl pt-20 md:py-14 mx-auto px-4 mt-8" ref={ref}>
          <h1 className="text-3xl md:text-4xl font-bold border-b-2 pb-4 text-[#1e3258] mb-2">
            {t("university.about.facts")}
          </h1>
          <h4 className="text-lg md:text-xl font-normal text-[#1e3258] mb-8">
            {t("statistics.title")}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="text-left p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <p className={`text-5xl font-bold ${stat.color}`}>
                    {counters[index]}
                    {index === 0 && "+"} {/* Add "+" only for the first item if needed */}
                  </p>
                  <p className={`text-base uppercase mt-2 ${stat.color} font-medium`}>
                    {stat.label}
                  </p>
                </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default StatisticUniversity;