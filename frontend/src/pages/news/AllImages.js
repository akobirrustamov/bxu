import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";
import bgImage from "../../images/header2.jpg"; // Ensure this path is correct
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

import ApiCall, {baseUrl} from "../../config";
import Headers from "../header2/Header";




function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}




function AllImages(props) {

    const { t } = useTranslation();
    const images = Array.from({ length: 36 }, (_, index) => index + 1);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        console.log("hi there")


        getGalleryImages()
    }, []);

    const getGalleryImages = async () => {
        try {
            const response = await ApiCall('/api/v1/gallery', 'GET', null, null, true);
            setGalleryImages(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching images:", error);
            // setError("Failed to load images.");
        }
    };

    return (
        <div>
            <Headers />
            <div className="max-w-7xl pt-20 md:py-2 mx-auto px-4 mt-8" >



            </div>
            <h1 className={"myTitleNews flex mt-8 text-center justify-center"}>
                <svg className="h-9 w-9 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                {t('gallery.title')}
            </h1>
            <div className={"gallery-grid pb-3 m-auto text-center"}>

                        {galleryImages?.map(item => (
                            <>
                                <img
                                    key={item}
                                    src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}

                                    className="gallery-image"
                                />
                            </>
                        ))}


            </div>
            <Footer/>
        </div>
    );
}

export default AllImages;
