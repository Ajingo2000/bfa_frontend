import React from "react";
import { Link } from "react-router-dom";
import {BlogContainerSmall} from "../sections";
import BlogContainerTrending from "./blog-container-trending";

export default function RecentPostDiv() {
  return (
    <>
      <div className=" bg-white p-1 gap-2 rounded-lg border border-t-8 border-t-teal-500 shadow-xl ">
        <h1 className="blog-head">RECENT POSTS</h1>

        <div className="d">
        <BlogContainerTrending/>
        
        </div>
        

      </div>
    </>
  );
}
