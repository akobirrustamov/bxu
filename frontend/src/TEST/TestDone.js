import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./logoMain.jpg";

function TestDone(props) {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleRetakeTest = () => {
        navigate('/test/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden p-8">
                {/* Logo section */}
                <div className="flex justify-center mb-6">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-32 w-auto object-contain rounded-lg shadow-md"
                    />
                </div>

                {/* Thank you message */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-blue-800 mb-2">
                        Test topshiringiz uchun rahmat!
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ijtimoiy tarmoqlarimizga obuna bo'lib, yangiliklardan xabardor bo'ling
                    </p>
                </div>

                {/* Retake Test Button - Prominent CTA */}
                <div className="mb-8 text-center">
                    <button
                        onClick={handleRetakeTest}
                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-xl rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Qayta Test topshirish
                    </button>
                </div>

                {/* Social media links */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-center text-blue-700 mb-4">
                        Bizning ijtimoiy tarmoqlar
                    </h3>

                    <ul className="space-y-3">
                        <SocialLink
                            icon="fa-brands fa-telegram"
                            color="text-[#0088cc]"
                            text="Telegram"
                            href="https://t.me/bxu_uz"
                        />
                        <SocialLink
                            icon="fa-brands fa-square-instagram"
                            color="text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text"
                            text="Instagram"
                            href="https://www.instagram.com/bxu.uz"
                        />
                        <SocialLink
                            icon="fa-brands fa-square-facebook"
                            color="text-[#1877F2]"
                            text="Facebook"
                            href="https://www.facebook.com/share/16Cvb6AEEv/"
                        />
                        <SocialLink
                            icon="fa-brands fa-youtube"
                            color="text-[#FF0000]"
                            text="YouTube"
                            href="https://youtube.com/@bxu_uz"
                        />
                        <SocialLink
                            icon="fa-solid fa-envelope"
                            color="text-[#4285F4]"
                            text="buxpxti@gmail.com"
                            href="mailto:buxpxti@gmail.com"
                            isEmail={true}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Reusable social link component
function SocialLink({ icon, color, text, href, isEmail = false }) {
    return (
        <li>
            <a
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 no-underline text-gray-800 font-medium`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={`${icon} ${color} text-2xl`}></i>
                <span>{text}</span>
                {!isEmail && (
                    <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-gray-400 text-sm"></i>
                )}
            </a>
        </li>
    );
}

export default TestDone;