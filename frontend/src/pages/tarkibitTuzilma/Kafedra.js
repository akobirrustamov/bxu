import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import Zoom from "react-reveal/Zoom";
import Table from "react-bootstrap/Table";
import bgImage from "../../images/header2.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ApiCall, {baseUrl} from "../../config";

function Kafedra(props) {
    const { t } = useTranslation();
    const [show, setShow] = useState(1)
    const [faculties, setFaculties] = useState([])
    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        fetchFaculties();
        fetchTeachers()
    }, []);
    const fetchTeachers = async () => {
        try {
            const response = await ApiCall('/api/v1/teacher', 'GET', null, null, true);
            setTeacherList(response.data);
            console.log(response.data)
        } catch (error) {
            setTeacherList([]);
            console.error("Error fetching teachers:", error);
        }
    };
    const fetchFaculties = async () => {
        try {
            const response = await ApiCall('/api/v1/faculty', 'GET', null, null, true);
            setFaculties(response.data);
            console.log(response.data)
        } catch (error) {
            setFaculties([]);
            console.error("Error fetching news:", error);
        }
    };



    return (

        <div
            className="  w-full h-72 bg-cover bg-center  bg-scroll text-center	  text-white "
            style={{
                backgroundImage: `url(${bgImage})`,
                borderBottomRightRadius: "50px",
                borderBottomLeftRadius: "50px"
            }}
        >

            <Header/>
            <div className={"header_title "}>

                <h2 className="my-20 text-white">Institut Kafedralari</h2>
            </div>

            <Zoom className='f-table p-0 '>
                <div className='ch-table p-0 m-auto'>
                    <div className={" pb-0 pt-0 text-black"}>
                        <div className="text-center wow fadeInUp my-2" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center  px-3">Kafedralar</h6>
                            <h1 className="">Institut Kafedralari</h1>

                        </div>

                    </div>
                    <div className="tabs text-black">
                        {faculties.map(item =>
                            <span
                                className={`tab ${show == item.id ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                                onClick={() => setShow(item.id)}> {item.title} </span>
                        )}


                    </div>
                    <div className={"p-4 pt-0 "}>
                        <div className="p-2 justify-evenly flex flex-wrap">
                            {teacherList
                                .filter(teacher => teacher.faculty.id === show)
                                .map((item, index) => {
                                    return item.place === 1 ? (  // Add return statement here
                                        <div className={" w-full "} key={item.id}>

                                                <div className={"bg-white shadow-xl grid rounded-2xl my-1"}>
                                                    <div className={"grid-cols-4"}>
                                                        <img
                                                            className={"rounded-l-2xl"}
                                                            width={600}
                                                            height={540}
                                                            src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className={"grid-cols-8 pt-0 p-4"}>
                                                        <h3 className="text-black">
                                                            Kafedra muduri: <br/>{item.title}
                                                        </h3>
                                                        <p className={"text-black text-start"}>{item.description}</p>
                                                    </div>
                                                </div>
                                                <br/>
                                                <h2 className={"text-black my-4"}>Professor O'qtuvchilar</h2>
                                                <br/>

                                        </div>
                                    ) : (

                                            <div style={{width:"400px"}} className={" my-1 shadow-xl rounded-xl bg-[#DCDCD]"}>
                                                <img
                                                   style={{width:"400px", height:"450px"}}
                                                    src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                                    alt={item.title}
                                                />
                                                <h3 className="text-black">{item.title}</h3>
                                                <p className={"text-black"}>{item.description}</p>
                                            </div>

                                    );
                                })}
                        </div>
                    </div>


                </div>
            </Zoom>


            <Footer/>
        </div>
    )
}

export default Kafedra;