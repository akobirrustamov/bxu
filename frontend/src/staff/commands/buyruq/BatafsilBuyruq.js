import React, { useEffect, useState } from 'react'
// import Sidebar from "./../Sidebar";
import ApiCall from "../../../config/index";

function BatafsilBuyruq() {


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {

        setSelectedFile(event.target.files[0]);

    }

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await ApiCall('/api/v1/app/staff/buyruq', 'POST', formData, null, false);
            console.log(response.data);
            alert("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file: " + error.message);
        }
    }


    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    )
}

export default BatafsilBuyruq
