import React, { useState, useEffect } from "react";
import ApiCall from "../config/index"; // Assume this is your API call utility
import Sidebar from "./Sidebar";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Admin = () => {
    const [admins, setAdmins] = useState([]); // Store list of admins
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility
    const [currentAdmin, setCurrentAdmin] = useState(null); // Admin being edited
    const [formData, setFormData] = useState({ name: "", login: "", password: "" }); // Form state
    const [isEditing, setIsEditing] = useState(false); // Editing mode flag

    // Fetch admins when the component mounts
    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await ApiCall("/api/v1/app/admin/getadministrator", "GET", null, null, true);
            setAdmins(response.data); // Populate the admins list
        } catch (error) {
            console.error("Error fetching admins:", error);
            setAdmins([]);
        }
    };

    // Open the modal, optionally with an admin to edit
    const handleOpenModal = (admin = null) => {
        setIsEditing(!!admin);
        setCurrentAdmin(admin);
        setFormData(admin ? { name: admin.name, login: admin.login, password: "" } : { name: "", login: "", password: "" });
        setModalVisible(true);
    };

    // Close the modal and reset form state
    const handleCloseModal = () => {
        setModalVisible(false);
        setCurrentAdmin(null);
        setFormData({ name: "", login: "", password: "" });
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Save the admin (add or edit)
    const handleSubmit = async () => {
        let obj={
            name: formData.name,
            login: formData.login,
            password: formData.password
        }
        try {
            if (isEditing && currentAdmin) {
                // Edit existing admin (assuming backend has PUT endpoint)
                await ApiCall(`/api/v1/app/admin/${currentAdmin.id}`, "PUT", obj, null, true);
            } else {
                // Add new admin
                await ApiCall("/api/v1/app/admin/add", "POST", obj, null, true);
            }
            fetchAdmins(); // Refresh the list
            handleCloseModal(); // Close the modal
        } catch (error) {
            console.error("Error saving admin:", error);
        }
        setFormData({ name: "", login: "", password: "" })
    };

    // Delete an admin
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this admin?")) {
            try {
                await ApiCall(`/api/v1/app/admin/${id}`, "DELETE", null, null, true);
                fetchAdmins(); // Refresh the list
            } catch (error) {
                console.error("Error deleting admin:", error);
            }
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">

                <div className={" pb-1 sm:ml-64 flex flex-wrap justify-between"}>
                    <h2 className="text-2xl font-bold text-gray-800  md:text-3xl xl:text-4xl    ">
                        Ma'sul hodimlar
                    </h2>
                    <button
                        onClick={() => handleOpenModal()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                        Add Admin
                    </button>
                </div>




                <div className="mt-6">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">№</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Login</th>
                            <th className="border border-gray-300 px-4 py-2">Time</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {admins.length > 0 ? (
                            admins.map((admin, index) => (
                                <tr key={admin.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{admin.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{admin.login}</td>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(admin.createdAt).toLocaleString()}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleOpenModal(admin)}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(admin.id)}
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
                                    No Admins Found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for Add/Edit */}
            <Rodal visible={modalVisible} onClose={handleCloseModal} height={400}>
                <div>
                    <h2 className="text-lg font-bold mb-4">{isEditing ? "Edit Admin" : "Add Admin"}</h2>
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Login</label>
                            <input
                                type="text"
                                name="login"
                                value={formData.login}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
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

export default Admin;
