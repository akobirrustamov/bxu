import React, { useEffect, useState } from 'react';
import Sidebar from "./../Sidebar";
import ApiCall from "../../config/index";
import newbg from "./../images/newbg.jpg";

function DarsJadvali(props) {
    const [role, setRole] = useState("");
    const [attendance, setAttendance] = useState(false);
    const [showNomenklatura, setShowNomenklatura] = useState(false);
    const [rector, setRector] = useState(false);

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
            <div
                className="p-4 sm:ml-64 w-full min-h-screen"
                style={{
                    backgroundImage: `url(${newbg})`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Your content will go here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-20">



                </div>
            </div>
        </div>
    );
}

export default DarsJadvali;