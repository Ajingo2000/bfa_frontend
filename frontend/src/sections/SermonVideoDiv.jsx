import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const SermonVideoDiv = (props) => {
  return (
    <>
      <section className="">
        <Link to={props.link}>
          <div
            className="flex flex-col w-64 h-72 rounded-xl shadow-xl"
            style={{
              backgroundImage: `url(${props.image || <Skeleton/>})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-3/5"></div>
            <div className="h-2/5 bg-white dark:bg-neutral-900 rounded-bl-xl rounded-br-xl pl-3 pt-2">
              <h1 className="font-extrabold ">{props.title || <Skeleton/>}</h1>
              <p className="">Preached by: {props.preacher || <Skeleton/> }</p>
              <button className="p-1 rounded-xl shadow-xl text-white bg-teal-400 dark:bg-neutral-600">
                {props.category}
              </button>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default SermonVideoDiv;
