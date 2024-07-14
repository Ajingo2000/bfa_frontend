import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";
import jesse from "../assets/images/img-2534-1256x837.png";
import john from "../assets/images/2-1256x837.png";
import AuthorPosts from "../sections/AuthorPosts";
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
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import { FaPenToSquare } from "react-icons/fa6";

export default function BlogAuthorDetails() {
  const socialIcons = [
    {
      name: "logo-twitter",
    },
    {
      name: "logo-facebook",
    },
    {
      name: "logo-youtube",
    },
    {
      name: "logo-instagram",
    },
    {
      name: "logo-google",
    },
  ];
  
  const [blogAuthor, setBlogAuthor] = useState({});
  const name = useParams().name;
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 
  

  useEffect(() => {
    const fetchBlogAuthorDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}blog-author-details/${name}`);
        setBlogAuthor(res.data);
        console.log();
      } catch (err) {}
    };

    fetchBlogAuthorDetails();
  }, [name]);

  return (
    <>
      <HelmetProvider>
      <Helmet>
      <meta charSet="utf-8" />
        <title>{`Blog Author ${name} | Baptists for Africa`}</title>
      </Helmet>
      <Navbar2 />
      <PageHead name={`Blog Author ${name}`} />
      {blogAuthor && (
        <>
          <section className="bg-gradient-to-r from-gray-200 to-blue-200">
            <div className=" text-black p-7 max-h-72">
              <div className="flex justify-center items-center gap-7 w-full p-4">
                <img
                  src={blogAuthor.profile_image}
                  alt=""
                  className="size-48 p-1 border-4 border-teal-500 rounded-full outline-blue-400"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold text-lg">{blogAuthor.name}</h1>

                  <p className="text-slate-600 ">{blogAuthor.description}</p>
                  <Link>
                    <div className="flex gap-4 items-center text-slate-600">
                      <FaPenToSquare />
                      <span class="text-primary">
                        {blogAuthor.posts && (
                          <>
                          {blogAuthor.posts.length}
                          </>
                        )}
                        
                      </span>{" "}
                      <p className="">Posts by this author</p>
                    </div>
                  </Link>
                  <div className="flex gap-7">
                    {socialIcons.map((icon) => (
                      <Link to="/" className="mt">
                        <ion-icon
                          name={icon.name} 
                          style={{ color: "gray" }}
                        ></ion-icon>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="shapedividers_com-8859 h-24 w-full bottom-0"></div>
          </section>
          <section className="p-10 bg-gray-100 ">
            <h1 className="font-bold text-center mb-7 text-2xl">
              Posts By this Author
            </h1>
            <div className="grid grid-cols-3 gap-5">
            <AuthorPosts authorPosts={blogAuthor.posts} blog_author={blogAuthor}/>
            </div>
          </section>
        </>
      )}

      <BackToTopButton />
      <Footers />
      </HelmetProvider>
    </>
  );
}
