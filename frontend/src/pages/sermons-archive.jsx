import React, { useState, useEffect } from "react";
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
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackToTopButton from "../constants/back-to-top-btn";
import ScaleLoader from "react-spinners/ScaleLoader";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SermonsTabs from "./sermons-tab";
import SermonsAudioPlayer from "./SermonsAudioPlayer";
import archive_image from "../assets/images/mbr-1256x707.png";
import TuneIcon from "@mui/icons-material/Tune";
import SearchBtn from "../constants/SearchBtn";
import ArchivePlaylistDiv from "../sections/archive-playlist-div";
import ArchiveDivItem from "../sections/archive-div-item";
import axios from "axios";
import FolderPlaylistDivs from "../sections/VideoDiv";
import SermonsSearchBtn from "../constants/SermonsSearchBtn";
import ToggleLightAndDarkMode from "../constants/ToggleLightAndDarkMode";
import NoDataFoundDiv from "../constants/NoDataFoundDiv";
import SermonsVideoContent from "../constants/SermonsVideoContent";
import sermonImage2 from "../assets/images/sermon-preaching.jpg";
import sermonImage from "../assets/images/male-formal-outfit-preaching-holy-bible-from-tribune-altar-church.jpg"

import RefreshIcon from "@mui/icons-material/Refresh";

export default function SermonsArchive() {
  const [activeCategory, setActiveCategory] = useState(0); // DEFAULT IS 0 AS WELL AS ALSO FOR SEARCHING
  const [sorterActive, setSorterActive] = useState(0);
  const [sermon, setSermon] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [bibleBook, setBibleBook] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  


  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    // Fetch search results when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    if (searchQuery) {
      fetchSearchResults(searchQuery);
      setSearchTerm(searchQuery);
    }
  }, []);
  useEffect(() => {
    setSearchResults([]); // Reset search results
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchResults = async (searchTerm) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}sermons?search=${searchTerm}`);
      setSearchResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // API CALLS FOR SERMON CATEGORIES
  let api_call;
  switch (activeCategory) {
    case 0:
      api_call = `${apiUrl}sermons`;
      break;
    case 1:
      api_call = `${apiUrl}biographical-sermons`;
      break;
    case 2:
      api_call = `${apiUrl}doctrinal-sermons`;
      break;
    case 3:
      api_call = `${apiUrl}practical-sermons`;
      break;
    case 4:
      api_call = `${apiUrl}expository-sermons`;
      break;
    case 5:
      api_call = `${apiUrl}special-videos`;
      break;
    default:
      api_call = `${apiUrl}sermons`;
      break;
  }

  useEffect(() => {
    const fetchSermons = async () => {
      setIsLoading(true);
      try {
        let response = await axios.get(`${api_call}`);
        setSermon(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sermons:", error);
      }
    };

    fetchSermons();
  }, [activeCategory, page]);

  // SERMON CATEGORY ITEMS
  const listItems = [
    {
      title: "Biographical Sermons",
      link: "",
    },
    {
      title: "Doctrinal Sermons",
      link: "",
    },
    {
      title: "Practical Sermons",
      link: "",
    },
    {
      title: "Expository Sermons",
      link: "",
    },
    {
      title: "Special Videos",
      link: "",
    },
  ];

  const sorters = [
    {
      name: "All",
    },
    {
      name: "Recent",
      link: "",
    },
  ];

 

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sermons Archive | Baptists for Africa</title>
      </Helmet>
      <>
        <Navbar2 />
        <PageHead name="Sermons & Media Archive" page_image={sermonImage2} />
        <main className={`${darkMode && "dark"} `}>
          <section
            className={`bg-white dark:bg-neutral-900 dark:text-white w-full h-full`}
          >
            <section className="p-3 border-b-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-8">
                <div className="px-4 dark:text-white">
                  <div className="flex">
                    <h1 className="">Free Videos</h1>
                    {/* <h1 className="">/ Year 2024</h1> */}
                  </div>
                  <div className="py-2 ">
                    <h1 className="font-extrabold text-2xl">
                      Sermons & Media Archive
                    </h1>
                    <p className="py-2">
                      {" "}
                      This is the archive page stop to view, search and filter
                      through our sermons, their playlists and other ministry
                      related videos.{" "}
                    </p>

                    {/* TOGGLE MODES  */}
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
                </div>
                <div className="lg:px-8">
                  <img
                    src={sermonImage}
                    alt=""
                    className="w-full h-40 rounded-md"
                  />
                </div>
              </div>
            </section>
            <section className="bg-gray-100 dark:bg-neutral-600 px-2 pt-2 dark:text-white">
              <section className="w-full grid grid-cols-1 lg:grid lg:grid-cols-4 bg-white border dark:border-neutral-900 dark:bg-neutral-900">
                <section className="h-full order-first lg:order-first">
                  <div className=" flex lg:flex flex-col bg-white dark:bg-neutral-900 border dark:border-neutral-600">
                    <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                      <div className=" w-full flex justify-between ">
                        <button className="p-2 rounded-lg flex items-center gap-2 bg-white dark:bg-neutral-900">
                          Filter by <TuneIcon />{" "}
                        </button>
                        <button
                          className="p-2 rounded-lg flex items-center gap-2 bg-white dark:bg-neutral-900 cursor-pointer"
                          onClick={() => {
                            setActiveCategory(0) && setSorterActive(0);
                          }}
                        >
                          <RefreshIcon />{" "}
                        </button>
                      </div>
                    </div>
                    <ul className="h-full w-full ">
                      {listItems.map((item, index) => (
                        <li
                          className={
                            activeCategory === index + 1
                              ? "flex justify-between items-center gap-2 p-3 border-b dark:border-neutral-600 w-full cursor-pointer bg-gray-200 dark:bg-neutral-600 "
                              : "flex justify-between items-center gap-2 p-3 border-b dark:border-neutral-600 w-full cursor-pointer"
                          }
                          onClick={() => {
                            setActiveCategory(index + 1);
                            if (activeCategory === 4) {
                              setSorterActive(50);
                            } else {
                              setSorterActive(0);
                            }
                          }}
                        >
                          <div className="flex">
                            <div className="size-6 "></div>
                            <p className="ml-3">{item.title}</p>
                          </div>
                          {activeCategory === index + 1 ? (
                            <input
                              type="radio"
                              name="item"
                              className="size-6 accent-teal-600"
                              checked
                            />
                          ) : (
                            <input
                              type="radio"
                              name="item"
                              className="size-6"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section className="col-span-3 order-last lg:order-last w-full  ">
                  <div className="flex justify-between  ">
                    {/* Search and other tabs */}
                    <div className="flex justify-center items-center p-7 w-full">
                      <div className=" lg:px-32 w-full">
                        <SermonsSearchBtn
                          searchTerm={searchTerm}
                          setSearchTerm={setSearchTerm}
                          setActiveCategory={setActiveCategory}
                          activeCategory={activeCategory}
                          sorterActive={sorterActive}
                          setSorterActive={setSorterActive}
                          
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-8 bg-gray-100 dark:bg-neutral-600 flex flex-col  rounded-tl-xl rounded-tr-2xl dark:border-t-0 border-t lg:border-r lg:border-white dark:lg:border-r-0 dark:lg:border-neutral-600 ">
                    <div className="flex justify-center items-center mt-2">
                      <ul className=" flex  bg-white dark:bg-neutral-900 rounded-lg justify-center dark:border-2 dark:border-neutral-900 shadow-lg items-center">
                        {sorters.map((item, index) => (
                          <li
                            className={`${sorterActive === 0 ? " " : " "} ${
                              sorterActive === index + 1
                                ? `${
                                    index + 1 === sorters.length - 1
                                      ? "rounded-lg "
                                      : "border-r-0 "
                                  } p-2 font-bold cursor-pointer bg-gray-200 dark:bg-neutral-600 rounded-lg `
                                : `${
                                    index + 1 === sorters.length - 1
                                      ? " rounded-l-lg "
                                      : `border-l-0 rounded-l-none border-r-0 dark:border-neutral-600`
                                  } p-2  cursor-pointer rounded-l-lg  border-r-0`
                            } `}
                            onClick={() => setSorterActive(index + 1)}
                          >
                            {" "}
                            <div className="">{item.name}</div>{" "}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Body content  */}
                    <section className="flex flex-col gap-2 p-4 size-full">
                      {/* {/* <ArchivePlaylistDiv/> */}

                      <div className="flex items-center justify-center gap-4 min-h-96 w-full">
                        {/* SECTION DIV HANDLER                    */}
                        <>
                          {sermon.length === 0 ? (
                            <>
                              <NoDataFoundDiv />
                            </>
                          ) : (
                            <>
                              {isLoading === true ? (
                                <>
                                  <div className="flex justify-center items-center gap-2">
                                    LOADING{" "}
                                    {!darkMode ? (
                                      <ScaleLoader color="teal" />
                                    ) : (
                                      <ScaleLoader color="white" />
                                    )}
                                  </div>
                                </>
                              ) : (
                                <div className="size-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 p-4">
                                  <SermonsVideoContent
                                    sorterActive={sorterActive}
                                    sermons={sermon}
                                    searchResults={searchResults}
                                    darkMode={darkMode}
                                  />
                                </div>
                              )}
                            </>
                          )}
                        </>
                      </div>
                    </section>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </main>
        <BackToTopButton />
        <Footers />
      </>
    </HelmetProvider>
  );
}
