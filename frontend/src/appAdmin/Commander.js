import React, { useState, useEffect } from "react";
import ApiCall from "../config/index"; // Assume this is your API call utility
import Sidebar from "./Sidebar";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Select from "react-select"; // Import the react-select component

const Commander = () => {
    const [ranks, setRanks] = useState([]);
    const [commanders, setCommanders] = useState([]);
    const [selectedRank, setSelectedRank] = useState(null);
    const [newCommander, setNewCommander] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [newRanks, setNewRanks] = useState([]);

    useEffect(() => {
        fetchRanks();
    }, []);

    const fetchRanks = async () => {
        try {
            const response = await ApiCall("/api/v1/app/rank", "GET", null, null, true);
            setRanks(response.data);
        } catch (error) {
            console.error("Error fetching ranks:", error);
        }
    };

    const fetchCommanders = async (rankId) => {
        try {
            const response = await ApiCall(`/api/v1/app/commander/${rankId}`, "GET", null, null, true);
            setCommanders(response.data);
        } catch (error) {
            console.error("Error fetching commanders:", error);
            setCommanders([]);
        }
    };

    const handleRankChange = (selectedOption) => {
        if (selectedOption) {
            setSelectedRank(selectedOption);
            fetchCommanders(selectedOption.value);
        } else {
            setSelectedRank(null);
            setCommanders([]);
        }
    };
    const handleAddCommander = async () => {
        if (!newRanks) {
            alert("Please select a rank.");
            return;
        }
        const rankId = newRanks.value;

        if(commanders.length==0 ){
            const rankIds=[rankId]

            const response = await ApiCall(
                `/api/v1/app/commander`,
                "POST",
                {rankId:selectedRank.value, rankIds:rankIds }
            );
            fetchCommanders(selectedRank.value); // Refresh the commanders list
            setNewRanks(null); // Clear the selection
            setShowModal(false);
        }else{
            try {
                // Get the selected rank ID
                const payload = { rankId }; // Send rankId as part of an object

                const response = await ApiCall(
                    `/api/v1/app/commander/rank/${commanders[0]?.id}/${rankId}`,
                    "PUT"
                );
                fetchCommanders(selectedRank.value); // Refresh the commanders list
                setNewRanks(null); // Clear the selection
                setShowModal(false); // Close the modal
            } catch (error) {
                console.error("Error adding commander rank:", error);
            }
        }

    };

    const handleDeleteCommander = async (rankId) => {
        try {
            await ApiCall(`/api/v1/app/commander/${commanders[0]?.id}/${rankId}`, "DELETE", null, null, true);
            fetchCommanders(selectedRank.value);
        } catch (error) {
            console.error("Error deleting commander:", error);
        }
    };

    // Filter out ranks already associated with the commander
    const availableRanks = ranks.filter(
        (rank) =>
            !commanders[0]?.ranks.some((assignedRank) => assignedRank.id === rank.id) &&
            rank.id !== commanders[0]?.rank.id && rank.id!==1
    );


    return (
        <div>
            <Sidebar />
            <div className="p-10 pb-1 sm:ml-64 flex flex-wrap items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl xl:text-4xl">Sozlama</h2>
            </div>

            <div className="p-10 pt-0 sm:ml-64">
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-wrap">
                        <label htmlFor="rankSelect" className="mr-2">
                            Select Rank:
                        </label>
                        <Select
                            id="rankSelect"
                            value={selectedRank}
                            onChange={handleRankChange}
                            options={ranks.map((rank) => ({
                                value: rank.id,
                                label: rank.name,
                            }))}
                            placeholder="Select Rank"
                            isClearable
                            className="w-[400px]"
                        />
                    </div>

                    {selectedRank && (
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            Add Commander
                        </button>
                    )}
                </div>
                <hr />
                {selectedRank && (
                    <>
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-1 py-2">T/R</th>
                                <th className="border px-1 py-2">Name</th>
                                <th className="border px-1 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {commanders[0]?.ranks?.map((commander, index) => (
                                <tr key={commander.id} className="hover:bg-gray-100">
                                    <td className="border px-1">{index + 1}</td>
                                    <td className="border px-1">{commander.name}</td>
                                    <td className="border px-1">
                                        <button
                                            onClick={() => handleDeleteCommander(commander.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>
                )}

                <Rodal visible={showModal} onClose={() => setShowModal(false)}>
                    <div>
                        <h2 className="text-xl mb-4">Add New Commander</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Ranks</label>
                            <Select
                                name="rankId"
                                value={newRanks} // `newRanks` will now hold a single selected rank object
                                onChange={(selectedOption) => setNewRanks(selectedOption)} // Set the selected option directly
                                options={availableRanks.map((rank) => ({
                                    value: rank.id,
                                    label: rank.name,
                                }))}
                                placeholder="Select a Rank"
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />

                        </div>
                        <button
                            onClick={handleAddCommander}
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            Add Commander
                        </button>
                    </div>
                </Rodal>
            </div>
        </div>
    );
};

export default Commander;

