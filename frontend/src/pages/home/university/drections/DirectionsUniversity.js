import React, { useState } from "react";
import Modal from "react-responsive-modal";

import Header from "../../../header2/Header";
import bgImage from "../../../../images/header2.jpg";

import Footer from "../../../footer/Footer";
import SidebarRight from "../sidebarright/SidebarRight";
import img from "../../../license/img.png";
import Table from "react-bootstrap/Table";
import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal/Zoom";

function DirectionsUniversity(props) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (imageUrl) => {
    setCurrentImage(imageUrl);
    setOpen(true);
  };
  const { t } = useTranslation();
  const [show, setShow] = useState(4)

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      <div
        className="w-full h-36 xl:h-72 md:h-48 bg-cover bg-center text-center text-white relative"
        style={{
          backgroundImage: ` url(${bgImage})`,
          borderBottomRightRadius: "60px",
          borderBottomLeftRadius: "60px",
        }}
      >
        <Header />
        <div className="header_title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
          
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-12 pb-32 px-4">
        <div className="flex flex-wrap">
          {/* Main Content (2/3 width) */}
          <div className="w-full xl:w-2/3 p-4 space-y-6">

            <Zoom className='f-table p-3'>
              <div className='ch-table p-2 m-auto'>
                <div className={"p-4 pb-0 pt-0"}>
                  <div className="text-center wow fadeInUp my-2" data-wow-delay="0.1s">
                    <h1 className=""> {t('directions.title')}</h1>
                  </div>

                </div>
                <div className="tabs">
                 <span
                     className={`tab ${show == 4 ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                     onClick={() => setShow(4)}> {t('directions.tab_btn4')} </span>
                  <span className={`tab ${show == 1 ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                        onClick={() => setShow(1)}> {t('directions.tab_btn1')} </span>
                  <span className={`tab ${show == 2 ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                        onClick={() => setShow(2)}> {t('directions.tab_btn2')} </span>
                  <span className={`tab ${show == 3 ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                        onClick={() => setShow(3)}> {t('directions.tab_btn3')} </span>

                  <span className={`tab ${show == 5 ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                        onClick={() => setShow(5)}> {t('directions.tab_btn5')} </span>

                </div>
                <div className={show == 1 ? "p-4 pt-0" : "hidden"}>
                  <Table striped bordered hover>
                    <thead className='bg-dark'>
                    <tr>
                      <th>T/r</th>
                      <th>{t('directions.th1')}</th>
                      <th>{t('directions.th2')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) =>
                          <tr>
                            <td>{index + 1}</td>
                            <td> {t('directions.th1_td' + item)}</td>
                            <td> {t('directions.th1_tda' + item)}</td>

                          </tr>
                      )
                    }
                    </tbody>
                  </Table>
                </div>
                <div className={show == 2 ? "p-4 pt-0" : "hidden"}>
                  <Table striped bordered hover>
                    <thead className='bg-dark'>
                    <tr>
                      <th>T/r</th>
                      <th>{t('directions.th1')}</th>
                      <th>{t('directions.th2')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((item, index) =>
                          <tr>
                            <td>{index + 1}</td>
                            <td> {t('directions.th1_td' + item)}</td>
                            <td> {t('directions.th1_tda' + item)}</td>

                          </tr>
                      )
                    }
                    </tbody>
                  </Table>
                </div>
                <div className={show == 3 ? "p-4 pt-0" : "hidden"}>
                  <Table striped bordered hover>
                    <thead className='bg-dark'>
                    <tr>
                      <th>T/r</th>
                      <th>{t('directions.th1')}</th>
                      <th>{t('directions.th2')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      [28, 29, 30, 31, 32].map((item, index) =>
                          <tr>
                            <td>{index + 1}</td>
                            <td> {t('directions.th1_td' + item)}</td>
                            <td> {t('directions.th1_tda' + item)}</td>

                          </tr>
                      )
                    }
                    </tbody>
                  </Table>
                </div>
                <div className={show == 4 ? "p-4 pt-0" : "hidden"}>
                  <Table striped bordered hover>
                    <thead className='bg-dark'>
                    <tr>
                      <th>T/r</th>
                      <th>{t('directions.th1')}</th>
                      <th>{t('directions.th2')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      [33, 34, 35, 36, 37, 38, 39, 40].map((item, index) =>
                          <tr>
                            <td>{index + 1}</td>
                            <td> {t('directions.th1_td' + item)}</td>
                            <td> {t('directions.th1_tda' + item)}</td>

                          </tr>
                      )
                    }
                    </tbody>
                  </Table>
                </div>

                <div className={show == 5 ? "p-4 pt-0" : "hidden"}>
                  <Table striped bordered hover>
                    <thead className='bg-dark'>
                    <tr>
                      <th>T/r</th>
                      <th>{t('directions.th1')}</th>
                      <th>{t('directions.th2')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      [41,42, 43, 44, 45, 46, 47, 48,49].map((item, index) =>
                          <tr>
                            <td>{index + 1}</td>
                            <td> {t('directions.th1_td' + item)}</td>
                            <td> {t('directions.th1_tda' + item)}</td>

                          </tr>
                      )
                    }
                    </tbody>
                  </Table>
                </div>

              </div>
            </Zoom>
          </div>

          {/* Sidebar Right */}
          <SidebarRight />
        </div>
      </div>

      <Footer />

      {/* Modal for displaying the image */}
      <Modal open={open} onClose={handleClose} center>
        {currentImage && (
          <img
            src={currentImage}
            alt="Zoomed License"
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </div>
  );
}

export default DirectionsUniversity;
