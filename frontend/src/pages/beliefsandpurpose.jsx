import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import flowerBackground from "../assets/images/pexels-wdnet-96627.jpg";
import beliefsAndPurpose from "../assets/images/beliefsandpurpose.jpg";
import background4 from "../assets/images/kenrick-mills-1h2Pg97SXfA-unsplash.jpg";

import {
  AboutUs,
  BibleLessons,
  ChurchInfo,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  Navbar2,
  NewsLetter,
  SermonArchive,
  Nav,
  PageHead,
} from "../sections";

const BeliefsandPurposes = () => {
  const customBackground = {
    backgroundImage: `url(${flowerBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beliefs and Purpose | Baptists for Africa</title>
      </Helmet>
      <main className="">
        <Navbar2 />
        <PageHead name="Our Beliefs and Purposes" page_image={beliefsAndPurpose}/>

        <section className="relative lg:p-7 p-4 bg-gradient-to-r from-blue-100 to-teal-100">
          <div className="relative w-full p-2 bg-white bg-opacity-65 text-white rounded-lg min-h-96" style={customBackground}>
          </div>
          {/* CONTENT  */}
          <div className="absolute lg:top-16 lg:left-0 top-16 text-white flex flex-col items-center p-7 lg:p-3 gap-4">
              <h1 className="lg:heading-special  text-xl font-serif">Our Belief and Purpose</h1>
            <div className="lg:heading-special-2 text-lg italic">
              <q> To preach and make fully known the true gospel of eternal
              salvation by grace through faith alone in all of Africa, to
              baptize new converts in the name of the Father, Son, and Holy
              Spirit, and to teach and train believers in all the counsel of
              God, as contained wholly and solely in the the Bible. </q>
            </div>
            </div>
        </section>
        <section className="lg:p-7 p-4 bg-gradient-to-r from-teal-100 to-blue-100">
          <h1 className="heading-special">Statement of Faith</h1>
          <div className="text-xl">
            <p className="p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Our beliefs and practices are all derived from, dependent on, and
              directed towards the Bible, understanding it, believing it, and
              living it. We are beholden to no formal creed or ecclesiastical
              doctrinal tradition, but only embrace and advocate teachings and
              behaviors which are clearly taught in holy scripture, either in
              its pronouncements (direct teaching) or in its principles
              (indirect teaching).
            </p>
            <br />
            <p className="p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              We identify as Baptists, not because we are under some other
              Baptist authorities (e.g., a denomination or mission board), nor
              because we are bound to any formal Baptist doctrine (e.g., the
              Baptist Faith and Message), but because our beliefs and practices
              are in accordance with and most closely aligned with Baptist
              teachings and lifestyles. All true religion is to be judged in the
              matter as to how it accords with God’s word. When an honest,
              careful, critical, prayerful, and thorough study in religion is
              performed, we are persuaded one will be brought providentially to
              identify with the historic Baptist faith, if not in name, then at
              least in one’s beliefs and practices.
            </p>
            <br />
            <p className="p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Below is a sketch of the most important doctrines we hold to,
              provided in a classical systematic theology outline. We have a
              very researched and refined view on almost every doctrinal
              position which pertains to the Bible. Here, however, we provide a
              succinct, non-exhaustive summary of most of the significant
              doctrinal beliefs we (as individuals and a ministry) adhere to,
              insofar as it may give those interested in the labors of this
              ministry a sense of the doctrinal stance advocated and regularly
              taught by us.
            </p>
            <br />
          </div>
          <div className="text-xl p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
            <ul className="">
              (Soon to be posted)
              <li>THE DOCTRINE OF GOD (Theology proper)</li>
              <li>THE DOCTRINE OF CHRIST (Christology)</li>
              <li className="">
                THE DOCTRINE OF THE HOLY SPIRIT (Pneumatology)
              </li>
              <li className="">THE DOCTRINE OF MAN (Anthropology)</li>
              <li className="">THE DOCTRINE OF SIN (Hamartiology)</li>
              <li className="">THE DOCTRINE OF SALVATION (Soteriology)</li>
              <li className="">THE DOCTRINE OF THE BIBLE (Bibliology)</li>
              <li className="">THE DOCTRINE OF THE CHURCH (Ecclesiology)</li>
              <li className="">THE DOCTRINE OF LAST THINGS (Eschatology)</li>
            </ul>
          </div>
        </section>
        <BackToTopButton/>
        <Footers />
      </main>
    </HelmetProvider>
  );
};

export default BeliefsandPurposes;
