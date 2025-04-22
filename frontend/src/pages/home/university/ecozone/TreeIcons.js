// Rename TreeIcons to TreeIcon and export it as named
import React from "react";
import { FaTree, FaAppleAlt, FaLeaf, FaSeedling } from "react-icons/fa";

const treeIcons = {
  Gilos: <FaLeaf className="text-red-500 text-2xl" />,
  Olma: <FaAppleAlt className="text-green-600 text-2xl" />,
  Oʻrik: <FaSeedling className="text-yellow-500 text-2xl" />,
  Shaftoli: <FaSeedling className="text-pink-500 text-2xl" />,
  Nok: <FaAppleAlt className="text-yellow-600 text-2xl" />,
  Archa: <FaTree className="text-green-700 text-2xl" />,
  chinor: <FaTree className="text-green-700 text-2xl" />,
  tut: <FaLeaf className="text-green-400 text-2xl" />,
  terak: <FaTree className="text-lime-600 text-2xl" />,
  qayragoch: <FaLeaf className="text-emerald-500 text-2xl" />,
  archazor: <FaTree className="text-emerald-700 text-2xl" />,
  shaftoli: <FaSeedling className="text-pink-400 text-2xl" />,
  urik: <FaSeedling className="text-yellow-500 text-2xl" />,
  gilos: <FaLeaf className="text-red-500 text-2xl" />,
  olma: <FaAppleAlt className="text-green-600 text-2xl" />,
  nok: <FaAppleAlt className="text-yellow-600 text-2xl" />,
  list: <FaTree className="text-green-600 text-2xl" />,
  chart: <FaTree className="text-green-600 text-2xl" />,
  "bar-chart": <FaTree className="text-green-600 text-2xl" />,
};

export const TreeIcon = ({ type, className = "" }) => {
  const icon = treeIcons[type] || (
    <FaTree className={`text-gray-400 text-2xl ${className}`} />
  );
  return <span className={className}>{icon}</span>;
};
