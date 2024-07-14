import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../App.css";
import blog from "../assets/images/Donate-meta.jpg";
import john from "../assets/images/2-1256x837.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import CleanUp from "../constants/cleanup";
import ReadTime from "../constants/readtime";
import FormattedDate from "../constants/formatted-date";
import SearchBtn from "../constants/SearchBtn";
import NoDataFoundDiv from "../constants/NoDataFoundDiv";
import ScaleLoader from "react-spinners/ScaleLoader";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

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

export default function BlogSearch() {
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch search results when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    if (searchQuery) {
      fetchSearchResults(searchQuery);
      setSearchTerm(searchQuery);
    }
  }, []);

  const fetchSearchResults = async (searchTerm) => {
    try {
      const response = await axios.get(`${apiUrl}blog-search?search=${searchTerm}`);
      setSearchResults(response.data);
      console.log(searchResults)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  let resultsContent;
  

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Blog Search | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="Search Blog" />
        <section className="bg-gradient-to-r from-gray-200 to-blue-200">
          <div className="text-black p-7 max-h-72 flex flex-col items-center">
            <h1 className="heading-special-mono text-center text-3xl mt-7">
              SEARCH
            </h1>
            <div className="p-4 flex justify-center items-center w-full lg:w-1/2">
              <SearchBtn />
            </div>
          </div>
          <div class="shapedividers_com-3176 h-24 w-full bottom-0"></div>
        </section>
        <section className="p-10 bg-gray-100 min-h-96">
          <div className="">
            <div className="flex flex-col justify-center items-center  gap-4">
              <div className=""><h1 className="blog-head flex  lg:flex gap-4">{`Search Results for: `} <p className="border-b-2 border-teal-500 w-20">{searchTerm}</p> </h1></div>

            </div>

            <div className="flex flex-col gap-5 mt-6">
              {/* Search Results  */}
              {isLoading === true &&  searchResults.length === 0 ? (< NoDataFoundDiv/>) : (<ResultForSearchDiv results={searchResults} />)}
            </div>
          </div>
        </section>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}

function ResultForSearchDiv(props) {
  return (
    <>
      {props.results.map((blog_result) => (
        <div className="lg:grid lg:grid-cols-2 flex flex-col rounded-lg  bg-white shadow-2xl border">
          <img
            src={blog_result.image}
            alt=""
            className="rounded-tl-lg rounded-bl-lg w-full max-h-72 "
          />
          <div className="p-7 flex flex-col gap-4">
            <h1 className="font-bold text-lg">{blog_result.title}</h1>
            <div className="flex gap-7  items-center ">
              <img
                src={blog_result.author.profile_image}
                alt=""
                className="size-8 rounded-full"
              />
              <h1 className=" ">{blog_result.author.name}</h1>
              <div className="flex justify-center items-center gap-2 ">
                <FaRegCalendarDays />
                <p className="text-black">
                  <FormattedDate date={blog_result.created} />
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <p className="flex items-center  gap-2">
                  {" "}
                  <FaClock />
                  <ReadTime content={blog.body} />{" "}
                </p>
              </div>
            </div>
            {/* TAGS FOR THE SPECIFIC BLOG  */}
            <div className="flex flex-wrap  gap-2 text-slate-300">
              {blog_result.tags.map((tag, index) => (
                <>
                  <p className="text-slate-600 border p-2 rounded-2xl">
                    {tag.tag}
                  </p>
                </>
              ))}
            </div>

            <p className="text-slate-600">
              <CleanUp input={blog_result.body} />
            </p>
            <a
              href={`blog-details/${blog_result.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" border border-teal-500 p-2 w-14 rounded-lg">
                Read
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
