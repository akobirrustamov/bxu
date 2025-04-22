import React, { useEffect, useState } from 'react';
import axios from 'axios';
const GoogleDocumentViewer = () => {
    const [documentContent, setDocumentContent] = useState('');
    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/drive/v3/files/DOCUMENT_ID/export?mimeType=text/html',
                    {
                        headers: {
                            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
                        },
                    }
                );
                setDocumentContent(response.data);
            } catch (error) {
                console.error('Error fetching Google Document:', error);
            }
        };
        fetchDocument();
    }, []);
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: documentContent }} />
        </div>
    );
};
export default GoogleDocumentViewer;