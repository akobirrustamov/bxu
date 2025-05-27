// src/components/Languages.jsx
import React, { useState } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import collab from "./logoM.PNG";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";

function Languages() {
  const [tel, setTel] = useState("+998");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiCall("/api/v1/language-questionnaire", "POST", formData);
      alert("Rahmat! Ma'lumotlaringiz saqlandi.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  const sourceOptions = [
    { value: "0", label: "Ingliz tili" },
    { value: "1", label: "Rus tili" },
    { value: "2", label: "Turk tili" },
    { value: "3", label: "Nemis tili" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeNum = (e) => {
    let value = e.target.value;
    if (value.length >= 14) return;
    if (value.startsWith("+998") && /^\+998\d{0,9}$/.test(value)) {
      setTel(value);
      setFormData((prev) => ({ ...prev, phone: value }));
    } else {
      setTel("+998");
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, language: selectedOption.value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl p-4 md:p-10 space-y-6"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={logo}
            alt="BXU logo"
            className="h-20 md:h-24 object-contain"
          />
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">
              Buxoro Xalqaro Universiteti <br /> va Muarrix-Usmanova o‘quv
              markazi hamkorligida
            </h1>
            <p className="text-red-500 font-semibold text-xl">
              Ingliz, rus, turk, nemis tillarini o‘rganing!
            </p>
          </div>
          <img
            src={collab}
            alt="Collaborator logo"
            className="h-20 md:h-24 rounded-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="text-gray-700 space-y-2 text-sm md:text-base">
          <p>So‘rovnomada qatnashing — til sertifikati egasi bo‘ling!</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>C1 darajadagi ustozlar orqali amaliy darslar</li>
            <li>
              Turk tilidan milliy sertifikat, TYS; Ingliz tilidan CEFR/IELTS
              (7+)
            </li>
            <li>Rus tilida erkin muloqot qilish imkoniyati</li>
            <li>Nemis tili orqali xorijda o‘qish va ishlash imkoniyati</li>
          </ul>
          <p>
            Dars mashg'ulotlari <strong>Buxoro Xalqaro Universiteti</strong>{" "}
            binosida o'tiladi.
          </p>
          <p>
            Batafsil ma'lumot uchun: <strong>+998 50 726 30 20</strong>
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              1. Ism va Familiyangiz:
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ismingizni kiriting"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              2. Telefon raqamingiz:
            </label>
            <input
              type="text"
              name="phone"
              value={tel}
              onChange={handleChangeNum}
              onClick={() => setTel("+998")}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+998 __ ___ __ __"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              3. Qaysi chet tilini o‘rganmoqchisiz?
            </label>
            <Select
              id="language"
              name="language"
              options={sourceOptions}
              onChange={handleSelectChange}
              placeholder="Tilni tanlang..."
              isSearchable
              required
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "48px",
                  borderColor: "#d1d5db",
                  "&:hover": {
                    borderColor: "#3b82f6",
                  },
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? "#e0e7ff" : "white",
                  color: "#1e3a8a",
                }),
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg transition duration-300"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default Languages;
