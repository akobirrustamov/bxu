import React, { useEffect, useState, useCallback } from 'react';
import Sidebar from "./../Sidebar";
import ApiCall from "../../config/index";
import newbg from "./../images/newbg.jpg";
import { useNavigate } from "react-router-dom";

function Nomenklatura(props) {
    const [nomenklaturaData, setNomenklaturaData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rector, setRector] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const attendanceValue = localStorage.getItem("attendance");
            setRector(attendanceValue === "true");

            if (attendanceValue === "true") {
                try {
                    setLoading(true);
                    const response = await ApiCall(`/api/v1/app/nomenklatura`, "GET");
                    if ( response.data) {
                        setNomenklaturaData(response.data);
                    } else {
                        alert("Error: Failed to fetch files.");
                    }
                } catch (error) {
                    console.error("Fetch Error:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                try {
                    const token = localStorage.getItem("token");
                    const role = localStorage.getItem("role");

                    if (!token || role !== "ROLE_STAFF") {
                        alert("Access Denied: You are not authorized.");
                        // navigate("/");
                        return;
                    }
                    const response = await ApiCall(`/api/v1/app/nomenklatura/me/${token}`, "GET");
                    if ( response.data) {
                        setNomenklaturaData(response.data);
                    } else {
                        alert("Error: Failed to fetch Nomenklatura.");
                        // navigate("/");
                    }
                } catch (error) {
                    alert("Error: An unexpected error occurred.");
                    // navigate("/");
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [navigate]);

    const handleNavigateToDetail = useCallback((item, number) => {
        const updatedItem = { ...item, folder: number };
        navigate("/nomenklatura-detail", { state: { itemData: updatedItem } });
    }, [navigate]);

    const renderSubFolderCard = (subFolder, item) => (
        <div
            key={subFolder.id}
            className="bg-blue-50 p-3 m-1 rounded-md border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => handleNavigateToDetail(item, subFolder.folder)}
        >
            <div className="text-blue-800 font-medium text-center">{subFolder.title}</div>
        </div>
    );

    const renderNomenklaturaItem = (item) => {
        const subFolders = Array.from({ length: item.numberPackages }, (_, index) => ({
            id: index + 1,
            title: `${item.code}-0${index + 1}`,
            folder: index + 1,
        }));

        return (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-lg font-bold mb-2">{item.code} - {item.name}</h3>
                <p className="text-gray-600 text-sm mb-1">
                    Created: {new Date(item.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                    Responsible: {item.user.name}
                </p>
                <div className="flex flex-wrap">
                    {subFolders.map((subFolder) => renderSubFolderCard(subFolder, item))}
                </div>
            </div>
        );
    };

    return (
        <div className="flex">
            <Sidebar/>
            <div
                className="p-4 sm:ml-64 w-full min-h-screen"
                style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed"
                }}
            >
                <h2 className="text-2xl font-bold text-center my-6">Nomenklatura bo'limi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {loading ? (
                        <div className="col-span-2 text-center py-8">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                            <p className="mt-2 text-gray-600">Loading...</p>
                        </div>
                    ) : (
                        nomenklaturaData.map(item => renderNomenklaturaItem(item))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Nomenklatura;