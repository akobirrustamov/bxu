import React, { useEffect, useState } from 'react';

import Header from "../header/Header";
import bgImage from "../../images/header2.jpg"; // Ensure this path is correct
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

import ApiCall, {baseUrl} from "../../config";







function AllYouTube(props) {

    const { t } = useTranslation();
    const [youTube, setYoutube] = useState([]);

    useEffect(() => {
        console.log("hi there")
        getYouTube()
    }, []);




    const getYouTube = async () => {
        try {
            const response = await ApiCall('/api/v1/youtube/all', 'GET', null, null, false);
            setYoutube(response.data);
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
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


            </div>
            <h1 className={"myTitleNews flex gap-2 my-4"}>
                <svg className="h-9 w-9 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                {t('gallery.title')}
            </h1>
            <div className={"gallery-grid block pb-3"}>
                {youTube.slice(0, 3).map(video => {
                    const iframeWithClass = video.iframe.replace(
                        /(<iframe.*?)(>)/,
                        `$1 class="w-full h-56"$2`
                    );
                    return (
                        <div key={video.id}
                             className="myYoutube shadow-md rounded p-4 my-3 hover:bg-gray-100">
                            <div dangerouslySetInnerHTML={{__html: iframeWithClass}}/>
                            <h6 className="my-2 bold text-xl">{video.title}</h6>
                            <p className={"text-blue-500"}>#{video.hashTag}</p>

                        </div>

                    );
                })}

            </div>
            <Footer/>
        </div>
    );
}

export default AllYouTube;
