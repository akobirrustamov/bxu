import React, { useState } from 'react';
import bg from "./img/bino22.png";
import l1 from "../license/img.png";
import l2 from "../license/img_1.png";
import l3 from "../license/img_2.png";
import l4 from "../license/new1.png";
import l5 from "../license/new2.png";
import Zoom from "react-reveal/Zoom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useTranslation } from 'react-i18next';

function BgImage(props) {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="h-full">
            <div
                className="bg-fixed  bg-cover  bg-center h-full"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <section className=" overlay bg-black bg-opacity-50" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="content">
                                    <h2 className="text-white text-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                                        {t('litsenziya.title1')}

                                    </h2>
                                    <p className="text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
                                        {t('litsenziya.text1')}
                                    </p>
                                    <div className="grid md:grid-cols-1 grid-cols-5">
                                        <div className={"hidden xl:block"}></div>
                                        <Zoom>
                                            <img
                                                onClick={() => handleImageClick(l1)}
                                                width={360}
                                                src={l1}
                                                alt="License 1"
                                            />
                                        </Zoom>
                                        <Zoom>
                                            <img
                                                onClick={() => handleImageClick(l2)}
                                                width={360}
                                                src={l2}
                                                alt="License 2"
                                            />
                                        </Zoom>
                                        <Zoom>
                                            <img
                                                onClick={() => handleImageClick(l3)}
                                                width={360}
                                                src={l3}
                                                alt="License 3"
                                            />
                                        </Zoom>
                                        <div className={"hidden xl:block"}></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" overlay bg-black bg-opacity-50 " data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="content">
                                    <h2 className="text-white text-center font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                                        {t('litsenziya.title2')}
                                    </h2>
                                    <h2 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl">
                                        {t('litsenziya.text2')}
                                    </h2>


                                    <div className="my-4 flex flex-wrap justify-center gap-4">
                                        <div className="grid md:grid-cols-1 grid-cols-4">
                                            <div className={"hidden xl:block"}></div>
                                            <Zoom>
                                                <img
                                                    onClick={() => handleImageClick(l4)}
                                                    width={360}
                                                    src={l4}
                                                    alt="License 2"
                                                />
                                            </Zoom>
                                            <Zoom>
                                                <img
                                                    onClick={() => handleImageClick(l4)}
                                                    width={360}
                                                    src={l5}
                                                    alt="License 2"
                                                />
                                            </Zoom>
                                            <div className={"hidden xl:block"}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Modal open={open} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Zoomed License"
                        style={{ width: "400px", height: "auto" }}
                    />
                )}
            </Modal>
        </div>
    );
}

export default BgImage;
