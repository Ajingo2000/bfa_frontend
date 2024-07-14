import React from "react";
import blog from "../assets/images/Donate-meta.jpg";
import john from "../assets/images/2-1256x837.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function SearchResultDiv() {
  return (
    <>
      <div className="flex flex-wrap rounded-lg  bg-white shadow-2xl border">
        <img src={blog} alt="" className="rounded-tl-lg rounded-bl-lg lg:w-full w-[1/3]  max-h-60" />
        <div className="p-7 flex flex-col gap-4">
          <h1 className="font-bold">Beyond Good and Evil</h1>
          <div className="flex gap-7 justify-center items-center ">
            <img src={john} alt="" className="size-8 rounded-full" />
            <h1 className=" ">John McPaul</h1>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <FaRegCalendarDays />
              <p className="text-slate-600">July 24, 2024</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <FaClock />
              <p className="text-slate-600">2:00</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-slate-300">
              <p className="text-slate-600 border p-2 rounded-2xl">tag</p>
              <p className="text-slate-600 border p-2 rounded-2xl">tag</p>

            </div>
          </div>

          <p className="text-slate-600">This is about a book called beyond good and evil by Fredrick Nietzche</p>
          <button className=" border border-teal-500 p-2 w-14 rounded-lg">
            Read
          </button>
        </div>
      </div>
    </>
  );
}
