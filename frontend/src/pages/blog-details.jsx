import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReadTime from "../constants/readtime";

// SKELETON LOADER
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dropdown_to_left from "../assets/images/down-right-arrow_3314267.png";
import jesse from "../assets/images/img-2534-1256x837.png";
import john from "../assets/images/2-1256x837.png";
import PlainText from "../constants/plaintext";
import PlainHtml from "../constants/PlainHtml";
import CleanUp from "../constants/cleanup";
import ShareBlogOnSocialsOnSocials from "../constants/ShareBlog";
import FormattedDate from "../constants/formatted-date";
import {
  Footers,
  LatestBlog,
  NavBar,
  NewsLetter,
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
  RecentPostDiv,
  MorePostsDiv,
} from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TimerIcon from "@mui/icons-material/Timer";
import Timer from "@mui/icons-material/Timer";

export default function BlogDetails() {
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 
  const [replyOpen, setReplyOpen] = useState(false);
  const [blog, setBlog] = useState({});
  const slug = useParams().slug;
  console.log(slug);

  const toggleReply = () => {
    setReplyOpen(!replyOpen);
  };

  useEffect(() => {
    // Fetch blog details
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}blog-details/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      }
    };

    fetchBlogDetails();
  }, [slug]); // Call useEffect whenever `slug` changes

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const commentContent = document.getElementById("commentInput").value;
    const postId = blog.post_id; // Get the post ID somehow
    const requestBody = {
      user: "Ajingo", // Include user ID or username
      parent_post: postId,
      content: commentContent,
    };

    try {
      const response = await fetch("YOUR_API_ENDPOINT_FOR_COMMENTS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        // Comment submitted successfully, update UI as needed
        // For example, refresh comments
        // fetchComments();
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle reply submission
  const handleReplySubmit = async (e) => {
    e.preventDefault();
    // Similar to comment submission but include parent_comment ID
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${blog.title} | Blog | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name={`${blog.title}`} />
        <main className="lg:p-6 p-1 bg-white">
          <section className="grid grid-cols-1 lg:grid lg:grid-cols-3 gap-4   bg-white bg-opacity-90 lg:p-3 p-1  rounded-md">
            {/* Blog Details  */}
            <div className="col-span-2 shadow-xl">
              <div className="grid grid-cols-1">
                {/* Blog Image  */}
                <div className=" relative rounded-xl">
                  <img
                    src={blog.image || <Skeleton />}
                    alt={blog.title}
                    className=" w-full h-64 object-cover object-center rounded-t-xl"
                  />
                </div>
                {/* Blog heading and content */}
                <div className="w-full p-4">
                  {/* title for blog  */}
                  <h1 className="font-extrabold lg:text-3xl text-2xl">
                    {blog.title}
                  </h1>
                  {/* blog sub details and social share   */}
                  <div className="lg:flex lg:justify-between lg:items-center block mt-2">
                    <div className=" text-black">
                      <div className="flex  items-center gap-2">
                        {/* Author Info */}
                        {blog.author && (
                          <div className=" flex items-center gap-2">
                            <div className="overflow-hidden">
                              {blog.author.profile_image && (
                                <img
                                  src={blog.author.profile_image}
                                  alt={blog.author.name + "'s profile"}
                                  className=" size-7 rounded-full"
                                />
                              )}
                            </div>
                            <p className="text-base font-medium">
                              <a
                                href={`/blog-author-details/${blog.author.name}`}
                                className=" hover:opacity-70 text-sm"
                              >
                                {blog.author.name}
                              </a>
                            </p>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <p className="flex items-center gap-2 text-sm font-medium ">
                            <CalendarTodayIcon />
                            <FormattedDate date={blog.created} />
                          </p>

                          <p className="flex items-center gap-2 text-sm font-medium ">
                            <Timer />
                            <ReadTime content={blog.body} />
                          </p>
                          {/* NUMBER OF COMMENTS  */}
                          {/* <p className="flex items-center gap-2 text-sm font-medium ">
                            <ChatIcon />
                            05
                          </p> */}
                          <p className="flex items-center gap-2 text-sm font-medium ">
                            <VisibilityIcon />

                            {blog.views && <>{blog.views.length}</>}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <ShareBlogOnSocialsOnSocials />
                    </div>
                  </div>
                  {/* Content  */}
                  <div className="w-full mt-4 text-lg">
                    <PlainHtml contentBody={blog.body} />
                  </div>
                </div>

                {/* Comments section  */}
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-span-1">
              <div className="grid grid-cols-1 p-3">
                {" "}
                <SearchDiv />
                <br />
                <BfaDiv />
                <br />
                <RecentPostDiv />
                <br />
                <NewsLetterContainer />
                <br />
                {/* <TagsDiv tags={blog} /> */}
                <br />
                <SocialIconsDiv />
              </div>
            </div>
          </section>
          {/* Related Posts  */}
          {/* 
          <div className="mt-7">
            <MorePostsDiv />
          </div> */}
        </main>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
