import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
import bgImage from "../../images/header2.jpg"; // Ensure this path is correct
import Footer from "../footer/Footer";
import ApiCall, { baseUrl } from "../../config";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';
import down from "../newspaper/images/img.png";
import Partner from "../home/Partner";

function Memorandum(props) {
    const { t } = useTranslation();

    const [newspapersByYear, setNewspapersByYear] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Check if the page has been loaded before
        if (!localStorage.getItem('isPageLoaded')) {
            localStorage.setItem('isPageLoaded', 'true'); // Mark page as loaded
            window.location.reload(); // Reload the page only if it hasn't been loaded before
        } else {
            fetchNewspapers(); // Fetch newspapers data
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Reset isPageLoaded flag to false when page content changes


    const fetchNewspapers = async () => {
        try {
            setLoading(true); // Set loading to true while fetching
            const response = await ApiCall('/api/v1/memorandum', 'GET', null, null, true);
            setNewspapersByYear(response.data); // Update the state with the fetched data
        } catch (error) {
            console.error("Error fetching newspapers:", error);
        } finally {
            setLoading(false); // Set loading to false once fetching is complete
        }
    };


    const handleDownload = async (item) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/pdf",
                },
            });

            if (!response.ok) throw new Error("Failed to download file");

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = `${item.title}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };


    return (
        <div>
            <div
                className="w-full h-72 bg-cover bg-center text-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "50px",
                    borderBottomLeftRadius: "50px"
                }}
            >
                <Header />
                <div className={"header_title"}><h1> {t('partnership.title')}

                </h1></div>
            </div>

            <div className="flex flex-wrap p-3 gap-4 justify-center">

            </div>

            <div className="flex flex-wrap p-3 gap-4 justify-center">
                <Partner />

                {newspapersByYear?.map((item) => (
                    <Zoom key={item.id}>
                        <div className="p-4 h-auto rounded w-[340px]">
                            <div className="bg-white h-auto hover:shadow-xl rounded-xl border-[2px]">
                                <img
                                    style={{width: "340px", height: "280px"}}
                                    className={"rounded-t-xl"}
                                    src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                                    alt={item.title || "News image"}
                                />
                                <h2 className="my-1 text-[18px] p-2">{item.title}</h2>
                                <div className="p-4  gap-2 pb-2 flex items-center">
                                    <button className="flex gap-1" onClick={() => handleDownload(item)}>
                                        <img width={22} height={20} src={down} alt="Download icon"/>
                                         Yuklab olish
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Zoom>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Memorandum;
