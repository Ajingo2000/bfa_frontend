import React, { useState, useEffect } from "react";
import image12 from "../assets/images/mbr-1920x1280.jpg";
import Facebook from "@mui/icons-material/Facebook";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import { FaFileDownload } from "react-icons/fa";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";

const SermonsHomeDiv = (props) => {
  const customId = "copy-notification-1"
  const notify = () => toast.success("Copied successfully!");    


  return (
    <>
      <section className="rounded-xl bg-white box-shadow">
        <div className="w-full rounded-tl-xl rounded-tr-xl ">
          <img
            src={props.image}
            alt=""
            className="w-full h-64 rounded-tl-xl rounded-tr-xl"
          />
        </div>
        <div className="flex flex-col p-4 gap-4">
          <h1 className="font-bold uppercase">{props.title}</h1>
          <p className="flex">
            <h1 className="font-bold">Preacher</h1>
            {props.preacher}
          </p>
          <p className="flex">
            <h1 className="font-bold">Category:</h1>
            {props.category}
          </p>

          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center justify-center p-2">
              <a
                href={`/sermon-details/${props.slug}`}
                className="flex items-center justify-center p-2 gap-4"
              >
                <p className=" rounded-lg p-2 shadow-md text-white bg-teal-400  cursor-pointer">
                  View Now
                </p>
                <div className="size-8 rounded-full shadow-md text-white  bg-teal-400 flex items-center justify-center">
                  <PlayCircleOutlineIcon />
                </div>
              </a>
            </div>
            <div className="size-8 rounded-full  bg-teal-400 flex items-center justify-center shadow-md text-white">
              <FaFileDownload />
            </div>
            <div
              className="size-8 rounded-full shadow-md text-white bg-teal-400 flex items-center justify-center"
              onClick={notify}
            >
              <InsertLinkIcon />
            </div>
             <NotificationHandler customId={customId}/>{/* notification */} 
          </div>
        </div>
      </section>
    </>
  );
};

export default SermonsHomeDiv;
