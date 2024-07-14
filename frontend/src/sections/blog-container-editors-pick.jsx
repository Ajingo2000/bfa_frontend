import React from "react";
import { useEffect, useState } from "react";
import {Link}  from 'react-router-dom';
import axios from "axios";
import background3 from "../assets/images/background16.jpg";
import jesse from "../assets/images/img-2534-1256x837.png";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function BlogContainerEditorsPick() {
  const [editorsPick, setEditorsPick] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [data, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 


  useEffect(() => {
    const fetchEditorsPick = async () => {
      try {
        const res = await axios.get(`${apiUrl}editorsPick`);
        setEditorsPick(res.data);
        console.log(editorsPick);
      } catch (err) {}
    };
    // setTimeout(() => {
    //   setData();
    //   setIsLoading(false);
    // }, 2000); // Simulating a 2-second delay
    fetchEditorsPick()
  }, []);
  return (
    <>
      {editorsPick.map((pick, index) => (
        <div className="w-full max-h-auto block justify-center items-center rounded-lg shadow shadow-white-500/50 bg-white border">
          <img
            src={pick.image}
            alt={pick.title}
            className="rounded-tl-lg rounded-tr-lg h-[180px] w-full"
          />
          <div className="p-6 flex flex-col gap-4">
            <h1 className="font-bold">
            {pick.title}
            </h1>
            <div className="flex items-center ">
              <div className="flex items-center">
              <img
                src={pick.author.profile_image}
                alt=""
                className="rounded-full h-8 w-8"
              />
              <p className="text-gray-400 mx-2 jus">{pick.author.name}</p>
              </div>

              <p className="text-gray-400 flex items-center  gap-2"> <FaClock /><ReadTime content={pick.body}/> </p>
              {/* <p className="text-gray-400 ml-2 border-r-2 border-gray-400">
                    14 Jan 2024{" "}
                  </p>
                  <div className="text-gray-400 gap-2 ml-2">
                    <button className="border p-1 rounded-xl">Salvation</button>
                    <button className="border p-1 rounded-xl">Salvation</button>
                  </div> */}
            </div>
            <p className=""><CleanUp input={pick.body}/></p>
            <Link to={`/blog-details/${pick.slug}`}>
              <button className="mt-4 rounded-xl border-2 border-teal-500 p-2 ">
                Read more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
