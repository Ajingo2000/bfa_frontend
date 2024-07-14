import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BlogContainerEditorsPick from "../sections/blog-container-editors-pick";
import BlogContainerPopular from "../sections/blog-container-popular";
import BlogContainerTrending from "../sections/blog-container-trending";
import BlogContainerRecentBlogs from "../sections/blog-container-recentposts";
import {
  Footers,
  Navbar2,
  PageHead,
  BlogContainer,
  BlogContainerSmall,
  SearchDiv,
  BfaDiv,
  NewsLetterContainer,
  AuthorsDiv,
  CategoriesDiv,
  TagsDiv,
  SocialIconsDiv,
} from "../sections";
import blogImage from "../assets/images/blog-1.jpg";
import BackToTopButton from "../constants/back-to-top-btn";
import CleanUp from "../constants/cleanup";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


export default function Blog() {
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 
  const [trendingBlog, setTrendingBlog] = useState([]);
  const [popularBlog, setPopularBlog] = useState([]);
  const [editorsPick, setEditorsPick] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogTags, setBlogTags] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}blog-tags`);
        setBlogTags(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}recent`);
        setBlogs(res.data);
        // console.log(blogs);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);
  

  useEffect(() => {
    const fetchTrendingBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}trending`);
        setTrendingBlog(res.data);
        // console.log(trendingBlog);
      } catch (err) {}
    };

    fetchTrendingBlogs();
  }, []);

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}popular`);
        setPopularBlog(res.data);
        // console.log(popularBlog);
      } catch (err) {}
    };

    fetchPopularBlogs();
  }, []);

  useEffect(() => {
    const fetchEditorsPick = async () => {
      try {
        const res = await axios.get(`${apiUrl}editorsPick`);
        setEditorsPick(res.data);
        // console.log(editorsPick);
      } catch (err) {}
    };

    fetchEditorsPick();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${apiUrl}blog-category`);
        setCategory(res.data);
        // console.log(category);
      } catch (err) {}
    };

    fetchCategory();
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Blog | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="Blog" page_image={blogImage}/>
        <section className="bg-gradient-to-r from-gray-200 to-blue-200 w-full relative">
          <div className="text-black p-7 ">
            <h1 className="heading-special-mono text-center text-3xl mt-7">
              WHAT WOULD YOU LIKE <br /> TO READ TODAY?
            </h1>

            <div className="flex flex-col items-center w-full gap-5 mt-24">
              <div className="flex flex-wrap justify-center w-[60%] gap-4">
                {blogTags.map((tag, index) => (
                  <Link key={index} to={`/blog-search?search=${tag.tag}`} >
                    <button className="flex justify-center items-center gap-2 rounded-3xl ml-4 p-3 border-2 border-teal-500 text-black hover:text-white hover:bg-teal-500 animate-bounce">
                      <LocalOfferIcon fontSize="small" color=""/>{tag.tag}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div className="shapedividers_com-3176 h-24 w-full bottom-0"></div>
        </section>
        <section className="p-7 bg-gray-100 w-full relative">
          <div className="lg:px-20 grid grid-cols-1 lg:grid lg:grid-cols-3  gap-4 justify-around  ">
            {/* editor's pick */}
            <div className="">
              <h1 className="font-extrabold text-xl mb-7 ml-8 ">
                {" "}
                Editor's Pick{" "}
                <p className="h-0 border-b-2 w-1/6 border-teal-500"></p>
              </h1>

              <BlogContainerEditorsPick />
            </div>
            {/* trending posts  */}
            <div className="">
              <h1 className="font-extrabold text-xl mb-7 ml-8 ">
                {" "}
                Trending Posts{" "}
                <p className="h-0 border-b-2 w-1/6 border-teal-500"></p>
              </h1>
              {/* item 1 */}
              <BlogContainerTrending />
            </div>
            {/* popular post  */}

            <div className="">
              <h1 className="font-extrabold text-xl mb-7 ml-8 ">
                {" "}
                Popular Post{" "}
                <p className="h-0 border-b-2 w-1/6 border-teal-500"></p>
              </h1>

              <BlogContainerPopular />
            </div>

            <br />
          </div>
          <div className="px-32">
            <hr className="w-full px-32 border-2" />
          </div>
        </section>
        <section className="bg-blue-100">
          <div className="shapedividers_com-8778 h-24 w-full "></div>

          <div className="p-7 lg:px-32">
            <h1 className="font-bold mb-7 ">
              {" "}
              RECENT POSTS <p className="h-0 border-b-2 w-1/12 border-teal-500"></p>
            </h1>
            {/* section divider */}
            <div className="lg:grid lg:grid-cols-3 lg:justify-around w-full gap-5  ">
              {/* recent posts  */}
              <div className=" lg:col-span-2 gap-4 ">
                <div className="p-4 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
                  <BlogContainerRecentBlogs />
                </div>
              </div>
              {/* sidebar  */}
              <div className="lg:col-span-1 col-span-1 mt-5 lg:mt-0">
                <div className="flex flex-col gap-4">
                  <SearchDiv />
                  <BfaDiv />
                  <AuthorsDiv />
                  <NewsLetterContainer />
                  <CategoriesDiv />
                  <SocialIconsDiv />
                </div>
              </div>
            </div>

            <br />
          </div>
        </section>

        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
