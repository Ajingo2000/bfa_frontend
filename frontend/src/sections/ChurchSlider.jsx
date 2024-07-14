import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import reachingAfricaGospel from "../assets/images/IMG-20240312-WA0008.jpg";
import soulWinning from "../assets/images/soul-winning.jpeg";
import BiblePreaching from "../assets/images/bible teaching.jpeg";
import "./slider.css";

const ChurchSlider = () => {
  const carouselItems = [
    {
      imageSrc: reachingAfricaGospel,
      title: "Reaching Africa Through The Gospel",
      verse: "Preach the gospel” (Mark 16:15)",
      text: "The church organisation here at Bible Baptist Church, has a vision of reaching and evangelising the gospel all over Africa by Church planting...",
    },
    {
      imageSrc: BiblePreaching,
      title: "Bible Preaching",
      verse: "Preach the word” (II Timothy 4:2)",
      text: "At our church(Bible Baptist Church), we use and preach God's word from the Bible (English KJV), for we believe it is God's authority...",
    },
    {
      imageSrc: soulWinning,
      title: "Soul-Winning",
      verse: "Preach the gospel (Mark 16:15)",
      text: "At our church(Bible Baptist Church), we encourage preaching of the gospel through evangelism, to further and fulfill the great commision thus winning many souls to Christ...",
    },
  ];

  const thumbnailItems = [
    {
      imageSrc: reachingAfricaGospel,
      title: "Reaching Africa Through The Gospel",
      verse: "Preach the gospel” (Mark 16:15)",
    },
    {
      imageSrc: BiblePreaching,
      title: "Bible Preaching",
      verse: "Preach the word” (II Timothy 4:2)",
    },
    {
      imageSrc: soulWinning,
      title: "Soul-Winning",
      verse: "Preach the gospel (Mark 16:15)",
    },
  ];

  useEffect(() => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel-list');
    let thumbnailBorderDom = document.querySelector('.carousel-thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 7000;
    let timeAutoNext = 10000;

    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll('.carousel-list-item');
      let thumbnailItemsDom = document.querySelectorAll('.carousel-thumbnail-item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = function () {
      showSlider('next');
    };

    prevDom.onclick = function () {
      showSlider('prev');
    };

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div className="carousel">
        <div className="list carousel-list">
          {carouselItems.map((item, index) => (
            <div key={index} className="item carousel-list-item bg-black bg-opacity-80 bg-blend-darken w-full h-full">
              <img src={item.imageSrc} className="brightness-50" alt={`Slide ${index}`} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="verse text-xl font-bold text-teal-300">{item.verse}</div>
                <div className="item-text mt-2 text-lg z-40">{item.text}</div>
                <div className="buttons">
                  <button className="mt-4 p-2 border rounded-md text-teal-300">Get-Involved</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail carousel-thumbnail">
          {thumbnailItems.map((item, index) => (
            <div key={index} className="item carousel-thumbnail-item shadow-xl rounded-[20px] border-teal-500 border shadow-white-500/50">
              <img src={item.imageSrc} alt={`Thumbnail ${index}`} className="filter brightness-50" />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="description">{item.verse}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        <div className="time carousel-time"></div>
      </div>
    </>
  );
};

export default ChurchSlider;

