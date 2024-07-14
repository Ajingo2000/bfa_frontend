import React, { useState, useEffect } from "react";
import image1 from "../assets/images/features1.jpg";
import image2 from "../assets/images/features2.jpg";
import image3 from "../assets/images/features3.jpg";

const VideoDiv = () => {
  return (
    <>
        <section className="">
            <div className="grid grid-cols-1 size-64 rounded-xl shadow-xl"  style={{backgroundImage: `url(${image1})`}}>
                <div className=""></div>
                <div className="bg-white rounded-tr-[50%] rounded-bl-xl rounded-br-xl p-4" >
                    <h1 className="font-extrabold text-center"></h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default VideoDiv