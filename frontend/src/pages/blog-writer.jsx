import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { FaPenToSquare } from "react-icons/fa6";

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
} from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";

export default function BlogAuthor() {
  return (
    <>
      <HelmetProvider>
      <Helmet>
      <meta charSet="utf-8" />
        <title>{`Blog Writers | Baptists for Africa`}</title>
      </Helmet>
      <Navbar2 />
      <PageHead name="Blog Writers" />
      <section className="bg-gradient-to-r from-gray-200 to-blue-200">
        <div className="text-black p-7 max-h-72">
          <h1 className="heading-special-mono text-center text-3xl mt-7">
            BLOG WRITERS
          </h1>
          <div className="p-4 flex justify-center items-center">
            <p className="">Home /</p>
            <p className="text-teal-500">Authors</p>
          </div>
        </div>
        <div class="shapedividers_com-8859 h-24 w-full bottom-0"></div>
      </section>
      <section className="p-10 bg-gray-100 ">
        <div className="lg:grid lg:grid-cols-3 lg:justify-center lg:items-center  gap-5">
          <AuthorDiv />
        </div>
      </section>
      <BackToTopButton />
      <Footers />
      </HelmetProvider>
    </>
  );
}

function AuthorDiv() {
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

  const [blogAuthor, setBlogAuthor] = useState([]);
  const name = useParams().name;
  console.log(name);

  useEffect(() => {
    const fetchBlogAuthor = async () => {
      try {
        const res = await axios.get(`/api/blog-author`);
        setBlogAuthor(res.data);
        console.log();
      } catch (err) {}
    };

    fetchBlogAuthor();
  }, []);

  return (
    <>
      {blogAuthor.map((author, index) => (
        <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg shadow-2xl border">
          <img
            src={author.profile_image}
            alt=""
            className="size-44 p-1 border-4 border-teal-500 rounded-full outline-teal-500"
          />
          <h1 className="font-bold text-lg">{author.name}</h1>

          <p className="text-slate-600 text-center">{author.description}</p>
          <Link>
            <div className="flex gap-4 items-center text-slate-600">
              <FaPenToSquare />
              <span class="text-primary">{author.posts.length}</span>{" "}
              <p className="">Posts by this author</p>
            </div>
          </Link>
          <div className="flex gap-7">
            {socialIcons.map((icon) => (
              <Link to="/" className="mt">
                <ion-icon name={icon.name} style={{ color: "gray" }}></ion-icon>
              </Link>
            ))}
          </div>
          <Link to={`/blog-author-details/${author.name}`} className="mt">
            <button className="bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 rounded-xl p-3">
              See more
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}
