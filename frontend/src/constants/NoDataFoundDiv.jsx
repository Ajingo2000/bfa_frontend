import React from "react";
import noData from "../assets/images/no-data.jpg";
import no_data from "../assets/images/no data.jpg";

const NoDataFoundDiv = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center rounded-xl border-none border-white dark:border-neutral-900">
        <img src={no_data} alt="" className="size-64 rounded-t-xl" />
        <p className="text-center w-64 font-bold text-xl p-4 bg-white dark:bg-neutral-900 rounded-b-xl shadow">
          NO DATA FOUND !
        </p>
      </div>
    </>
  );
};

export default NoDataFoundDiv;
