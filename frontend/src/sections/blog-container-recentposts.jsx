import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import background3 from "../assets/images/background16.jpg";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock, FaDownload } from "react-icons/fa6";
import NoDataFoundDiv from "../constants/NoDataFoundDiv";

export default function BlogContainerRecentBlogs() {
  const [popularBlog, setPopularBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}


  useEffect(() => {
    const fetchPopularBlog = async () => {
      try {
        const response = await axios.get(`${apiUrl}trending`);
        setPopularBlog(response.data);
        setError(null); // Clear any previous errors
        console.log("Response:", response);
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", err.response);
          setError(`Error: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response was received
          console.error("Error request:", err.request);
          setError(
            "No response received from the server. Please try again later."
          );
        } else {
          // Something else happened while setting up the request
          console.error("Error message:", err.message);
          setError("An error occurred. Please try again.");
        }
        setPopularBlog([]); // Clear any previous data
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchPopularBlog();
  }, []);

  if (popularBlog.length === 0) {
    return <Skeleton count={3} height={200} />;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : Array.isArray(popularBlog) ? (
        popularBlog.slice(0, 3).map((blog, index) => (
          <div
            className="w-full max-h-auto block justify-center items-center rounded-2xl bg-white box-shadow"
            key={index}
          >
            <img
              src={blog.image || background3}
              alt={blog.title}
              className="rounded-tl-2xl rounded-tr-2xl h-[180px] w-full"
            />
            <div className="p-6 flex flex-col gap-4">
              <h1 className="font-bold">{blog.title}</h1>
              <div className="flex items-center">
                <img
                  src={blog.author.profile_image}
                  alt={blog.author.name}
                  className="rounded-full h-8 w-8"
                />
                <p className="text-gray-400 mx-2">{blog.author.name}</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaClock />
                  <ReadTime content={blog.body} />
                </p>
              </div>
              <p>
                <CleanUp input={blog.body} />
              </p>
              <Link to={`/blog-details/${blog.slug}`}>
                <button className="mt-4 rounded-xl border-2 border-teal-500 p-2">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <NoDataFoundDiv />
      )}
    </>
  );
}
