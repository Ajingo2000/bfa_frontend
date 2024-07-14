import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import blog from "../assets/images/Donate-meta.jpg";
import john from "../assets/images/2-1256x837.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import FormattedDate from "../constants/formatted-date";
import archive_image from "../assets/images/mbr-1256x707.png";
import SearchBtn from "../constants/SearchBtn";

const ArchiveDivItem = () => {
  return (
    <section className="">
      <div className="lg:grid lg:grid-cols-6 flex flex-col rounded-lg bg-white shadow-2xl border">
        <div className="p-7 col-span-4 flex flex-col gap-4">
          <h1 className="font-bold">Title</h1>

          <div className="flex gap-7  items-center ">
            <img src={john} alt="" className="size-8 rounded-full" />
            <h1 className=" ">Name</h1>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <FaRegCalendarDays />
              <p className="text-slate-600">
                <FormattedDate date={"1/2/23"} />
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <p className="text-gray-400 flex items-center  gap-2">
                {" "}
                <FaClock />
                <ReadTime content={"Helow there and okay"} />{" "}
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <p className="text-slate-600 border p-2 rounded-2xl">tag</p>
              <p className="text-slate-600 border p-2 rounded-2xl">tag</p>
            </div>
          </div>

          <p className="text-slate-600">
            <CleanUp
              input={
                "dkakdkmdklak dkladk hello there my name is ajing and a codeer for a website project"
              }
            />
          </p>
          <a href={`blog-details/`} target="_blank" rel="noopener noreferrer">
            <button className=" border border-teal-500 p-2 w-14 rounded-lg">
              Read
            </button>
          </a>
        </div>
        <div className="col-span-2">
        <img
          src={archive_image}
          alt=""
          className="rounded-tr-lg rounded-br-lg w-full h-full "
        />
        </div>
      </div>
    </section>
  );
};

export default ArchiveDivItem;
