import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Footers,
  SermonArchive,
  Navbar2,
  PageHead,
  SearchResultDiv,
} from "../sections";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import SermonsTabs from "./sermons-tab";
import SermonsAudioPlayer from "./SermonsAudioPlayer";
import {
  FaClock,
  FaDownload,
  FaFilter,
  FaBookBible,
  FaSort,
  FaCalendar,
  FaLanguage,
  FaHeading,
  FaPersonPraying,
  FaPerson,
  FaChurch,
  FaAngleDown,
} from "react-icons/fa6";
import { FaFileDownload, FaSortAmountDown } from "react-icons/fa";
import axios from "axios";
import FormattedDate from "../constants/formatted-date";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import ScaleLoader from "react-spinners/ScaleLoader";
import TuneIcon from "@mui/icons-material/Tune";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import VideoDownload from "../sections/VideoDownloader";


const SermonsDetails = () => {
  const [activeInput, setActiveInput] = useState(1);
  const [sermonDetails, setSermonDetails] = useState({});
  const slug = useParams().slug;
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    // Fetch sermon details
    const fetchSermonDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}sermon-details/${slug}`);
        setSermonDetails(res.data);
      } catch (err) {
        console.error("Error fetching sermon details:", err);
      }
    };

    fetchSermonDetails();
  }, [slug]); // Call useEffect whenever `slug` changes

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${sermonDetails.title} | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        {/* <PageHead name="Sermon Details" /> */}
        <main className={`${darkMode && "dark"} `}>
          <section className="bg-white dark:bg-neutral-900 text-black dark:text-white w-full h-full ">
            <section className="p-3 border-b grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="">
              <div className="flex p-3 gap-3">
                <h1 className="">Sermon Video </h1>
                <h1 className="flex gap-2">
                  {" "}
                  <span className="text-teal-600 ">{">"}</span>{" "}
                  <span>{sermonDetails.title}</span>{" "}
                </h1>
              </div>
              <div className="flex p-3 items-center">
                <img
                  src={sermonDetails.thumbnail}
                  alt=""
                  className="w-40 h-20 "
                />

                <div className="flex flex-col p-3">
                  <h1 className="font-bold text-[20px]">
                    {sermonDetails.title}
                  </h1>
                  <p className="">Preached by {sermonDetails.preached_by} </p>
                </div>
              </div>
              </div>

              <div className="lg:flex lg:flex-col lg:gap-4  lg:items-center lg:justify-center">
                {/* TOGGLE MODES  */}
                <h1 className="hidden lg:block">TOGGLE LIGHT OR DARK MODE</h1>
                <div className="flex ">
                  <div className="flex bg-gray-300 text-black dark:bg-neutral-600 border-2 border-gray-200 dark:border-neutral-600 dark:text-black rounded-xl">
                    <button
                      className={`p-2  text-yellow-500 dark:text-yellow-300 rounded-l-xl ${
                        darkMode
                          ? "px-3 dark:bg-neutral-900"
                          : "px-7 bg-gray-300 rounded-r-xl"
                      }`}
                      onClick={toggleDarkMode}
                    >
                      <LightModeIcon />{" "}
                    </button>
                    <button
                      className={` text-black dark:text-white ${
                        darkMode
                          ? "px-7 dark:bg-neutral-600 rounded-l-xl rounded"
                          : "px-3 bg-white rounded-r-xl"
                      }`}
                      onClick={toggleDarkMode}
                    >
                      <DarkModeIcon />
                    </button>
                  </div>
                </div>
              </div>

            </section>
            <section className="size-full grid grid-cols-1 lg:grid lg:grid-cols-4 bg-gray-200 dark:bg-neutral-600">
              <section className="h-full border-r-1 order-last lg:order-first p-8">
                <div className=" flex lg:flex flex-col bg-white dark:bg-neutral-900 rounded-xl border dark:border-neutral-900 shadow-lg">
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <p className="w-full h-full font-bold ">
                      {sermonDetails.title}
                    </p>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaBookBible /> Bible Text
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">
                          {sermonDetails.bible_text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600 dark:bg-neutral-900">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaPerson /> Preacher:
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">
                          {sermonDetails.preached_by}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <TuneIcon /> Category
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">
                          {sermonDetails.sermon_category && (sermonDetails.sermon_category.title)}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaLanguage /> Language
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">English</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaCalendar /> Date
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">
                          <FormattedDate date={sermonDetails.preaching_date} />{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaChurch /> Location
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">
                          Bible Baptist church
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaClock /> Duration
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">1:00</p>
                      </div>
                    </div>
                  </div> */}
                  <div className=" p-2 ">
                    <a
                      href={sermonDetails.sermon_audio}
                      rel="noopener noreferrer"
                      download={sermonDetails.sermon_audio}
                    >
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center justify-center rounded-xl gap-2 p-1 h-full font-bold">
                        <AudioFileIcon /> Download Audio
                      </div>
                    </a>
                  </div>
                  {/* <div className=" p-2 border-b dark:border-neutral-600">
                    <a
                      href={sermonDetails.sermon_audio}
                      rel="noopener noreferrer"
                      download={sermonDetails.sermon_audio}
                    >
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center justify-center rounded-xl gap-2 p-1 h-full font-bold">
                        <VideoDownload slug={sermonDetails.slug && console.log(sermonDetails.slug)} />
                      </div>
                    </a>
                  </div> */}
                </div>
              </section>
              <section className="col-span-3 order-first lg:order-last size-full">
                <div className="w-full px-8 bg-gray-200 dark:bg-neutral-600 flex flex-col justify-center items-center ">
                  <SermonsTabs
                    thumbnail={sermonDetails.thumbnail}
                    sermon_audio={sermonDetails.sermon_audio}
                    sermon_url={sermonDetails.embed_code}
                  />
                </div>
              </section>
            </section>
          </section>
        </main>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
};

export default SermonsDetails;
