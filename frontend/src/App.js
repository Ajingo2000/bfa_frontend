import React from "react";
import "./App.css";
import "./sections/animate.css";

// import Link from "react-router-dom";
import BackToTopButton from "./constants/back-to-top-btn";

import LatestActivity from "./sections/LatestActivity";
// import "./constants/main.js";
import {
  AboutUs,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  Navbar2,
} from "./sections";
import HomePageNewsletter from "./sections/HomePageNewsletter";
import MinistryResources from "./sections/MinistryResourcesDiv";

import SermonArchiveHomeDiv from "./sections/SermonArchiveHomeDiv";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <>

      <HelmetProvider
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Baptists for Africa</title>
        </Helmet>
        <main className="relative">
          <Navbar2 />

          <section className="">
            <ChurchSlider />
          </section>
          <section className="p-4 lg:p-10 bg-gradient-to-r from-blue-200 to-teal-200">
            <AboutUs />
          </section>
          <section className="p-7 bg-gradient-to-r from-blue-100 to-teal-100  ">
            {/* THIS IS THE MISSION ACTIVITY  */}
            <LatestActivity />
          </section>
          
          {/* 
        <section className="p-7 bg-gray-100">
          <ChurchInfo />
        </section> */}
          <section className="padding bg-gradient-to-r from-blue-200 to-teal-200">
            <MinistryResources />
          </section>
          <section className="padding  bg-gradient-to-r from-blue-100 to-teal-100">
            <LatestSermon />
          </section>
          <section className="padding ">
            <SermonArchiveHomeDiv />

          </section>

          <section className="padding bg-gradient-to-r from-blue-100 to-teal-100">
            <LatestBlog />
          </section>

          {/* <section className="">
            <ImageSlider />
          </section> */}

          <section className="p-2 lg:padding bg-gradient-to-r from-blue-200 to-teal-200">
            <HomePageNewsletter />
          </section>

          <section className="padding bg-gradient-to-r from-blue-100 to-teal-100">
            <ContactForm />
          </section>

          <BackToTopButton />
          <Footers />
        </main>
      </HelmetProvider>
    </>
  );
};

export default App;
