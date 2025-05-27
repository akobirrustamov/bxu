import React, { useState, useEffect } from "react";
import Select from "react-select";
import logo from "./logoMain.jpg";
import { useNavigate } from "react-router-dom";
import ApiCall from "../config/index";

function Concert() {
  const [formData, setFormData] = useState({
    description: "",
    count: "",
    answer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // Cooldown timer effect
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await ApiCall("/api/v1/concert-questionnaire", "POST", formData);
      setShowSuccess(true);
      setCooldown(120); // 2 daqiqa = 120 soniya
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 md:p-6">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-green-600">
                Muvaffaqiyatli yuborildi!
              </h3>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mb-4">
              Rahmat! Ma'lumotlaringiz saqlandi.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
            >
              Yopish
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-2xl space-y-6 transition-all duration-300 hover:shadow-2xl relative"
      >
        {/* Form content remains the same */}
        <div className="">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={logo}
              alt="Buxoro xalqaro universiteti logosi"
              className="h-24 w-auto object-contain md:mr-4"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-800">
                Buxoro Xalqaro Universiteti
              </h1>
              <h1 className="text-lg md:text-2xl text-blue-700 mt-1 text-center uppercase">
                Konsertda qatnashish bepul.
              </h1>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl text-gray-700 mt-1">
              So'rovnomada qatnashing - eng yaxshi tadbir tashkil etishda o'z
              hissangizni qo'shing! Tadbirda Siz, yaqinlaringiz (oila
              a'zolaringiz, qarindoshlaringiz va do'stlaringiz) bilan birga
              qatnashing. Konsert ishtirokchilariga ajratilgan{" "}
              <span className="text-blue-500 font-semibold">sovg'alardan</span>{" "}
              biriga ega bo'ling!
              <br /> Konsert boshlanish vaqti 19:00 da.
            </h2>
            <h2 className="text-lg md:text-xl text-gray-700 mt-3">
              21-may kuni Buxoro Xalqaro Universitetida bo'lib o'tadigan "Yozgi
              Konsert"ning
              <span className="text-blue-800 font-semibold">
                {" "}
                asosiy mehmoni - Zahriddin Xamrayev
              </span>{" "}
              bo'ladi!
            </h2>
          </div>
        </div>

        {/* Form fields remain the same */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl mt-4 text-center text-blue-500 font-semibold uppercase">
            Konsertda dasturida sizni ko'rishdan mamnunmiz!
          </h2>
          <div className="space-y-2">
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              <span className="text-blue-600">1.</span> Siz nechi kishi bo'lib
              kelasiz?
              <input
                type="count"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Javobingizni yozing..."
                required
                name="count"
                value={formData.count}
                onChange={handleChangeNumber}
              />
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              <span className="text-blue-600">2.</span> Izoh qoldiring
              (ixtiyoriy)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Javobingizni yozing..."
              rows="3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || cooldown > 0}
          className={`w-full bg-gradient-to-r text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
            isSubmitting || cooldown > 0
              ? "bg-gray-400 cursor-not-allowed"
              : "from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          }`}
        >
          {isSubmitting
            ? "Yuborilmoqda..."
            : cooldown > 0
            ? `Qayta yuborish uchun ${cooldown} soniya qoldi`
            : "Yuborish"}
        </button>

        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.215028847586!2d64.431045!3d39.809328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzMzLjYiTiA2NMKwMjUnNTEuOCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Buxoro Xalqaro Universiteti joylashuvi"
          ></iframe>
        </div>
      </form>
    </div>
  );
}

export default Concert;
