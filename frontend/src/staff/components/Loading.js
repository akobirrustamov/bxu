import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 border-solid shadow-lg"></div>
      <span className="absolute text-white text-xl font-bold">
        Yuklanmoqda...
      </span>
    </div>
  );
}

export default Loading;
