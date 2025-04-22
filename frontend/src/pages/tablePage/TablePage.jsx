import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import "../tablePage/tablepage.css"

import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal/Zoom";

const TablePage = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(4)

  return (
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
  )
}

export default TablePage