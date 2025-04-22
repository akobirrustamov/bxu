import React, { useState } from 'react';
import "./style.css";
import l1 from "./img.png";
import l2 from "./img_1.png";
import l3 from "./img_2.png";
import Zoom from "react-reveal/Zoom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function License() {
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
        <div>
            <section className="call-action overlay" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="content">
                                <h2 className="text-white text-5xl text-center font-bold">
                                    Litsenziyalangan ta'lim
                                </h2>
                                <p className="text-white text-center">
                                    Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi tomonidan 2021-yil 29-oktabr kuni 0037-raqamli litsenziya Buxoro psixologiya va xorijiy tillar institutiga oliy ta’lim xizmatlarini ko’rsatish uchun va O‘zbekiston Respublikasi oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan 2024-yil 16-maydan 277162-raqamli litsenziya bilan yangi yo‘nalishlarga ruxsat berilgan
                                </p>
                                <div className="grid md:grid-cols-1 grid-cols-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal open={open} onClose={handleClose} center>
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Zoomed License"
                        style={{ width: "100%", height: "auto" }}
                    />
                )}
            </Modal>
        </div>
    );
}

export default License;
