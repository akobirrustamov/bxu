import React, { useState, useEffect } from 'react';
import ApiCall from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import 'rodal/lib/rodal.css';

const DailyControl = () => {
    const [dailyControls, setDailyControls] = useState([]);
    const [staff, setStaff] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSubFolderModalVisible, setIsSubFolderModalVisible] = useState(false);
    const [isBulkSubFolderModalVisible, setIsBulkSubFolderModalVisible] = useState(false);
    const [currentControl, setCurrentControl] = useState(null);
    const [currentSubFolder, setCurrentSubFolder] = useState(null);
    const navigate = useNavigate();

    // Form states
    const [controlForm, setControlForm] = useState({
        name: '',
        description: ''
    });
    const [subFolderForm, setSubFolderForm] = useState({
        name: '',
        description: '',
        staffId: null
    });
    const [bulkSubFolderForm, setBulkSubFolderForm] = useState([{
        name: '',
        description: '',
        staffId: null
    }]);

    useEffect(() => {
        fetchDailyControls();
        fetchStaff();
    }, []);

    const fetchDailyControls = async () => {
        try {
            const response = await ApiCall('/api/v1/daily-control', 'GET');
            const controls = response.data;

            // Fetch subfolders for each control
            const controlsWithSubFolders = await Promise.all(
                controls.map(async control => {
                    const subResponse = await ApiCall(`/api/v1/daily-control/${control.id}/subfolders`, 'GET');
                    return {
                        ...control,
                        subFolders: subResponse.data
                    };
                })
            );

            setDailyControls(controlsWithSubFolders);
        } catch (error) {
            console.error("Error fetching daily controls:", error);
        }
    };

    const fetchStaff = async () => {
        try {
            const response = await ApiCall('/api/v1/app/staff', 'GET');
            setStaff(response.data.map(s => ({ value: s.id, label: s.name })));
        } catch (error) {
            console.error("Error fetching staff:", error);
        }
    };

    const openModal = (control = null) => {
        setCurrentControl(control);
        if (control) {
            setControlForm({
                name: control.name,
                description: control.description
            });
        } else {
            setControlForm({
                name: '',
                description: ''
            });
        }
        setIsModalVisible(true);
    };

    const openSubFolderModal = (subFolder = null, controlId) => {
        setCurrentSubFolder(subFolder);
        if (subFolder) {
            setSubFolderForm({
                name: subFolder.name,
                description: subFolder.description,
                staffId: subFolder.staff ? subFolder.staff.id : null
            });
        } else {
            setSubFolderForm({
                name: '',
                description: '',
                staffId: null
            });
        }
        setCurrentControl({ id: controlId });
        setIsSubFolderModalVisible(true);
    };

    const openBulkSubFolderModal = (controlId) => {
        setBulkSubFolderForm([{
            name: '',
            description: '',
            staffId: null
        }]);
        setCurrentControl({ id: controlId });
        setIsBulkSubFolderModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setIsSubFolderModalVisible(false);
        setIsBulkSubFolderModalVisible(false);
        setCurrentControl(null);
        setCurrentSubFolder(null);
    };

    const handleControlSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentControl) {
                // Update existing
                await ApiCall(`/api/v1/daily-control/${currentControl.id}`, 'PUT', controlForm);
            } else {
                // Create new
                await ApiCall('/api/v1/daily-control', 'POST', controlForm);
            }
            fetchDailyControls();
            closeModal();
        } catch (error) {
            console.error("Error saving daily control:", error);
        }
    };
    const handleSubFolderSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                name: subFolderForm.name,
                description: subFolderForm.description,
                staff: subFolderForm.staffId ? { id: subFolderForm.staffId } : null
            };

            if (currentSubFolder) {
                // For update, include the ID and dailyControl relationship
                formData.id = currentSubFolder.id;
                formData.dailyControl = { id: currentControl.id };
                await ApiCall(`/api/v1/daily-control/subfolders/${currentSubFolder.id}`, 'PUT', formData);
            } else {
                // For create, just include the dailyControl relationship
                formData.dailyControl = { id: currentControl.id };
                await ApiCall(`/api/v1/daily-control/${currentControl.id}/subfolders`, 'POST', formData);
            }

            fetchDailyControls();
            closeModal();
        } catch (error) {
            console.error("Error saving subfolder:", error);
        }
    };
    const handleBulkSubFolderSubmit = async (e) => {
        e.preventDefault();
        try {
            // Filter out empty forms and transform staffId to staff
            const validForms = bulkSubFolderForm
                .filter(form => form.name.trim() !== '')
                .map(({ staffId, ...rest }) => ({
                    ...rest,
                    staff: staffId ? { id: staffId } : null
                }));

            if (validForms.length === 0) {
                alert('Please add at least one valid subfolder');
                return;
            }

            // Create all subfolders
            await Promise.all(
                validForms.map(form =>
                    ApiCall(`/api/v1/daily-control/${currentControl.id}/subfolders`, 'POST', form)
                )
            );

            fetchDailyControls();
            closeModal();
        } catch (error) {
            console.error("Error saving bulk subfolders:", error);
        }
    };
    const addMoreSubFolderField = () => {
        setBulkSubFolderForm([...bulkSubFolderForm, {
            name: '',
            description: '',
            staffId: null
        }]);
    };

    const removeSubFolderField = (index) => {
        const newForms = [...bulkSubFolderForm];
        newForms.splice(index, 1);
        setBulkSubFolderForm(newForms);
    };

    const handleBulkSubFolderChange = (index, field, value) => {
        const newForms = [...bulkSubFolderForm];
        newForms[index][field] = value;
        setBulkSubFolderForm(newForms);
    };

    const handleDeleteControl = async (id) => {
        if (window.confirm('Are you sure you want to delete this daily control and all its subfolders?')) {
            try {
                await ApiCall(`/api/v1/daily-control/${id}`, 'DELETE');
                fetchDailyControls();
            } catch (error) {
                console.error("Error deleting daily control:", error);
            }
        }
    };

    const handleDeleteSubFolder = async (controlId, subFolderId) => {
        if (window.confirm('Are you sure you want to delete this subfolder?')) {
            try {
                await ApiCall(`/api/v1/daily-control/subfolders/${subFolderId}`, 'DELETE');
                fetchDailyControls();
            } catch (error) {
                console.error("Error deleting subfolder:", error);
            }
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4 sm:ml-64 w-full">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Daily Control Management</h1>
                    <button
                        onClick={() => openModal()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Daily Control
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Subfolders</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dailyControls.map((control, index) => (
                            <React.Fragment key={control.id}>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b font-medium">{control.name}</td>
                                    <td className="py-2 px-4 border-b">{control.description}</td>
                                    <td className="py-2 px-4 border-b">
                                        {control.subFolders?.length || 0}
                                    </td>
                                    <td className="py-2 px-4 border-b space-x-2">
                                        <button
                                            onClick={() => openModal(control)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteControl(control.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => openBulkSubFolderModal(control.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                                        >
                                            Add Subfolders
                                        </button>
                                    </td>
                                </tr>
                                {control.subFolders?.map((subFolder) => (
                                    <tr key={subFolder.id} className="bg-gray-50">
                                        <td className="py-1 px-4 border-b"></td>
                                        <td className="py-1 px-4 border-b pl-8">↳ {subFolder.name}</td>
                                        <td className="py-1 px-4 border-b">{subFolder.description}</td>
                                        <td className="py-1 px-4 border-b">
                                            {subFolder.staff?.name || 'Unassigned'}
                                        </td>
                                        <td className="py-1 px-4 border-b space-x-2">
                                            <button
                                                onClick={() => openSubFolderModal(subFolder, control.id)}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded text-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteSubFolder(control.id, subFolder.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded text-sm"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Daily Control Modal */}
                <Rodal visible={isModalVisible} onClose={closeModal} width={600} height={500}>
                    <h2 className="text-xl font-bold mb-4">
                        {currentControl ? 'Edit Daily Control' : 'Add New Daily Control'}
                    </h2>
                    <form onSubmit={handleControlSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name*</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded"
                                value={controlForm.name}
                                onChange={(e) => setControlForm({...controlForm, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                                className="w-full px-3 py-2 border rounded"
                                value={controlForm.description}
                                onChange={(e) => setControlForm({...controlForm, description: e.target.value})}
                                rows="3"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </Rodal>

                {/* Single Sub Folder Modal */}
                <Rodal visible={isSubFolderModalVisible} onClose={closeModal} width={500} height={400}>
                    <h2 className="text-xl font-bold mb-4">
                        {currentSubFolder ? 'Edit Sub Folder' : 'Add New Sub Folder'}
                    </h2>
                    <form onSubmit={handleSubFolderSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name*</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded"
                                value={subFolderForm.name}
                                onChange={(e) => setSubFolderForm({...subFolderForm, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                                className="w-full px-3 py-2 border rounded"
                                value={subFolderForm.description}
                                onChange={(e) => setSubFolderForm({...subFolderForm, description: e.target.value})}
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Staff</label>
                            <Select
                                options={staff}
                                value={staff.find(s => s.value === subFolderForm.staffId)}
                                onChange={(selected) => setSubFolderForm({...subFolderForm, staffId: selected?.value || null})}
                                isClearable
                                placeholder="Select staff..."
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </Rodal>

                {/* Bulk Sub Folder Modal */}
                <Rodal visible={isBulkSubFolderModalVisible} onClose={closeModal} width={700} height={600}>
                    <h2 className="text-xl font-bold mb-4">Add Multiple Sub Folders</h2>
                    <form onSubmit={handleBulkSubFolderSubmit}>
                        {bulkSubFolderForm.map((form, index) => (
                            <div key={index} className="mb-6 p-4 border rounded-lg relative">
                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => removeSubFolderField(index)}
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                    >
                                        × Remove
                                    </button>
                                )}
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Name*</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border rounded"
                                        value={form.name}
                                        onChange={(e) => handleBulkSubFolderChange(index, 'name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Description</label>
                                    <textarea
                                        className="w-full px-3 py-2 border rounded"
                                        value={form.description}
                                        onChange={(e) => handleBulkSubFolderChange(index, 'description', e.target.value)}
                                        rows="2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Staff</label>
                                    <Select
                                        options={staff}
                                        value={staff.find(s => s.value === form.staffId)}
                                        onChange={(selected) => handleBulkSubFolderChange(index, 'staffId', selected?.value || null)}
                                        isClearable
                                        placeholder="Select staff..."
                                    />
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between mb-4">
                            <button
                                type="button"
                                onClick={addMoreSubFolderField}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                            >
                                + Add Another Subfolder
                            </button>
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                Save All
                            </button>
                        </div>
                    </form>
                </Rodal>
            </div>
        </div>
    );
};

export default DailyControl;