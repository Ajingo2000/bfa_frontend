import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link}  from 'react-router-dom';
import background3 from "../assets/images/background16.jpg";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function BlogContainerPopular() {
  const [popularBlog, setPopularBlog] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 


  useEffect(() => {
    const fetchPopularBlog = async () => {
      try {
        const res = await axios.get(`${apiUrl}popular`);
        setPopularBlog(res.data);
        console.log(popularBlog);
      } catch (err) {}
    };

    
    fetchPopularBlog();
  }, []);
  return (
    <>
      {popularBlog.slice(0, 1).map((blog, index) => (
        <div className="w-full max-h-auto block justify-center items-center rounded-lg shadow shadow-white-500/50 bg-white border" key={index}>
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-tl-lg rounded-tr-lg h-[180px] w-full"
          />
          <div className="p-6 flex flex-col gap-4">
            <h1 className="font-bold">
            {blog.title}
            </h1>
            <div className="grid grid-cols-1  lg:flex items-center ">
              <img
                src={blog.author.profile_image}
                alt=""
                className="rounded-full h-8 w-8"
              />
              <p className="text-gray-400 mx-2 jus">{blog.author.name}</p>

              <p className="text-gray-400 flex items-center  gap-2"> <FaClock /><ReadTime content={blog.body}/> </p>
              {/* <p className="text-gray-400 ml-2 border-r-2 border-gray-400">
                    14 Jan 2024{" "}
                  </p>
                  <div className="text-gray-400 gap-2 ml-2">
                    <button className="border p-1 rounded-xl">Salvation</button>
                    <button className="border p-1 rounded-xl">Salvation</button>
                  </div> */}
            </div>
            <p className=""><CleanUp input={blog.body}/></p>
            <Link to={`/blog-details/${blog.slug}`}>
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