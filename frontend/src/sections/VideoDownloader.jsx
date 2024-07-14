// src/components/VideoDownload.js
import React from 'react';
import axios from 'axios';
import VideoFileIcon from "@mui/icons-material/VideoFile";

const VideoDownload = ({ sermon }) => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`/api/download/${sermon.slug}/`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1]);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading video', error);
        }
    };

    return (
        <div>
          
            <button onClick={handleDownload}><VideoFileIcon />Download Video</button>
        </div>
    );
};

export default VideoDownload;
