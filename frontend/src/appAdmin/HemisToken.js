import React, { useState, useEffect } from "react";
import ApiCall from "../config/index"; // Assume this is your API call utility
import Sidebar from "./Sidebar";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const HemisToken = () => {
    const [ranks, setRanks] = useState([]);
    const [filteredRanks, setFilteredRanks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [toolNameFilter, setToolNameFilter] = useState(""); // Filter by tool name
    const [timeAddedFilter, setTimeAddedFilter] = useState(""); // Filter by time added

    useEffect(() => {
        fetchRanks();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [ranks, toolNameFilter, timeAddedFilter]);

    const fetchRanks = async () => {
        try {
            const response = await ApiCall("/api/v1/app/admin/hemis", "GET", null, null, true);
            setRanks(response.data);
        } catch (error) {
            console.error("Error fetching ranks:", error);
            setRanks([]);
        }
    };

    const applyFilters = () => {
        let filtered = ranks;

        if (toolNameFilter) {
            filtered = filtered.filter((rank) =>
                rank.name.toLowerCase().includes(toolNameFilter.toLowerCase())
            );
        }

        if (timeAddedFilter) {
            filtered = filtered.filter((rank) =>
                new Date(rank.createdAt).toLocaleDateString().includes(timeAddedFilter)
            );
        }

        setFilteredRanks(filtered);
    };

    const handleOpenModal = (rank = null) => {
        setModalVisible(true);
        if (rank) {
            setIsEditing(true);
            setEditingId(rank.id);
            setFormData({ name: rank.name });
        } else {
            setIsEditing(false);
            setFormData({ name: "" });
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setIsEditing(false);
        setEditingId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (isEditing) {
            try {
                const response = await ApiCall(`/api/v1/app/rank/${editingId}`, "PUT", formData, null, true);
                fetchRanks(); // Refresh the list of ranks
                handleCloseModal();
            } catch (error) {
                console.error("Error updating rank:", error);
            }
        } else {
            try {
                const response = await ApiCall("/api/v1/app/admin/hemis", "POST", formData, null, true);
                fetchRanks(); // Refresh the list of ranks
                handleCloseModal();
            } catch (error) {
                console.error("Error creating rank:", error);
            }
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this rank?")) {
            try {
                await ApiCall(`/api/v1/app/admin/hemis/${id}`, "DELETE", null, null, true);
                fetchRanks(); // Refresh the list of ranks
            } catch (error) {
                console.error("Error deleting rank:", error);
            }
        }
    };

    return (
        <div>
            <Sidebar />
            <div className=" ">
                <div className={"p-10 pb-1 sm:ml-64 flex flex-wrap items-center aling-center justify-between"}>
                    <h2 className="text-2xl font-bold text-gray-800  md:text-3xl xl:text-4xl    ">
                        Token
                    </h2>
                    <button
                        onClick={() => handleOpenModal()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                        token qo'shish
                    </button>
                </div>

                <div className="p-10 pt-0 sm:ml-64 ">
                    <div className="flex space-x-4 mb-4">
                        <input
                            type="text"
                            placeholder="Filter by Tool Name"
                            value={toolNameFilter}
                            onChange={(e) => setToolNameFilter(e.target.value)}
                            className="border rounded py-2 px-3"
                        />
                        <input
                            type="text"
                            placeholder="Filter by Time Added"
                            value={timeAddedFilter}
                            onChange={(e) => setTimeAddedFilter(e.target.value)}
                            className="border rounded py-2 px-3"
                        />
                    </div>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">№</th>
                            <th className="border border-gray-300 px-4 py-2">Rank</th>
                            <th className="border border-gray-300 px-4 py-2">Created At</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredRanks.length > 0 ? (
                            filteredRanks.map((rank, index) => (
                                <tr key={rank.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{rank.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {new Date(rank.createdAt).toLocaleString()}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">

                                        <button
                                            onClick={() => handleDelete(rank.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                                    No Ranks Found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Add/Edit */}
            <Rodal visible={modalVisible} onClose={handleCloseModal} height={300}>
                <div>
                    <h2 className="text-lg font-bold mb-4">{isEditing ? "Edit Rank" : "Add Rank"}</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {isEditing ? "Update" : "Save"}
                        </button>
                    </form>
                </div>
            </Rodal>
        </div>
    );
};

export default HemisToken;
