import React from "react";
import Header from "../../../header2/Header";
import Footer from "../../../footer/Footer";
import img1 from "./img/photo_1_2025-04-07_20-09-07.jpg";
import img2 from "./img/photo_2_2025-04-07_20-09-07.jpg";
import img3 from "./img/photo_3_2025-04-07_20-09-07.jpg";
import img4 from "./img/photo_4_2025-04-07_20-09-07.jpg";
import img5 from "./img/photo_6_2025-04-07_20-09-07.jpg";
import img6 from "./img/photo_7_2025-04-07_20-09-07.jpg";
import img7 from "./img/photo_5_2025-04-07_20-09-07.jpg";
import img8 from "./img/photo_2025-04-07_20-33-36.jpg";
import img9 from "./img/img8.jpg";
import img10 from "./img/photo_3_2025-04-07_20-09-07.jpg";
import { useTranslation } from "react-i18next";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { TreeIcon } from "./TreeIcons";

const TreeStatistics = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: t("ecozone.cherry"),
      value: 18,
      color: "#98FB98",
      icon: "gilos",
      bgColor: "bg-[#98FB98]/10",
      image: img1,
    },
    {
      name: t("ecozone.apple"),
      value: 15,
      color: "#66CDAA",
      icon: "olma",
      bgColor: "bg-[#66CDAA]/10",
      image: img2,
    },
    {
      name: t("ecozone.apricot"),
      value: 12,
      color: "#32CD32",
      icon: "urik",
      bgColor: "bg-[#32CD32]/10",
      image: img3,
    },
    {
      name: t("ecozone.peach"),
      value: 13,
      color: "#00FA9A",
      icon: "shaftoli",
      bgColor: "bg-[#00FA9A]/10",
      image: img4,
    },
    {
      name: t("ecozone.pear"),
      value: 5,
      color: "#7CFC00",
      icon: "nok",
      bgColor: "bg-[#7CFC00]/10",
      image: img5,
    },
    {
      name: t("ecozone.juniper"),
      value: 22,
      color: "#228B22",
      icon: "archazor",
      bgColor: "bg-[#228B22]/10",
      image: img6,
    },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Komponentlar
  const StatCard = ({ title, value, icon, color }) => (
    <div
      className={`${color} p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center`}
    >
      <span className="text-3xl mb-2">{icon}</span>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );

  const ChartCard = ({ title, children, iconType }) => (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg h-full">
      <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
        <TreeIcon type={iconType} className="text-green-600" />
        {title}
      </h2>
      <div className="h-64 md:h-80">{children}</div>
    </div>
  );

  const TableHeader = ({ children }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
      {children}
    </th>
  );

  const ImpactCard = ({ title, description, icon }) => (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <span className="text-3xl mb-3 inline-block">{icon}</span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-green-50 via-white to-emerald-50 py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center my-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
              {t("ecozone.text")}
            </h1>
            <p className="text-lg md:text-xl text-green-600 max-w-3xl mx-auto">
              {t("ecozone.text1")}
            </p>
          </div>

          {/* Galereya */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2">
              <TreeIcon type="list" className="text-green-600" />
              {t("ecozone.text2")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                img6,
                img5,
                img8,
                img9,
                img10,
                img7,
                img1,
                img2,
                img3,
                img4,
              ].map((img, index) => (
                <div
                  key={`img-${index}`}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
                >
                  <img
                    src={img}
                    alt={`Daraxt ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title={t("ecozone.text3")}
              value={total.toLocaleString()}
              icon="🌳"
              color="bg-green-100 text-green-800 hover:bg-green-200"
            />
            <StatCard
              title={t("ecozone.text4")}
              value={t("ecozone.text5")}
              icon="🌍"
              color="bg-teal-100 text-teal-800 hover:bg-teal-200"
            />
            <StatCard
              title={t("ecozone.text6")}
              value={t("ecozone.text7")}
              icon="🍃"
              color="bg-blue-100 text-blue-800 hover:bg-blue-200"
            />
            <StatCard
              title={t("ecozone.text8")}
              value={data.length}
              icon="🌲"
              color="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <ChartCard
              title="Daraxt turlari bo'yicha taqsimot"
              iconType="chart"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sortedData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={5}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                    dataKey="value"
                  >
                    {sortedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} ta`, "Soni"]}
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    height={40}
                    wrapperStyle={{
                      paddingTop: "20px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Bar Chart */}
            <ChartCard
              title="Daraxtlar soni bo'yicha solishtirma"
              iconType="bar-chart"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sortedData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis
                    type="number"
                    tick={{ fill: "#4b5563" }}
                    axisLine={{ stroke: "#9ca3af" }}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={100}
                    tick={{ fill: "#4b5563" }}
                    axisLine={{ stroke: "#9ca3af" }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value} ta`, "Soni"]}
                    labelFormatter={(name) => `Daraxt turi: ${name}`}
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="value" name="Soni" radius={[0, 4, 4, 0]}>
                    {sortedData.map((entry, index) => (
                      <Cell key={`bar-cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Data Table */}
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2">
                <TreeIcon type="list" className="text-green-600" />
                {t("ecozone.text9")}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-green-200">
                  <thead className="bg-gradient-to-r from-green-600 to-emerald-700">
                    <tr>
                      <TableHeader>{t("ecozone.text10")}</TableHeader>
                      <TableHeader>{t("ecozone.text11")}</TableHeader>
                      <TableHeader>{t("ecozone.text12")}</TableHeader>
                      <TableHeader>{t("ecozone.text13")}</TableHeader>
                      <TableHeader>{t("ecozone.text14")}</TableHeader>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-green-200">
                    {sortedData.map((item, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-green-50 transition-colors ${item.bgColor}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                          <TreeIcon type={item.icon} className="text-xl mr-3" />
                          <span className="font-medium text-green-900">
                            {item.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-800">
                          {item.value.toLocaleString()}
                          {t("ecozone.text22")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="w-12 text-green-800">
                              {((item.value / total) * 100).toFixed(1)}%
                            </span>
                            <div className="ml-3 w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="h-2.5 rounded-full transition-all duration-500"
                                style={{
                                  width: `${(item.value / total) * 100}%`,
                                  backgroundColor: item.color,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 w-full bg-gray-200 rounded">
                            <div
                              className="h-4 rounded transition-all duration-500"
                              style={{
                                width: `${
                                  (item.value / sortedData[0].value) * 100
                                }%`,
                                backgroundColor: item.color,
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Environmental Impact Section */}
          <div className="mt-10 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl shadow-lg p-8 text-white transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              🌱 {t("ecozone.text15")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImpactCard
                title={t("ecozone.text16")}
                description={t("ecozone.text17")}
                icon="🌳"
              />
              <ImpactCard
                title={t("ecozone.text18")}
                description={t("ecozone.text19")}
                icon="🍃"
              />
              <ImpactCard
                title={t("ecozone.text20")}
                description={t("ecozone.text21")}
                icon="🦋"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TreeStatistics;
