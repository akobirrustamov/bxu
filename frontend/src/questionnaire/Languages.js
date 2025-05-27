import React, { useState } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";
import collab from "./logoM.PNG"
function Languages() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language:"",
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
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    }
  };

  const sourceOptions = [
    { value: "0", label: "Ingliz tili" },
    { value: "1", label: "Rus tili" },
    { value: "1", label: "Turk tili" },
    { value: "2", label: "Nemis tili" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, source: selectedOption.value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-2xl space-y-6 transition-all duration-300 hover:shadow-2xl"
      >
        <div className="flex items-center justify-center gap-8">
          <img
            src={logo}
            alt="Buxoro xalqaro universiteti logosi"
            className="h-24 w-auto mb-4 object-contain"
          />
          <h1 className="text-xl md:text-xl font-bold text-blue-800 text-center">
            Buxoro xalqaro universiteti va Muarrix-Usmanova o'quv markazi hamkorligida  <br/>
            <span className="text-2xl text-red-500">Ingliz, turk, rus, nemis</span> tillarini o'rganing! <br/>
          </h1>
          <img
              src={collab}
              alt="Buxoro xalqaro universiteti logosi"
              className="h-24 w-auto mb-4 object-contain rounded-full"
          />

        </div>
        <div>
          <h2 className="text-lg md:text-xl text-gray-700 text-center">

            So'rovnomada qatnashing til sertifikati egasi bo'ling! <br/>Kursimiz davomida siz:
          </h2>
          <p>
            - C1 darajali ustozlar orqali amaliy darslarni;<br/>
            - Turk tili bo'yicha milliy sertifikat, Xalqaro TYS sertifikatlarini shuningdek ingliz tilidan CEFR va IELTS dan 7+ natijani qo'lga kiritasiz;<br/>
            - Rus tilida erkin muloqot qilish istagingizni amalga oshiring;<br/>
            - Nemis tilini o'rganish orqali xorijiy universitetlarda o'qish va ishlash imkoniyatlariga ega bo'ling;<br/>
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg md:text-xl mt-4 text-center text-red-500 font-semibold uppercase">
            Kursimizga hoziroq yoziling!
          </h2>
          <div className="space-y-2">
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              <span className="text-blue-600">1.</span> Siz nega aynan Buxoro
              xalqaro universitetini tanlagansiz?
            </label>
            <input type="text"
            className="border-1 border-[#d1d5db] rounded-sm w-full py-2 px-2"
            onClick={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="source" className="block text-gray-700 font-medium">
              <span className="text-blue-600">2.</span> Qaysi chet tilini o'rganmoqchsiz?
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
                  "&:active": {
                    backgroundColor: "#bfdbfe",
                  },
                }),
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

export default Languages;
