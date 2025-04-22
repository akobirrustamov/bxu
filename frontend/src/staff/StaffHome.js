import React, { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";
import ApiCall from "../config/index";
import newbg from "./images/newbg.jpg";
import bgcard from "./images/img.png";
import {useNavigate} from "react-router-dom";

function AdminStaff(props) {
    const [role, setRole] = useState("");
    const [attendance, setAttendance] = useState(false);
    const [showNomenklatura, setShowNomenklatura] = useState(false);
    const [rector, setRector] = useState(false);

    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            await fetchRole();
            await fetchProfileData();
        };
        fetchData();
    }, []);

    const fetchRole = async () => {
        const storedRole = localStorage.getItem("role")
        setRole(storedRole || "");
    };

    const fetchProfileData = async () => {
        try {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            if (role === "ROLE_STAFF") {
                const response = await ApiCall("/api/v1/app/nomenklatura/me/" + token, "GET");
                if (response.status === 200 && response.data) {

                    if (response.data.length > 0) {
                        setShowNomenklatura(true);
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    const cards = [
        { id: 1, title: "Taklif va shikoyatlar", icon: "envelope", screen: "Taklif" },
    ];

    return (
        <div className="flex">
            <Sidebar/>
            <div className="p-4 sm:ml-64 w-full min-h-screen justify-center "
                style={{
                   backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed"
                }}>
                {/* Your content will go here */}
                <div className="flex-wrap flex  gap-8 mt-20 justify-center">

                    {/*toshiriqlar*/}
                    <div style={{
                            backgroundImage: `url(${bgcard})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "cover"}}
                         onClick={()=>navigate("/mobil/commands")}
                        className="bg-white w-1/3  rounded-lg shadow-md p-2  hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="text-center items-center my-4">
                            <div className=" text-[#09025E96]  flex justify-content-center mb-3">
                                <span className="text-3xl text-center">
                                    <svg className="w-12 h-12  text-[#09025E96]" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"/>
                                    </svg>

                                </span>
                            </div>
                            <h3 className="text-xl font-semibold  text-[#09025E96]">Topshiriqlar</h3>
                        </div>
                    </div>

                    {/*Nomenklatura*/}
                    <div style={{
                            backgroundImage: `url(${bgcard})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "cover"}}
                         onClick={()=>navigate("/mobil/nomenklatura")}
                        className="bg-white w-1/3 rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="text-center items-center my-4">
                            <div className="  flex justify-content-center mb-2">
                                <span className="text-3xl text-center">
                                    <svg className="w-12 h-12 text-[#09025E96] " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                                d="M15 4v3a1 1 0 0 1-1 1h-3m2 10v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L6.7 8.35A1 1 0 0 1 7.46 8H9m-1 4H4m16-7v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H19a1 1 0 0 1 1 1Z"/>
                                        </svg>


                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-[#09025E96]">Nomenklatura</h3>
                        </div>
                    </div>

                    {/*Guruhlar*/}
                    <div style={{
                            backgroundImage: `url(${bgcard})`,
                            backgroundRepeat: "repeat",
                            backgroundSize: "cover"}}
                         onClick={()=>navigate("/mobil/groups")}
                        className="bg-white  w-1/3 rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="text-center items-center my-4">
                            <div className="  flex justify-content-center mb-2">
                                <span className="text-3xl text-center">
                                   <svg className="w-12 h-12 text-[#09025E96]" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>



                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-[#09025E96]">Guruhlar</h3>
                        </div>
                    </div>

                    {/*Dars jadval*/}
                    <div style={{
                        backgroundImage: `url(${bgcard})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover"}}
                         onClick={()=>navigate("/mobil/timetable")}
                        className="bg-white  w-1/3 rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="text-center items-center my-4">
                            <div className="  flex justify-content-center mb-2">
                                <span className="text-3xl text-center">
                                    <svg className="w-12 h-12 text-[#09025E96] " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-width="2"
                                                d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                        </svg>


                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-[#09025E96]">Dars Jadval</h3>
                        </div>
                    </div>

                    {/*Kunlik nazorat*/}
                    <div style={{
                        backgroundImage: `url(${bgcard})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover"}}
                         onClick={()=>navigate("/mobil/daily-control")}
                         className="bg-white  w-1/3 rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="text-center items-center my-4">
                            <div className="  flex justify-content-center mb-2">
                                <span className="text-3xl text-center">
                                    <svg className="w-12 h-12 text-[#09025E96] " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2M3 11h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"/>
                                        </svg>



                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-[#09025E96]">Kunlik nazorat</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminStaff;