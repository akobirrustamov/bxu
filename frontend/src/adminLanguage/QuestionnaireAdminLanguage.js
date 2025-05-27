import React, { useState, useEffect } from "react";
import ApiCall from "../config/index";
import * as XLSX from "xlsx";
import { FiDownload } from "react-icons/fi";

const QuestionnaireAdminLanguage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filter, setFilter] = useState("Barchasi");

    useEffect(() => {
        fetchQuestionnaire();
    }, []);

    const fetchQuestionnaire = async () => {
        try {
            const response = await ApiCall("/api/v1/language-questionnaire", "GET", null, null, true);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error("So'rovnomani yuklashda xatolik:", error);
        }
    };

    const handleFilterChange = (e) => {
        const selected = e.target.value;
        setFilter(selected);
        if (selected === "Barchasi") {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => item.source === selected);
            setFilteredData(filtered);
        }
    };

    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "So'rovnoma");
        XLSX.writeFile(workbook, "sorovnoma.xlsx");
    };

    const sources = [
        "Barchasi",
        "Telegram",
        "Instagram",
        "Sayt",
        "Reklama",
        "Tavsiyachi",
        "Boshqa"
    ];

    const getLanguageLabel = (code) => {
        switch (code) {
            case 0: return "Ingliz tili";
            case 1: return "Rus tili";
            case 2: return "Turk tili";
            case 3: return "Nemis tili";
            default: return "Noma'lum";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">📋 So'rovnoma natijalari</h2>
              
                <button
                    onClick={downloadExcel}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition"
                >
                    <FiDownload /> Excelga yuklab olish
                </button>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ism</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Til</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{getLanguageLabel(item.language)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                                Ma'lumot topilmadi
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuestionnaireAdminLanguage;
