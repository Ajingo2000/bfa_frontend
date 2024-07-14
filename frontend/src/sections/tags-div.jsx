import React from 'react'
import { Link } from "react-router-dom";

export default function TagsDiv({props}) {
  return (
    <>
    <div className="flex flex-col items-center bg-white p-4  rounded-lg border-t-8 border-teal-500 shadow-xl ">
     <h1 className="blog-head">Tags</h1>

     <div className="grid grid-cols-2 gap-2 p-2">
      {props.blog.tags && (
        props.blog.tags.map(tag => (
        
          <Link to={tag.href}><button className="hover:bg-teal-500 hover:text-white bg-white border-2 border-teal-500 text-teal-500 rounded-xl p-3">
          {tag.name}
        </button></Link>
        ))
      )}
     </div>
    </div>
    </>
  )
}
