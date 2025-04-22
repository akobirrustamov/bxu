import React, { useState, useEffect } from 'react';
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import Select from 'react-select'; // Import React-Select
import { Link, useNavigate } from "react-router-dom";
import 'rodal/lib/rodal.css';

const AdminMessage = () => {
    const [nomenklatura, setNomenklatura] = useState([]);
    const [administrators, setAdministrators] = useState([]);
    const [newNomenklatura, setNewNomenklatura] = useState({ name: '', user: '', numberPackages: '', code: '' });
    const [editNomenklatura, setEditNomenklatura] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
        fetchAdministrators();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await ApiCall('/api/v1/app/nomenklatura', 'GET', null, null, true);
            setNomenklatura(response.data);
        } catch (error) {
            setNomenklatura([]);
            console.error("Error fetching messages:", error);
        }
    };

    const fetchAdministrators = async () => {
        try {
            const response = await ApiCall('/api/v1/app/staff', 'GET', null, null, true);
            setAdministrators(response.data.map(admin => ({ value: admin.id, label: admin.name }))); // Format for React-Select
        } catch (error) {
            console.error("Error fetching administrators:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nomenklatura)
        try {
            const payload = {
                name: newNomenklatura.name,
                user: newNomenklatura.user,
                numberPackages: newNomenklatura.numberPackages,
                code: newNomenklatura.code,
            };

            if (editNomenklatura) {
                await ApiCall(`/api/v1/app/nomenklatura/${editNomenklatura.id}`, 'PUT', payload, null, true);
                setIsEditModalOpen(false);
            } else {
                await ApiCall('/api/v1/app/nomenklatura/add', 'POST', payload, null, true);
                setIsModalOpen(false);
            }
            setNewNomenklatura({ name: '', user: '', numberPackages: '', code: '' })

            fetchMessages(); // Refresh the data
        } catch (error) {
            console.error("Error saving Nomenklatura:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiCall(`/api/v1/app/nomenklatura/${id}`, 'DELETE', null, null, true);
            fetchMessages();  // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting Nomenklatura:", error);
        }
    };

    const openModal = () => {
        setNewNomenklatura({ name: '', user: '' });
        setEditNomenklatura(null);
        setIsModalOpen(true);
    };

    const openEditModal = (nomenklatura) => {
        setEditNomenklatura(nomenklatura);
        setNewNomenklatura({
            name: nomenklatura.name,
            user: nomenklatura.user.id,
            numberPackages: nomenklatura.numberPackages,
            code: nomenklatura.code
        });
        setIsEditModalOpen(true);
    };


    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <div className={" pb-1 sm:ml-64 flex flex-wrap justify-between"}>
                    <h2 className="text-2xl font-bold text-gray-800  md:text-3xl xl:text-4xl    ">
                        Nomenklatura bo'limlari
                    </h2>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                        Add Nomenklatura
                    </button>
                </div>

                <div className="mt-6">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">N%</th>
                            <th className="border border-gray-300 px-4 py-2">Bo'lim kodi</th>
                            <th className="border border-gray-300 px-4 py-2">Bo'lim nomi</th>
                            <th className="border border-gray-300 px-4 py-2">Ma'sul hodim</th>
                            <th className="border border-gray-300 px-4 py-2">Papkalar soni</th>
                            <th className="border border-gray-300 px-4 py-2">Vaqt</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {nomenklatura.length > 0 ? (
                            nomenklatura.map((n, index) => (
                                <tr key={n.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{n.code}</td>
                                    <td className="border border-gray-300 px-4 py-2">{n.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{n.user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{n.numberPackages}</td>

                                    <td className="border border-gray-300 px-4 py-2">{new Date(n.createdAt).toLocaleString()}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button onClick={() => openEditModal(n)}
                                                className="bg-yellow-500 text-white px-4 py-2">Edit
                                        </button>
                                        <button onClick={() => handleDelete(n.id)}
                                                className="bg-red-500 text-white px-4 py-2 ml-2">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">Hech qanday
                                    xabar yo'q
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            <Rodal height={450} visible={isModalOpen || isEditModalOpen} onClose={() => {
                setIsModalOpen(false);
                setIsEditModalOpen(false);
            }}>
                <h3 className="text-xl mb-4">{editNomenklatura ? 'Edit Nomenklatura' : 'Add Nomenklatura'}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newNomenklatura.name}
                        onChange={(e) => setNewNomenklatura({...newNomenklatura, name: e.target.value})}
                        placeholder="Bo'lim nomi"
                        className="border px-4 py-2 mb-4"
                    />

                    <div className={"grid grid-cols-2"}>
                        <input
                            type="text"
                            value={newNomenklatura.code}
                            onChange={(e) => setNewNomenklatura({...newNomenklatura, code: e.target.value})}
                            placeholder="Bo'lim kodi"
                            className="border px-4 py-2 mb-4 w-full"
                        />
                        <input
                            type="number"
                            value={newNomenklatura.numberPackages}
                            onChange={(e) => setNewNomenklatura({...newNomenklatura, numberPackages: e.target.value})}
                            placeholder="Papkalar soni"
                            className="border px-4 py-2 mb-4 w-full"
                        />

                    </div>
                    <Select
                        value={administrators.find(admin => admin.value === newNomenklatura.user)}
                        onChange={(selectedOption) => setNewNomenklatura({
                            ...newNomenklatura,
                            user: selectedOption.value
                        })}
                        options={administrators}
                        placeholder="Ma'sul hodim"
                        isSearchable
                        className="mb-4"
                    />
                    <div className="flex justify-end">
                        <button type="submit"
                                className="bg-blue-500 text-white px-4 py-2">{editNomenklatura ? 'Update' : 'Add'}</button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
};

export default AdminMessage;
