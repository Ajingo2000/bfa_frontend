import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import background4 from "../assets/images/background18.jpg";
import jesse from "../assets/images/img-2534-1256x837.png";
import john from "../assets/images/2-1256x837.png";
import CleanUp from "../constants/cleanup";
import AuthorCleanUp from "../constants/AuthorCleanup";



export default function AuthorsDiv() {
  const [blogAuthor, setBlogAuthor] = useState([]);
  const author_id = useParams().name;
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 
  


  useEffect(() => {
    // Fetch Author details
    const fetchAuthorDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}blog-author`);
        setBlogAuthor(res.data);
      } catch (err) {
        console.error("Error fetching Author details:", err);
      }
    };

    fetchAuthorDetails();
  }, []); // Call useEffect whenever `slug` changes

  return (
    <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500 shadow-xl ">
      <h1 className="text-bold text-2xl text-center">AUTHORS</h1>
      <div className="w-full">
      {blogAuthor.map((author, index) => (
        <a href={`blog-author-details/${author.name}`} key={index}>
        <div className="flex w-full p-2">
            <img src={author.profile_image} alt={author.name} className="rounded-full size-20" />
            <div className="block pl-3">
                <h1 className="font-bold text-lg">{author.name}</h1>
            <p className="text-gray-80"><AuthorCleanUp maxLength={50} input={author.description}/></p>
            </div>
            
        </div>
        <hr className="w-full border" />
        </a>
      ))}
      </div>
    </div>
  );
}
