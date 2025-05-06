import React, { useState, useEffect } from 'react';
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import 'rodal/lib/rodal.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import * as XLSX from 'xlsx';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

const scoreCategories = [
    { label: "Barchasi", min: 0, max: 45 },
    { label: "0-4 ball (Minimal bezotalanish)", min: 0, max: 5 },
    { label: "5-13 ball (O‘rtacha bezotalanish)", min: 5, max: 14 },
    { label: "14-20 ball (Yuqori bezotalanish)", min: 14, max: 21 }
];


const TestSuitsidStatistic = () => {
    const [studentResults, setStudentResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [categoryStats, setCategoryStats] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Barchasi");

    useEffect(() => {
        fetchStudentResults();
        fetchCategoryStats();
    }, []);

    useEffect(() => {
        if (studentResults.length > 0) {
            filterResults();
        }
    }, [selectedCategory, studentResults]);

    // Fetch student results for the first table
    const fetchStudentResults = async () => {
        try {
            const response = await ApiCall('/api/v1/test-suitsid/statistic-all', 'GET', null, null, true);
            setStudentResults(response.data);
        } catch (error) {
            setStudentResults([]);
            console.error("Error fetching student results:", error);
        }
    };

    // Fetch category statistics for the second table and chart
    const fetchCategoryStats = async () => {
        try {
            const response = await ApiCall('/api/v1/test-suitsid/statistic', 'GET', null, null, true);

            // Prepare data for the table
            const tableData = Object.entries(response.data).map(([category, students]) => ({
                category,
                count: students.length
            }));
            setCategoryStats(tableData);

            // Prepare data for the chart
            const chartData = tableData.map(item => ({
                name: item.category,
                value: item.count
            }));
            setChartData(chartData);
        } catch (error) {
            console.error("Error fetching category stats:", error);
        }
    };

    const filterResults = () => {
        if (selectedCategory === "Barchasi") {
            setFilteredResults(studentResults);
            return;
        }

        const category = scoreCategories.find(cat => cat.label === selectedCategory);
        if (category) {
            const filtered = studentResults.filter(item =>
                item.score >= category.min && item.score < category.max
            );
            setFilteredResults(filtered);
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const exportToExcel = () => {
        const dataToExport = filteredResults.map((item, index) => ({
            "№": index + 1,
            "F.I.O": `${item.student.first_name} ${item.student.second_name} ${item.student.third_name}`,
            "Ball": item.score,
            "Kategoriya": getScoreCategory(item.score)
        }));

        const ws = XLSX.utils.json_to_sheet(dataToExport);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Test Natijalari");
        XLSX.writeFile(wb, "test_natijalari.xlsx");
    };


    const getScoreCategory = (score) => {
        for (const category of scoreCategories.slice(1)) {
            if (score >= category.min && score < category.max) {
                return category.label;
            }
        }
        return "Noma'lum";
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl mb-6">
                    Test natijalari
                </h2>



                {/* CATEGORY STATISTICS TABLE */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Kategoriyalar bo'yicha statistika</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Kategoriya</th>
                                <th className="border border-gray-300 px-4 py-2">Test topshirganlar soni</th>
                            </tr>
                            </thead>
                            <tbody>
                            {categoryStats.length > 0 ? (
                                categoryStats.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.count}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center">
                                        Hozircha ma'lumot yo'q
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PIE CHART VIEW */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">Kategoriyalar bo'yicha taqsimot</h3>
                    {chartData.length > 0 ? (
                        <div className="flex justify-center">
                            <PieChart width={450} height={400}>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>
                    ) : (
                        <p>Diagramma uchun ma'lumot topilmadi.</p>
                    )}
                </div>


                {/* STUDENT RESULTS TABLE */}
                <div className="my-10">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold">Talabalar natijalari</h3>
                        <div className="flex space-x-4">
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="border border-gray-300 rounded px-3 py-2"
                            >
                                {scoreCategories.map((category, index) => (
                                    <option key={index} value={category.label}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={exportToExcel}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                            >
                                Excelga yuklash
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">N%</th>
                                <th className="border border-gray-300 px-4 py-2">Rasm</th>
                                <th className="border border-gray-300 px-4 py-2">F.I.O</th>
                                <th className="border border-gray-300 px-4 py-2">Gruh</th>
                                <th className="border border-gray-300 px-4 py-2">Ball</th>
                                <th className="border border-gray-300 px-4 py-2">Kategoriya</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredResults.length > 0 ? (
                                filteredResults.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2"><img className={"w-12 h-12 rounded-full"} src={item.student.image}/></td>

                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.student.first_name} {item.student.second_name} {item.student.third_name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">{item?.student.group_name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.score}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {getScoreCategory(item.score)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                                        Hozircha ma'lumot yo'q
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestSuitsidStatistic;