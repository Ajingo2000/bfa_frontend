import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CategoriesDiv() {
  const [blogCategory, setBlogCategory] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 
  
  useEffect(() => {
    const fetchBlogCategory = async () => {
      const response = await axios.get(`${apiUrl}blog-category`);
      setBlogCategory(response.data);
    };
    fetchBlogCategory();
  }, []);
  return (
    <>
      <div className=" bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500 shadow-xl ">
        <h1 className="blog-head">CATEGORIES</h1>
        <div className="p-2 grid grid-cols-1 gap-2">
          {blogCategory.map((category, index) => (
            <>
              <Link to={`/blog-search?search=${category.title}`} key={index}>
                <div className="flex justify-between">
                  <h1 className="text-gray-400 pl-2"> #{category.title}</h1>
                  <p className=" text-gray-500">{`[${category.posts.length}]`}</p>
                </div>
              </Link>
              <hr className=" w-full" />
              
            </>
          ))}
        </div>
      </div>
    </>
  );
}
