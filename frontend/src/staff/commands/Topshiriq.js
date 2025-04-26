import React, { useEffect, useState } from 'react';
import Sidebar from "./../Sidebar";
import ApiCall from "../../config/index";
import newbg from "./../images/newbg.jpg";
import bbg from "./../images/img.png";
import { useNavigate } from "react-router-dom";

function Topshiriq() {
    const navigation = useNavigate();
    const [rank, setRank] = useState([]);
    const [administrator, setAdministrator] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [commander, setCommander] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");

            if (!token || !role || role !== 'ROLE_STAFF') {
                navigation("mobil/login");
                return;
            }

            try {
                const [profile, rankRes, commanderRes] = await Promise.all([
                    ApiCall('/api/v1/app/staff/me/' + token, 'GET'),
                    ApiCall('/api/v1/app/staff/rank/' + token, 'GET'),
                    ApiCall('/api/v1/app/staff/commander/' + token, 'GET'),
                ]);

                // console.log("Profile:", profile);
                // console.log("rank:", rankRes);
                // console.log("conk:", commanderRes);

                if (profile.error === false && profile.data) {
                    setAdministrator(profile.data);
                } else {
                    throw new Error("Failed to fetch profile data");
                }

                if (rankRes.error === false && rankRes.data) {
                    setRank(rankRes.data);
                } else {
                    throw new Error("Failed to fetch rank data");
                }

                if (commanderRes.error === false && commanderRes.data) {
                    setCommander(commanderRes.data);
                } else {
                    throw new Error("Failed to fetch commander data");
                }

            } catch (error) {
                alert("Error: " + (error.message || ''));
                navigation("/mobil/login");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, [navigation]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="flex ">
            <Sidebar />
            <div
                className="p-4 sm:ml-64 w-full min-h-screen"
                style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                }}
            >
                {/* Контейнер всех карточек */}
                <div className="text-[#09025E96] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 transition-all duration-500">

                    {/* Только если не ректор */}
                    {rank[0]?.name !== 'Rektor' && (
                        <div style={{ backgroundImage: `url(${bbg})`, }}
                            className="bg-cover bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-100 cursor-pointer"
                            onClick={() => navigation("/mobil/commands/topshiriqlarim")}
                        >
                            <p className="text-xl font-semibold mb-2 text-center">📅 Mening topshiriqlarim</p>
                        </div>
                    )}

                    {/* Если есть командиры, показываем кнопки */}
                    {commander.length > 0 && (
                        <>
                            <div style={{ backgroundImage: `url(${bbg})`, }}
                                className="bg-white p-6 bg-cover rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-100 cursor-pointer flex items-center justify-center"
                                onClick={() => navigation("/mobil/commands/buyruqlar")}
                            >
                                <p className="text-xl font-semibold text-center">📑 Buyruqlar</p>
                            </div>

                            <div style={{ backgroundImage: `url(${bbg})`, }}
                                className="bg-white p-6 bg-cover rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-100 cursor-pointer flex items-center justify-center"
                                onClick={() => navigation("/Xodimlar")}
                            >
                                <p className="text-xl font-semibold text-center">👔 Xodimlar</p>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Topshiriq;
