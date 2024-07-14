import React from "react";
import background3 from "../assets/images/background16.jpg";
import { IconName } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}


export default function BlogContainerTrending() {
  const [trendingBlog, setTrendingBlog] = useState([]);

  useEffect(() => {
    const fetchTrendingBlog = async () => {
      try {
        const res = await axios.get(`${apiUrl}trending`);
        setTrendingBlog(res.data);
        console.log(trendingBlog);
      } catch (err) {}
    };

    fetchTrendingBlog();
  }, []);

  return (
    <>
      {trendingBlog.slice(0,3).map((blog, index) => (
        <div className="w-full flex  bg-white max-h-40 my-2 rounded-lg shadow-2xl border h-auto" key={index}>
          <img
            src={blog.image}
            alt=""
            className="max-h-40 w-[90px] rounded-tl-lg rounded-bl-lg"
          />
          <div className="p-2 lg:p-4 text-md text-black">
            <h1 className="font-bold">{blog.title}</h1>
            <div className="flex gap-2 py-2">
              <p className=" ">{blog.author.name}</p>
              {/* <p className="mx-2 border-r-2 border-gray-400"> </p> */}
              <p className=" flex items-center  gap-2">
                {" "}
                <FaClock />
                <ReadTime content={blog.body} />{" "}
              </p>
            </div>
            <a href={`/blog-details/${blog.slug}`}>
              <button className="rounded-xl border-2 border-teal-500 p-1">
                Read Now
              </button>
            </a>
          </div>
          
        </div>
      ))}
    </>
  );
}
