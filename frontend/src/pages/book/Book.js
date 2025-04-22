import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
import bgImage from "../../images/header2.jpg"; // Ensure this path is correct
import Footer from "../footer/Footer";
import ApiCall, {baseUrl} from "../../config";
function Book(props) {
    const [message, setMessage] = useState([]);
    const navigate = useNavigate();

    const [newspapersByYear, setNewspapersByYear] = useState([]);

    useEffect(() => {
        fetchNewspapers();
    }, []);

    const fetchNewspapers = async () => {
        try {
            const response = await ApiCall('/api/v1/book/all', 'GET', null, null, true);
            setNewspapersByYear(response.data);
            // Assuming response.data is already grouped by year
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

    return (
        <div>

            <div
                className="  w-full h-72 bg-cover bg-center bg-scroll text-center	  text-white "
                style={{
                    backgroundImage: `url(${bgImage})`,
                    borderBottomRightRadius: "50px",
                    borderBottomLeftRadius: "50px"
                }}
            >
                <Header/>
                <div className={"header_title"}>
                    <h2 className={"my-2"}>
                        Institutimiz yutuqlari
                    </h2>

                </div>
            </div>

            <div className="flex flex-wrap p-3 gap-0 ">
                {newspapersByYear?.map(item => {
                    return (
                        <div key={item.id} style={{width: "340px"}} className="p-4 h-auto rounded ">
                            <div className="bg-white h-auto hover:shadow-xl  rounded-xl pb-2 border-[2px]">
                                <img
                                    style={{width: "340px", height: "360px"}}
                                    className="rounded-t-xl"
                                    src={`${baseUrl}/api/v1/file/getFile/${item?.photos[0]?.id}`}
                                    alt={item.title || "Newspaper image"}
                                />
                                <div className={"p-2"}>
                                    <h2 className="text-[18px]">{item.title}</h2>
                                    <p className=" text-[12px]">
                                        {item.description}
                                    </p>

                                </div>
                                <div className="p-4 pb-0 gap-2 pt-0 flex items-center">
                                    <button className="flex gap-1" onClick={() => handleDownload(item)}>
                                        Kitobni yuklab olish
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


            <Footer/>
        </div>
    );
}

export default Book;
