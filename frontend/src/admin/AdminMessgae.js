import React, { useState, useEffect } from 'react';
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import 'rodal/lib/rodal.css';
import { Link, useNavigate } from "react-router-dom";

const AdminMessage = () => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
    }, []);
    const fetchMessages = async () => {
        try {
            const response = await ApiCall('/api/v1/message', 'GET', null, null, true);
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
                    Xabarlar
                </h2>

                <div className="mt-6">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">N%</th>
                            <th className="border border-gray-300 px-4 py-2">FIO</th>
                            <th className="border border-gray-300 px-4 py-2">Telefon</th>
                            <th className="border border-gray-300 px-4 py-2">Xabar</th>
                            <th className="border border-gray-300 px-4 py-2">Vaqt</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.length > 0 ? (
                            messages.map((message, index) => (
                                <tr key={message.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.phone}</td>
                                    <td className="border border-gray-300 px-4 py-2">{message.message}</td>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(message.date).toLocaleString()}</td>
                                </tr>
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

export default AdminMessage;
