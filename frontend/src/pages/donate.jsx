import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import EffectsSliderSwiperjs from "../sections/EffectsSliderSwiperjs";
import soulwinning from "../assets/images/soulWinning.jpeg";
import churchAttend from "../assets/images/churchAttend.jpeg";
import baptism_image_1 from "../assets/images/IMG-20240312-WA0014.jpg";
import church_attendance from "../assets/images/vlcsnap-2023-09-15-10h01m50s336-1476x830.png";
import bible_teaching from "../assets/images/bible teaching.jpeg";
import donateImage from "../assets/images/Donate-meta.jpg";
import customBackground from "../constants/ImageBackground"

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

export default function Donate() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Donate | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="Donate" />
        <section className="lg:p-7 p-4 bg-gray-200 min-h-96">
          <section className="donor grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="text-xl bg-yellow-300 bg-opacity-30 p-4 rounded-lg">
              <h1 className="font-extrabold">Donor Information</h1>
              <p className="">
                Baptists for Africa is an officially registered, 501(c)(3),
                non-profit, charitable organization. To make a secure donation,
                please click/select the donate button below to be brought to our
                organization’s PayPal donation page. You will have the
                opportunity to donate either using your PayPal account or using
                your card.
              </p>
              <a href="https://www.paypal.com/donate/?hosted_button_id=CM4MRZKU8KPRC">
                <button className="mt-4 bg-teal-300 hover:bg-white text-white hover:text-black rounded-lg p-2">
                  Donate
                </button>
              </a>
            </div>
            <img
              src={donateImage}
              alt=""
              className="max-h-72 w-full rounded-lg"
            />
          </section>
        </section>
        <section className="lg:p-7 p-4 bg-gradient-to-r from-blue-100 to-teal-100 min-h-96">
          <section className=" grid grid-cols-1 lg:grid-cols-2">
            <div className="text-xl bg-gray-300 bg-opacity-30 p-4 rounded-lg">
              <h1 className="font-extrabold">
                What Will My Donation(s) Be Used for?
              </h1>
              <p className="">
                Currently, all donations made will fund the church-planting
                ministry in Uganda of the two directors of the organization,
                missionaries Jesse and John McPhaill. This ministry is unique in
                its very effective method of carrying out the Great Commission.
                Please read more about this ministry’s method and results here.
                In time, it is our hope and prayer that God will permit us to
                extend our reach to other (God willing, eventually all) nations
                of Africa, supporting missionaries and churches to reach Africa
                through the preaching of the gospel and the faithful teaching of
                the word of God. Your generous donations in the early years of
                this ministry will make the most significant impact on the
                evangelization of Africa, because it will permit BFA to do
                larger and more expansive work to other areas (through mission
                trips and other church-plants) faster.
              </p>
              
            </div>

           {/* DONATION CAUSES SLIDER */}
           <div className="">
            <EffectsSliderSwiperjs/>
           </div>
          </section>
        </section>
        <section className="hidden p-7 bg-gradient-to-r from-teal-200 to-blue-200 min-h-96"></section>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
