import React, { useState, useEffect } from 'react';
import ApiCall, { baseUrl } from "../config/index";
import Sidebar from "./Sidebar";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";

const AdminTeacher = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(1)
    const [teacherList, setTeacherList] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentTeacher, setCurrentTeacher] = useState({
        id: null,
        title: '',
        description: '',
        place: 1,
        faculty: 1,
        mainImage: null,
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchTeachers();
        fetchFaculties();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await ApiCall('/api/v1/teacher', 'GET', null, null, true);
            setTeacherList(response.data);
            console.log(response.data)
        } catch (error) {
            setTeacherList([]);
            console.error("Error fetching teachers:", error);
        }
    };

    const fetchFaculties = async () => {
        try {
            const response = await ApiCall('/api/v1/faculty', 'GET', null, null, true);
            setFacultyList(response.data);
            console.log(response.data)
        } catch (error) {
            setFacultyList([]);
            console.error("Error fetching faculties:", error);
        }
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false);
        setCurrentTeacher({
            id: null,
            title: '',
            description: '',
            place: 1,
            faculty: '',
            mainImage: null,

        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentTeacher({ ...currentTeacher, [name]: value });
    };

    const handleMainImageChange = (e) => {
        setCurrentTeacher({ ...currentTeacher, mainImage: e.target.files[0] });
    };

    const handleAdditionalImagesChange = (e) => {
        setCurrentTeacher({ ...currentTeacher, additionalImages: Array.from(e.target.files) });
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let mainPhotoUuid = null;
            if (currentTeacher.mainImage) {
                mainPhotoUuid = await uploadImage(currentTeacher.mainImage, 'main');
            }
            console.log(currentTeacher)
            const teacherData = {
                title: currentTeacher.title,
                description: currentTeacher.description,
                place: currentTeacher.place,
                faculty: currentTeacher.faculty,
                mainPhoto: mainPhotoUuid,
            };
            console.log(teacherData)

            const method = isEditing ? 'PUT' : 'POST';
            const endpoint = isEditing
                ? `/api/v1/teacher/${currentTeacher.id}`
                : `/api/v1/teacher`;

            // Submit the teacher data
            const response = await ApiCall(endpoint, method, teacherData, null, true);

            if (response.error) {
                console.error("Error saving teacher:", response.data);
            } else {
                fetchTeachers();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving teacher:", error);
        }
    };

    const handleEditTeacher = (teacher) => {
        setCurrentTeacher({
            id: teacher.id,
            title: teacher.title,
            description: teacher.description,
            place: teacher.place,
            faculty: teacher.faculty.id,
            mainImage: null,
        });
        setIsEditing(true);
        openModal();
    };

    const handleDeleteTeacher = async (id) => {
        console.log(id)
        try {
            await ApiCall(`/api/v1/teacher/${id}`, 'DELETE', null, null, false);
            fetchTeachers();
        } catch (error) {
            console.error("Error deleting teacher:", error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="p-10 sm:ml-64">
                <h2 className="text-3xl font-bold  md:text-4xl xl:text-5xl">
                    O'qituvchilar ro'yxati
                </h2>
                <div className="w-full flex justify-end mb-4">
                    <button
                        className="bg-blue-800 p-2 rounded-xl text-white text-sm"
                        onClick={openModal}
                    >
                        O'qituvchi qo'shish
                    </button>
                </div>
                <Zoom className='f-table p-0 '>
                    <div className='ch-table p-0 m-auto'>

                        <div className="tabs text-black">
                            {facultyList.map(item =>
                                <span
                                    className={`tab ${show == item.id ? "hover:bg-gray-200 rounded active" : " hover:bg-gray-200 rounded"}`}
                                    onClick={() =>{

                                        setShow(item.id)
                                    }}> {item.title} </span>
                            )}


                        </div>


                        <div className={ "p-4 pt-0" }>
                            <div style={{display: "flex", flexWrap: "wrap"}} className="p-4 justify-evenly gap-2 flex">
                                {teacherList.filter(teacher => teacher.faculty.id === show).map((item, index) => (
                                    <Zoom key={item.id}>
                                        <div className={"myNewsDiv my-1"}>
                                            <img className={"myImageNews"}
                                                 src={`${baseUrl}/api/v1/file/getFile/${item?.mainPhoto?.id}`}
                                                 alt={item.title}/>
                                            <h3 className="text-overlay">{item.title}</h3>
                                            <div className={"flex justify-center gap-5 p-1"}>
                                                <button onClick={() => handleDeleteTeacher(item.id)}
                                                        className={"btn btn-danger"}>O'chirish
                                                </button>
                                                <button onClick={() => handleEditTeacher(item)}
                                                        className={"btn btn-warning"}>Tahrirlash
                                                </button>
                                            </div>
                                        </div>
                                    </Zoom>
                                ))
                                }
                            </div>


                        </div>


                    </div>
                </Zoom>

            </div>

            <Rodal
                width={700}
                height={600}
                visible={modalIsOpen}
                onClose={closeModal}
            >
                <h2 className="text-2xl mb-4">O'qituvchi qo'shish</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Sarlavha</label>
                        <input
                            type="text"
                            name="title"
                            value={currentTeacher.title}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tavsif</label>
                        <textarea
                            name="description"
                            value={currentTeacher.description}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Joylashuv (place)</label>
                        <input
                            type="number"
                            name="place"
                            value={currentTeacher.place}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Fakultet</label>
                        <select
                            name="faculty"
                            value={currentTeacher.faculty}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">Fakultetni tanlang</option>
                            {facultyList.map(faculty => (
                                <option key={faculty.id} value={faculty.id}>
                                    {faculty.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Asosiy rasm</label>
                        <input
                            type="file"
                            onChange={handleMainImageChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Saqlash
                        </button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
};

export default AdminTeacher;
