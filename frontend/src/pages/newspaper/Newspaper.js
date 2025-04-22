import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../header2/Header";
import Footer from "../footer/Footer";
import bgImage from "../../images/header2.jpg";
import down from "./images/img.png";
import ApiCall, { baseUrl } from "../../config";

const Symbols = () => {
    const { year } = useParams();
    const [newspapersByYear, setNewspapersByYear] = useState([]);

    useEffect(() => {
        fetchNewspapers();
    }, []);

    const isLatin = (text) => {
        // Must contain at least one Latin character (A-Za-z)
        // Can also contain numbers, spaces, and common punctuation
        return /[A-Za-z]/.test(text) &&
            /^[A-Za-z0-9\s№,.\-–—!?;:'"()«»]*$/i.test(text);
    };

    const fetchNewspapers = async () => {
        try {
            const response = await ApiCall('/api/v1/newspaper', 'GET', null, null, true);
            // Filter and sort
            const filteredData = response.data
                .map(yearGroup => ({
                    ...yearGroup,
                    newspapers: yearGroup.newspapers.filter(item => isLatin(item.title))
                }))
                .sort((a, b) => b.year - a.year); // <-- Sort by year descending

            setNewspapersByYear(filteredData);
        } catch (error) {
            console.error("Error fetching newspapers:", error);
        }
    };


    const handleDownload = async (item) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`, {
                method: 'GET',
            });
            if (!response.ok) throw new Error("Failed to download file");
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', `${item.title || 'file'}.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    const renderNewspapers = () => {
        if (year && year !== "all") {
            const filteredYear = newspapersByYear.find((group) => group.year.toString() === year);
            if (filteredYear) {
                return (
                    <div key={filteredYear.year}>
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center px-3">Ilmiy jurnallar</h6>
                            <h1 className="mb-5">{filteredYear.year}-yil chop etilganlar</h1>
                        </div>
                        <div className="flex flex-wrap justify-center p-2 w-full">
                            {filteredYear.newspapers.map((item) => renderNewspaperItem(item))}
                        </div>
                    </div>
                );
            }
            return <p className="text-center mt-4">No newspapers found for the year {year}.</p>;
        }

        return newspapersByYear.map((group) => (
            <div key={group.year} className={"mb-4"}>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center px-2">Ilmiy jurnallar</h6>
                    <h1 className="mb-2">{group.year}-yil chop etilganlar</h1>
                </div>
                <div className="flex flex-wrap justify-center p-2 w-full">
                    {group.newspapers.map((item) => renderNewspaperItem(item))}
                </div>
            </div>
        ));
    };

    const renderNewspaperItem = (item) => {
        // Additional check (though we already filtered in fetchNewspapers)
        if (!isLatin(item.title)) {
            return null;
        }

        return (
            <div key={item.id} style={{width: "340px"}} className="p-4 h-auto rounded border-slate-900">
                <div className="bg-white h-auto hover:shadow-xl text-center rounded-xl pb-2 border-[2px]">
                    <img
                        style={{width: "340px", height: "400px"}}
                        className="rounded-t-xl"
                        src={`${baseUrl}/api/v1/file/getFile/${item.photos[0]?.id}`}
                        alt={item.title || "Newspaper image"}
                    />
                    <h2 className="my-1 text-sm">{item.title}</h2>
                    <p className="text-center p-2 text-[12px]">
                        {new Intl.DateTimeFormat('uz-UZ', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        }).format(new Date(item.description))}
                    </p>

                    <div className="p-4 pb-0 gap-2 pt-0 flex items-center">
                        <button className="flex gap-1" onClick={() => handleDownload(item)}>
                            <img width={22} height={20} src={down} alt="Download icon"/>
                            Kitobni yuklab olish
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="">
            <div
                className="w-full h-72 bg-cover bg-center text-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "60px",
                    borderBottomLeftRadius: "60px"
                }}
            >
                <Header />
                <div className="header_title">
                    <h2 className="my-4">{year && year !== "all" ? `${year} Ilmiy axborotnomalar` : "Ilmiy axborotnomalar"}</h2>
                </div>
            </div>

            <div className="lg:p-32 pb-2 pt-4">
                {renderNewspapers()}
            </div>

            <Footer />
        </div>
    );
};

export default Symbols;