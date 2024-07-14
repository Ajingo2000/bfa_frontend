import React from 'react'
import background3 from "../assets/images/background16.jpg";
import { IconName } from "react-icons/fa";
import axios from "axios";

export default function BlogContainerSmall() {
  return (
    <>
        <div className="w-full flex  bg-white max-h-40 my-2 rounded-lg shadow-2xl border ">
              <img src={background3} alt="" className="max-h-40 w-[90px] rounded-tl-lg rounded-bl-lg" />
              <div className="p-4">
                <h1 className="font-bold">
                  Use apples to give your bakes caramel and a moist texture
                </h1>
                <div className="flex gap-2">
                  <p className="text-gray-400 mx-2">Jesse Mcphail </p>
                  {/* <p className="mx-2 border-r-2 border-gray-400"> </p> */}
                  <p className=" ">2 min </p>
                </div>
              </div>
            </div>
    </>
  )
}
