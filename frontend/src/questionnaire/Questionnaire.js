import React, { useState } from 'react';
import Select from 'react-select';
import logo from "./logoMain.jpg";
import {useNavigate} from "react-router-dom";
import ApiCall from "../config/index"
function Questionnaire() {
    const [formData, setFormData] = useState({
        reason: '',
        source: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await ApiCall("/api/v1/questionnaire", "POST", formData);
            alert("Rahmat! Ma'lumotlaringiz saqlandi.");
            navigate("/");
        } catch (error) {
            console.error("Error submitting questionnaire:", error);
            alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
        }
    };

    const sourceOptions = [
        { value: 'Telegram', label: 'Telegram' },
        { value: 'Instagram', label: 'Instagram' },
        { value: 'Sayt', label: 'Sayt (rasmiy sayt)' },
        { value: 'Reklama', label: 'Reklama banneri' },
        { value: 'Tavsiyachi', label: 'Tavsiyachi' },
        { value: 'Boshqa', label: 'Boshqa' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (selectedOption) => {
        setFormData(prev => ({ ...prev, source: selectedOption.value }));
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-6">
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-2xl space-y-6 transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col items-center">
                    <img
                        src={logo}
                        alt="Buxoro xalqaro universiteti logosi"
                        className="h-24 w-auto mb-4 object-contain"
                    />
                    <h1 className="text-xl md:text-2xl font-bold text-blue-800 text-center">
                        Buxoro xalqaro universiteti
                    </h1>
                    <h2 className="text-lg md:text-xl text-gray-700 text-center mt-2">
                        So'rovnomada qatnashing – har bir bergan ma'lumotingiz biz uchun qadrli!
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="reason" className="block text-gray-700 font-medium">
                            <span className="text-blue-600">1.</span> Siz nega aynan Buxoro xalqaro universitetini tanlagansiz?
                        </label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Javobingizni yozing..."
                            rows="3"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="source" className="block text-gray-700 font-medium">
                            <span className="text-blue-600">2.</span> Qaysi ijtimoiy tarmoqlar orqali bizni tanlagansiz yoki ma'lumotga ega bo'lgansiz?
                        </label>
                        <Select
                            id="source"
                            name="source"
                            options={sourceOptions}
                            onChange={handleSelectChange}
                            placeholder="Tanlang..."
                            className="basic-single"
                            classNamePrefix="select"
                            isSearchable
                            noOptionsMessage={() => "Topilmadi"}
                            required
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: '48px',
                                    borderColor: '#d1d5db',
                                    '&:hover': {
                                        borderColor: '#3b82f6'
                                    }
                                }),
                                option: (base, { isFocused }) => ({
                                    ...base,
                                    backgroundColor: isFocused ? '#e0e7ff' : 'white',
                                    color: '#1e3a8a',
                                    '&:active': {
                                        backgroundColor: '#bfdbfe'
                                    }
                                })
                            }}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Yuborish
                </button>
            </form>
        </div>
    );
}

export default Questionnaire;