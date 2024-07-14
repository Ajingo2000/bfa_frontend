import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  AboutUs,
  BibleLessons,
  ChurchInfo,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  NavBar,
  NewsLetter,
  SermonArchive,
  Navbar2,
  PageHead,
  SearchResultDiv,
} from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";
import SermonsTabs from "./sermons-tab";
import SermonsDownloadDiv from "./sermons-download-div";
import SermonsAudioPlayer from "./SermonsAudioPlayer";
import axios from "axios";
import SermonsVideoContent from "../constants/SermonsVideoContent";
import sermonImage from "../assets/images/sermon-preaching.jpg";
import RefreshIcon from "@mui/icons-material/Refresh";
import TuneIcon from "@mui/icons-material/Tune";
import ScaleLoader from "react-spinners/ScaleLoader";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


const SermonsDetailsExpository = () => {
  const [sermonsPlaylist, setSermonsPlaylist] = useState({});
  const [sermons, setSermons] = useState([]);
  const [activeSermon, setActiveSermon] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const slug = useParams().slug;
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  
  

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const fetchSermonPlaylist = async () => {
      try {
        const response = await axios.get(`${apiUrl}bible-book-details/${slug}`);
        setSermonsPlaylist(response.data);
        setSermons(response.data.sermons);
      } catch (error) {
        console.error("Error fetching Sermons:", error);
      }
    };

    fetchSermonPlaylist();
  }, [slug]);

  const selectedSermon = sermons[activeSermon];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Sermon Expository Details | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        {/* <PageHead name="Sermon Playlist Details" /> */}
        <main className={`${darkMode && "dark"} `}>
          {/* SECTION FOR THE PAGE CODE  */}

          <section className="bg-white dark:bg-neutral-900 dark:text-white w-full h-full">
            <section className="p-3 border-b grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              <div className="">
                <div className="flex p-3">
                  <h1 className="">
                    Bible Book {` > ${sermonsPlaylist.name}`}{" "}
                  </h1>
                  <h1 className="">{``}</h1>
                </div>
                <div className="flex p-3 items-center">
                  <img
                    src={sermonsPlaylist.thumbnail}
                    alt=""
                    className="w-40 h-20 "
                  />

                  <div className="flex flex-col p-3">
                    <h1 className="font-bold text-[20px]">
                      {` Expository Sermons from the Book of ${sermonsPlaylist.name}.`}
                    </h1>
                    <p className="">
                      Visit our youtube channel to see more content like this,
                      please.
                    </p>
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
            <section className="size-full grid grid-cols-1 lg:grid lg:grid-cols-4 ">
              <section className="h-full border-r-1 shadow-xl ">
                <div className="hidden lg:flex lg:flex-col">
                  <div className="h-full w-full p-3 border-b border-r dark:border-neutral-600">
                    <p className="w-full h-full ">Select and Play </p>
                  </div>
                  <ul className="h-full w-full ">
                    {sermons.map((sermon, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center gap-2 p-2 border-b dark:border-neutral-600 w-full"
                        onClick={() => setActiveSermon(index)}
                      >
                        <div className="flex">
                          <div className="size-6">
                            <p className="size-full border-2 dark:border-neutral-600 shadow-md rounded-md flex justify-center items-center">
                              {index + 1}
                            </p>
                          </div>
                          <p className="ml-3">{sermon.title}</p>
                        </div>
                        {activeSermon === index ? (
                          <input
                            type="radio"
                            name="item"
                            className="size-6 accent-teal-600"
                            checked
                          />
                        ) : (
                          <input type="radio" name="item" className="size-6" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* MOBILE RESPONSIVE DROPDOWN ! */}
                <div className="lg:hidden mx-2 mt-4 p-4 flex flex-col gap-4 justify-center items-center bg-white dark:bg-neutral-900 rounded-md shadow-xl ">
                  <h1 className="font-bold text-xl">SELECT TO VIEW SERMON </h1>
                  <div className="flex rounded-lg">
                    {" "}
                    <p className=" rounded-l-lg p-2 bg-teal-400 text-white">
                      SELECT:
                    </p>
                    <select
                      name=""
                      id=""
                      className="rounded-r-lg border-1 bg-gray-200 dark:bg-neutral-600 text-black dark:text-white outline-none"
                      onChange={(e) => setActiveSermon(e.target.value)}
                    >
                      {sermons.map((sermon, index) => (
                        <option
                          value={index}
                          className="outline-none text-black dark:text-white flex gap-4s"
                        >
                          <p className="mr-2">{index + 1}.</p>
                          <p>{sermon.title}</p>
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
              <section className="col-span-3 size-full">
                {selectedSermon && (
                  <div className="size-full px-8 bg-gray-200 dark:bg-neutral-600 flex flex-wrap justify-center items-center">
                    <SermonsTabs
                      thumbnail={selectedSermon.thumbnail}
                      sermon_audio={selectedSermon.sermon_audio}
                      sermon_url={selectedSermon.embed_code}
                    />
                    <SermonsDownloadDiv
                      index={activeSermon + 1}
                      length={sermons.length}
                      title={selectedSermon.title}
                      bible_text={selectedSermon.bible_text}
                      preached_by={selectedSermon.preached_by}
                      preaching_date={selectedSermon.preaching_date}
                      sermon_category={selectedSermon.sermon_category}
                      sermon_audio={selectedSermon.sermon_audio}
                    />
                  </div>
                )}
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

export default SermonsDetailsExpository;
