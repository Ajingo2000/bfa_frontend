import React from 'react'
import background3 from "../assets/images/background16.jpg";
import jesse from "../assets/images/img-2534-1256x837.png";

export default function BlogContainer() {
  return (
    <>
        <div className="w-full max-h-auto block justify-center items-center rounded-lg shadow shadow-white-500/50 bg-white border">
              <img
                src={background3}
                alt=""
                className="rounded-lg h-[180px] w-full"
              />
              <div className="p-6 flex flex-col gap-4">
                <h1 className="font-bold">
                  The Gospel according to Jesse Mcpaul from the Bible
                </h1>
                <div className="grid grid-cols-1  lg:flex ">
                  <img src={jesse} alt="" className="rounded-full h-8 w-8" />
                  <p className="text-gray-400 mx-2">
                    Jesse Mcphail
                  </p>

                  <p className="text-gray-400">
                    2 min to read{" "}
                  </p>
                  {/* <p className="text-gray-400 ml-2 border-r-2 border-gray-400">
                    14 Jan 2024{" "}
                  </p>
                  <div className="text-gray-400 gap-2 ml-2">
                    <button className="border p-1 rounded-xl">Salvation</button>
                    <button className="border p-1 rounded-xl">Salvation</button>
                  </div> */}

                </div>
                <p className="">
                  According to the the bible, going to heaven is not as heard as
                  many people in the world make it to seem, the Bible tells us
                  specifically...
                </p>
                <button className="mt-4 rounded-xl border-2 border-teal-500 p-2 ">
                  Read more
                </button>
              </div>
            </div>
    </>
  )
}

