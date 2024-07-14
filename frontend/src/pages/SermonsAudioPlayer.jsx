import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import email_bg from "../assets/images/email-bg.jpg";
import { FaClock, FaAnglesRight, FaBars, FaDownload } from "react-icons/fa6";
import audioBg from "../assets/images/background18.jpg"
import "../index.css";

const SermonsAudioPlayer = (props) => {
  const [playSpinner, setPlaySpinner] = useState(false)

  const togglePlaySpinner = () =>{
    setPlaySpinner(!playSpinner);
  }


  return (
    <>
      <section
        className="size-full p-5"
        style={{ backgroundImage: `url(${props.thumbnail})`, backgroundSize: "cover",
        backgroundPosition: "center",
         }}
      >
        <div className="size-full bg-gradient-to-r from-gray-200 to-blue-200 rounded-t-lg" style={{ backgroundImage: `url(${audioBg})`, backgroundSize: "cover",
        backgroundPosition: "center",
         }}>
          <div className="flex flex-col">
          

            <div className="size-full p-2">
              <div className="flex size-full  items-center justify-center ">
                <img
                  src={props.thumbnail}
                  alt=""
                  className={playSpinner === false ? "size-64  rounded-full bg-white border-8 p-2  border-teal-600 ": "size-64  rounded-full bg-white border-8 p-2  border-teal-600 animate-spin custom-spin"} id="customSpinner"
                />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-200 to-blue-200">
            <AudioPlayer
              autoPlay={false}
              src={props.audio_url}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SermonsAudioPlayer;
