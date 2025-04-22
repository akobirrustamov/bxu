import React, { useState, useEffect } from "react";
import Select from "react-select";
import ApiCall, {baseUrl} from "../config/index"; // Assuming this is your API call utility
import Sidebar from "./Sidebar";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Staff = () => {
    const [admins, setAdmins] = useState([]);
    const [ranks, setRanks] = useState([]);
    const [duties, setDuties] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
        rankIds: [],
        file: null,
        passportPin: "",
        passportNumber: "",
        telegramId: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentAdminId, setCurrentAdminId] = useState(null);

    // Filter States
    const [filters, setFilters] = useState({
        name: "",
        phone: "",
        createdAt: "",
        rankId: null,
    });

    useEffect(() => {
        getAllStaff();
        fetchRanks();
        getDuties();
    }, []);

    // Fetch staff, ranks, and duties
    const getAllStaff = async () => {
        try {
            const response = await ApiCall("/api/v1/app/staff", "GET", null, null, true);
            setAdmins(response.data);
        } catch (error) {
            console.error("Error fetching staff:", error);
        }
    };

    const getDuties = async () => {
        try {
            const response = await ApiCall("/api/v1/app/staff/duties", "GET", null, null, true);
            setDuties(response.data);
        } catch (error) {
            console.error("Error fetching duties:", error);
        }
    };

    const fetchRanks = async () => {
        try {
            const response = await ApiCall("/api/v1/app/rank", "GET", null, null, true);
            setRanks(response.data);
        } catch (error) {
            console.error("Error fetching ranks:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRankChange = (selectedOptions) => {
        setFormData((prev) => ({
            ...prev,
            rankIds: selectedOptions ? selectedOptions.map(option => option.value) : [],
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            file: file,
        }));
    };

    const handleRankFilterChange = (selectedOption) => {
        setFilters((prev) => ({
            ...prev,
            rankId: selectedOption ? selectedOption.value : null,
        }));
    };

    const handleOpenModal = (admin = null) => {
        if (admin) {
            setIsEditing(true);
            const adminDuties = duties
                .filter((item) => item.staff.id === admin.id)
                .map((item) => item.rank.id);

            setFormData({
                name: admin.name,
                phone: admin.phone,
                password: "",
                rankIds: adminDuties,
                passportPin: admin.passportPin,
                passportNumber: admin.passportNumber,
                telegramId: admin.telegramId,

            });
            setCurrentAdminId(admin.id);
        } else {
            setIsEditing(false);
            setFormData({
                name: "",
                phone: "",
                password: "",
                rankIds: [],
            });
        }
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setFormData({
            name: "",
            phone: "",
            password: "",
            rankIds: [],

        });
        setIsEditing(false);
    };
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const uploadImage = async (image, prefix) => {
        const formData = new FormData();
        formData.append('photo', image);
        formData.append('prefix', prefix);

        try {
            const response = await ApiCall('/api/v1/file/upload', 'POST', formData, null, true);
            return response.data; // Return the UUID of the uploaded image
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };

    const handleSubmit = async () => {

        const uploadedImage = formData.file ? await uploadImage(formData.file, "/staff/image") : null;
        if (uploadedImage) {
            formData.file = uploadedImage;
        }
        if (isEditing) {
                await updateStaff(currentAdminId, formData);
        } else {
            await saveStaff(formData);
        }
    };

    const saveStaff = async (staffData) => {
        try {
            const response = await ApiCall("/api/v1/app/staff", "POST", staffData, null, true);
            setAdmins((prev) => [...prev, response.data]);
            handleCloseModal();
            getAllStaff();
            fetchRanks();
            getDuties();
        } catch (error) {
            console.error("Error saving staff:", error);
        }
    };

    const updateStaff = async (id, staffData) => {
        try {
            const response = await ApiCall(`/api/v1/app/staff/${id}`, "PUT", staffData, null, true);
            setAdmins((prev) =>
                prev.map((admin) => (admin.id === id ? response.data : admin))
            );
            handleCloseModal();
            getAllStaff();
            fetchRanks();
            getDuties();
        } catch (error) {
            console.error("Error updating staff:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiCall(`/api/v1/app/staff/${id}`, "DELETE", null, null, true);
            setAdmins((prev) => prev.filter((admin) => admin.id !== id));
        } catch (error) {
            console.error("Error deleting staff:", error);
        }
    };
    const filteredAdmins = admins.filter((admin) => {
        return (
            (filters.name ? admin.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
            (filters.phone ? admin.phone.toLowerCase().includes(filters.phone.toLowerCase()) : true) &&
            (filters.createdAt ? new Date(admin.createdAt).toLocaleString().includes(filters.createdAt) : true) &&
            (filters.rankId ? duties.some(duty => duty.staff.id === admin.id && duty.rank.id === filters.rankId) : true)
        );
    });
    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <div className={"flex flex-wrap justify-between "}>
                    <h2 className="text-2xl font-bold text-gray-800  md:text-3xl xl:text-4xl">
                        Xodimlar
                    </h2>
                    <button
                        onClick={() => handleOpenModal()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded "
                    >
                        Add Admin
                    </button>
                </div>

                {/* Filter Section */}
                <div className="mt-6">
                    <div className="flex mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Filter by Name"
                            value={filters.name}
                            onChange={handleFilterChange}
                            className="border p-2 mr-4"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Filter by Phone"
                            value={filters.phone}
                            onChange={handleFilterChange}
                            className="border p-2 mr-4"
                        />
                        <input
                            type="text"
                            name="createdAt"
                            placeholder="Filter by Date"
                            value={filters.createdAt}
                            onChange={handleFilterChange}
                            className="border p-2 mr-4"
                        />
                        <Select
                            placeholder="Filter by Rank"
                            value={
                                filters.rankId
                                    ? { value: filters.rankId, label: ranks.find(rank => rank.id === filters.rankId)?.name }
                                    : { value: null, label: "Show All" }
                            }
                            onChange={(selectedOption) =>
                                handleRankFilterChange(selectedOption?.value || null) // Set to null for "Show All"
                            }
                            options={[
                                { value: null, label: "Show All" }, // Add "Show All" option
                                ...ranks.map((rank) => ({
                                    value: rank.id,
                                    label: rank.name,
                                })),
                            ]}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            className="w-64"
                        />

                    </div>
                </div>

                <div className="mt-6">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 py-2">№</th>
                            <th className="border border-gray-300 py-2">Rasm</th>
                            <th className="border border-gray-300 py-2">F.I.O</th>
                            <th className="border border-gray-300 py-2">Login(telefon raqam)</th>
                            <th className="border border-gray-300 py-2">Ranks</th>
                            <th className="border border-gray-300 py-2">Yaratilgan vaqt</th>
                            <th className="border border-gray-300 py-2">Passport raqami</th>
                            <th className="border border-gray-300 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredAdmins.length > 0 ? (
                            filteredAdmins.map((admin, index) => (
                                <tr key={admin.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300">{index + 1}</td>
                                    <td className="border border-gray-300 ">
                                        <img  style={{borderRadius:"50%", width:"70px", height:"70px"}} src={`${baseUrl}/api/v1/file/getFile/${admin?.file?.id}`}/>
                                    </td>
                                    <td className="border border-gray-300 ">{admin.name}</td>
                                    <td className="border border-gray-300 ">{admin.phone}</td>
                                    <td className="border border-gray-300">
                                        {duties
                                            .filter((item) => item.staff.id === admin.id)
                                            .map((item, index) => (
                                                <span key={index}
                                                      className="inline-block bg-gray-200 text-[12px] rounded p-1 m-1">
                                                        {item.rank.name}
                                                    </span>
                                            ))}
                                    </td>
                                    <td className="border border-gray-300 p-1">
                                        {new Date(admin.createdAt).toLocaleString()}
                                    </td>
                                    <td className="border border-gray-300 p-1">{admin.passportNumber}</td>
                                    <td className="border border-gray-300 px-2">
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
                                <td colSpan="6" className="border border-gray-300 px-4 py-2 text-center">
                                    No Admins Found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Rodal visible={modalVisible} onClose={handleCloseModal} width={650} height={680}>
                <div>
                    <h2 className="text-lg font-bold mb-4">{isEditing ? "Edit Admin" : "Add Admin"}</h2>
                    <form>

                        <div className={"grid grid-cols-2"}>
                            <div className="  mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>

                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="block w-full mb-4"
                                />
                            </div>
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
                                    name="phone"
                                    value={formData.phone}
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
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Ranks</label>
                                <Select
                                    isMulti
                                    name="rankIds"
                                    value={formData.rankIds.map((rankId) => {
                                        const rank = ranks.find((rank) => rank.id === rankId);
                                        return rank ? {value: rank.id, label: rank.name} : null;
                                    }).filter(Boolean)}
                                    onChange={handleRankChange}
                                    options={ranks.map((rank) => ({
                                        value: rank.id,
                                        label: rank.name,
                                    }))}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">JSHR</label>

                                <input
                                    type="text"
                                    name="passportPin"
                                    placeholder="Passport PIN"
                                    value={formData.passportPin}
                                    onChange={handleInputChange}
                                    className="block w-full mb-4 p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Pasport raqami</label>

                                <input
                                    type="text"
                                    name="passportNumber"
                                    placeholder="Passport Number"
                                    value={formData.passportNumber}
                                    onChange={handleInputChange}
                                    className="block w-full mb-4 p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Telegram Id</label>

                                <input
                                    type="text"
                                    name="telegramId"
                                    placeholder="Telegram ID"
                                    value={formData.telegramId}
                                    onChange={handleInputChange}
                                    className="block w-full mb-4 p-2 border border-gray-300 rounded"
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            {isEditing ? "Update Admin" : "Save Admin"}
                        </button>
                    </form>
                </div>
            </Rodal>
        </div>
    );
};

export default Staff;
