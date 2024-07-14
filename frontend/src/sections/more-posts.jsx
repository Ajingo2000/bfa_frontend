import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContainerSmall } from "../sections";
import CleanUp from "../constants/cleanup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";


const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}

export default function MorePostsDiv() {
  return (
    <>
      <div className=" p-2">
        <h1 className="font-bold text-lg mb-7 ">
          RECENT POSTS
          <p className="border-b border-teal-500 w-[1/4]"></p>
        </h1>

        <div className="w-full ">
          <RelatedDiv />
        </div>
      </div>
    </>
  );
}

function RelatedDiv() {
  const [recentBlog, setRecentBlog] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  useEffect(() => {
    const fetchRecentBlog = async () => {
      try {
        const res = await axios.get(`${apiUrl}recent`);
        setRecentBlog(res.data);
        console.log(`${recentBlog} THIS IS THE RESULTING DATA!`);
      } catch (err) {}
    };

    fetchRecentBlog();
  }, []);

  return (
    <div className="w-full ">
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {recentBlog.map((blog, index) => (
            <SwiperSlide>
              <div className="border rounded-xl shadow-xl max-w-80">
                <img
                  src={blog.image}
                  alt=""
                  className="w-full rounded-t-xl rounded-bl-2xl h-40 max-h-40 blur-md"
                />
                <div className="w-full p-2 flex flex-col rounded-tr-2xl">
                  <h1 className="font-bold">
                  <CleanUp input={blog.body} max_length={27} />
                  </h1>
                  <p className="text-slate-600">
                    <CleanUp input={blog.body} max_length={50} />
                  </p>
                  <a href={`/blog-details/${blog.slug}`}>
                    <button className=" mt-4 border border-teal-500 rounded-lg p-1 hover:bg-white">
                      Read More
                    </button>
                  </a>

                  <br />
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </>
    </div>
  );
}


