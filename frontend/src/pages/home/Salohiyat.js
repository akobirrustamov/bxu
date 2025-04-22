import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Zoom from "react-reveal/Zoom";
import { useTranslation } from 'react-i18next';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Salohiyat() {
    const { t } = useTranslation();

    // Get translated text for the title
    const grafTitle1 = t('salohiyat.graf_title1');
    const grafTitle3 = t('salohiyat.graf_title3');
    const grafTitle2 = t('salohiyat.graf_title2');

    const options = {
        animationEnabled: true,
        title: {
            text: grafTitle1  // Use the translated text here
        },
        axisX: {
            title: grafTitle3, // Use the translated text here
            interval: 1,
            labelAngle: 0,
            valueFormatString: "YYYY-YY",
        },
        axisY: {
            title: grafTitle2, // Use the translated text here
            lineColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            fontSize: 24, // Increase this value for bigger text
            itemclick: e => {
                e.dataSeries.visible = typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible;
                e.chart.render();
            }
        },
        data: [
            {
                type: "column",
                name: "DSc",
                showInLegend: true,
                dataPoints: [
                    { label: "2021-2022", y: 10 },
                    { label: "2022-2023", y: 14 },
                    { label: "2023-2024", y: 17 },
                    { label: "2024-2025", y: 18 }
                ]
            },
            {
                type: "column",
                name: "PhD",
                showInLegend: true,
                axisYType: "secondary",
                dataPoints: [
                    { label: "2021-2022", y: 16 },
                    { label: "2022-2023", y: 20 },
                    { label: "2023-2024", y: 24 },
                    { label: "2024-2025", y: 27 }
                ]
            }
        ]
    };

    return (
        <div className="grid grid-cols-2 gap-4 w-full  p-4 pb-0 pt-2 my-bg-second">
            {/* Second Column */}
            <div className="rounded-xl my-16 items-baseline w-full">
                <Zoom>
                    <div className={"w-full text-center"}>
                        <h1 className={"xl:text-5xl md:text-4xl sm:text-3xl min-[320px]:text-2xl text-[#012c6e]"}>
                            {t('salohiyat.title')}
                        </h1>

                        <div className={"w-full  my-2"}>
                            <h3 className={"text-3xl text-start md:text-3xl min-[320px]:text-base text-gray-500 my-4"}>
                                {t('salohiyat.text')}
                            </h3>
                        </div>
                    </div>
                </Zoom>
            </div>
            {/* First Column */}
            <div className="p-4 pt-0">
                <div className={"w-full text-center mt-16 "}>
                    <div>
                        <Zoom>
                            <CanvasJSChart options={options} />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Salohiyat;
