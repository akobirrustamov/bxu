
import React, { useState, useEffect } from 'react';
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import 'rodal/lib/rodal.css';
import { Link, useNavigate } from "react-router-dom";

const TestSuitsidStatistic = () => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTestSuitsidStatistic();
    }, []);
    const fetchTestSuitsidStatistic = async () => {
        try {
            const response = await ApiCall('/api/v1/statistic-all', 'GET', null, null, true);
            setMessages(response.data);
            console.log(response.data)
        } catch (error) {
            setMessages([]);
            console.error("Error fetching news:", error);
        }
    };


    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">
                    Test natijalari
                </h2>

                <div className="mt-6">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">N%</th>
                            <th className="border border-gray-300 px-4 py-2">FIO</th>

                        </tr>
                        </thead>
                        <tbody>
                        {messages.length > 0 ? (
                            messages.map((message, index) => (

                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">
                                    Hech qanday xabar yo'q
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TestSuitsidStatistic;
