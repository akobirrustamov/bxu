import React, { useState } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";
import collab from "./logoM.PNG";
function Languages() {
  const [tel, setTel] = useState(""); // Phone number state
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
    // Only allow digits after the initial +998
    if (value.length >= 14) return;
    if (value.startsWith("+998") && /^\+998\d{0,9}$/.test(value)) {
      if (value.length <= 13) setTel(value);
    } else if (value === "+998") {
      setTel(value);
    } else {
      setTel("+998");
    }
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
            Buxoro xalqaro universiteti va Muarrix-Usmanova o'quv markazi
            hamkorligida <br />
            <span className="text-2xl text-red-500">
              Ingliz, turk, rus, nemis
            </span>{" "}
            tillarini o'rganing! <br />
          </h1>
          <img
            src={collab}
            alt="Buxoro xalqaro universiteti logosi"
            className="h-24 w-auto mb-4 object-contain rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-xl text-gray-700 text-center">
            So'rovnomada qatnashing til sertifikati egasi bo'ling! <br />
            Kursimiz davomida siz:
          </h2>
          <p>
            - C1 darajali ustozlar orqali amaliy darslarni;
            <br />
            - Turk tili bo'yicha milliy sertifikat, Xalqaro TYS sertifikatlarini
            shuningdek ingliz tilidan CEFR va IELTS dan 7+ natijani qo'lga
            kiritasiz;
            <br />
            - Rus tilida erkin muloqot qilish istagingizni amalga oshiring;
            <br />
            - Nemis tilini o'rganish orqali xorijiy universitetlarda o'qish va
            ishlash imkoniyatlariga ega bo'ling;
            <br />
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg md:text-xl mt-4 text-center text-red-500 font-semibold uppercase">
            Kursimizga hoziroq yoziling!
          </h2>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              <span className="text-blue-600">1.</span> Ism va Familiyangizni
              kiriting:
            </label>
            <input
              type="text"
              name="name"
              className="border-1 border-[#d1d5db] rounded-sm w-full py-2 px-2"
              onClick={handleChange}
            />
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              <span className="text-blue-600">2.</span> Telefon raqamingizni
              kiriting:
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>

            <input
              type="text"
              name="phone"
              id="phone-input"
              onChange={handleChangeNum}
              onClick={() => setTel("+998")}
              value={tel}
              aria-describedby="helper-text-explanation"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="+998 __ ___-__-__"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="language"
              className="block text-gray-700 font-medium"
            >
              <span className="text-blue-600">3.</span> Qaysi chet tilini
              o'rganmoqchsiz?
            </label>
            <Select
              id="source"
              name="language"
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
