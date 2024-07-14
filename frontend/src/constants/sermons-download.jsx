import React from "react";
import { FaClock, FaDownload } from "react-icons/fa6";

const SermonsDownload = (props) => {
  const handleDownload = () => {
    // Logic to handle the download action
    // You can fetch the file from an API or use any other method to obtain the file URL
    // For this example, let's assume 'fileUrl' is the URL of the file to be downloaded
    const fileUrl = `${props.download_url}`;
    window.location.href = fileUrl; // Initiates the download of the file
  };
  return (
    <div className="flex items-center justify-center gap-2 cursor-pointer font-bold bg-gray-100 rounded-lg p-2" >
      <a href={props.download_url}  rel="noopener noreferrer" download={props.download_url}>Download</a>
      <FaDownload />
    </div>
  );
};

export default SermonsDownload;
