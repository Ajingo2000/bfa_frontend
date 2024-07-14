import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import {
  AboutUs,
  BibleLessons,
  ChurchInfo,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  Navbar2,
  NewsLetter,
  SermonArchive,
  Nav,
  PageHead,
} from "../sections";
import SearchBtn from "../constants/SearchBtn";
import SidebarAdmin from "./SidebarAdmin";
import AdminTemplate from "./AdminTemplate";


const FrontendAdminDashboard = () => {
  return (
    <AdminTemplate pageTitle={"Admin Dashboard"} >
      <main className=" size-full">
        <section className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-red-400  rounded-xl shadow-lg">
              <h1 className="">SERMONS:</h1>
              <p className="">4</p>
          </div>
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-blue-500  rounded-xl shadow-lg">
              <h1 className="">BLOG POSTS:</h1>
              <p className="">4</p>
          </div>
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-teal-500  rounded-xl shadow-lg">
              <h1 className="">MISSIONARY LETTERS:</h1>
              <p className="">4</p>
          </div>
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">NEW BELIEVER DOCUMENTS:</h1>
              <p className="">4</p>
          </div>

          
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">SOUL WINNING DOCUMENTS:</h1>
              <p className="">4</p>
          </div>
          
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">DISCIPLESHIP DOCUMENTS:</h1>
              <p className="">4</p>
          </div>
          
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">DISCIPLER CLASS DOCUMENTS:</h1>
              <p className="">4</p>
          </div>

          
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">BIBLICAL THEOLOGY DOCUMENTS:</h1>
              <p className="">4</p>
          </div>

          
          <div className="w-full min-h-32 text-lg lg:text-xl font-bold flex flex-col justify-center items-center gap-2 lg:gap-6 lg:p-7 p-4 bg-yellow-600  rounded-xl shadow-lg">
              <h1 className="">NEWSLETTER SUBSCRIBERS:</h1>
              <p className="">4</p>
          </div>
        </section>
      </main>
    </AdminTemplate>
  );
};

export default FrontendAdminDashboard;
