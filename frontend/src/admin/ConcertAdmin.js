import React, { useState, useEffect } from "react";
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import * as XLSX from "xlsx";

const ConcertAdmin = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchQuestionnaire();
  }, []);

  const fetchQuestionnaire = async () => {
    try {
      const response = await ApiCall(
        "/api/v1/concert-questionnaire",
        "GET",
        null,
        null,
        true
      );
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching questionnaire:", error);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "So'rovnoma");
    XLSX.writeFile(workbook, "questionnaire.xlsx");
  };

  return (
    <div>
      <Sidebar />
      <div className="p-10 sm:ml-64">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-4">
          So'rovnoma natijalari
        </h2>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={downloadExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            Excelga yuklab olish
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Soni</th>
                <th className="border border-gray-300 px-4 py-2">Izoh</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.count}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                  >
                    Ma'lumot topilmadi
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

export default ConcertAdmin;
