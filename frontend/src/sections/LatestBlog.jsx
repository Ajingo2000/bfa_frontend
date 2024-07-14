import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import BlogContainerRecentBlogs from "./blog-container-recentposts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LatestBlog = () => {


  return (
    <div className="p-5">
      <h1 className="font-extrabold text-[50px] text-center m-5">
        Our Latest Blog posts!
      </h1>
      <p className="text-center text-[20px] m-5">
        To see more posts or subscribe to the newsletter <a href="#newsletter">below</a> , click on the blogposts
        tab to view them. 
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:justify-center  gap-6 ">
        <BlogContainerRecentBlogs/>
        
      </div>
    </div>
  );
};

export default LatestBlog;
