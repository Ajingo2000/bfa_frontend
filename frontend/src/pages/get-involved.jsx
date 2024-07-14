import React from "react";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../App.css";
import "../sections/animate.css";

import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";
import get_involved from "../assets/images/Get-Involved-meta.jpg";
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
import ScaleLoader from "react-spinners/ScaleLoader";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function GetInvolved() {
  const customBackground = {
    backgroundImage: `url(${get_involved})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Get Involved | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="Get Involved" page_image={get_involved} />

        <section className="lg:p-7 p-3 bg-gradient-to-r from-blue-100 to-teal-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="p-5 rounded-xl bg-white bg-opacity-70 fadeInUp">
              <h1 className="lg:heading-special text-xl text-center font-extrabold">Get Involved</h1>
              <p className="text-lg first-letter:font-extrabold ">
                The work of the ministry is not and has never been a one-man
                show, but a joint-effort of all the people of God: “Ye also
                helping together” (II Corinthians 1:11). The great apostle Paul
                himself had many “helpers in Christ Jesus” (e.g., Romans 16:3;
                see also I Corinthians 16:16), many “fellowlaborers” (e.g.,
                Philippians 4:3; I Thessalonians 3:2). You are encouraged to
                take part in this great work going on in Africa. Your
                involvement is important, and can have dramatic results in the
                not-too-distant future for Christ.
              </p>
              {/* <button className="mt-7 p-4  bg-teal-200 rounded-2xl shadow-xl shadow-white-200/50">
                Get Started
              </button> */}
            </div>
            <div className="">
              <img
                src={get_involved}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="lg:p-7 p-3 bg-gray-100">
          <div className="lg:p-7 p-3 bg-white bg-opacity-70 rounded-xl shadow-xl shadow-shite500/50">
            <h1 className="lg:heading-special text-xl text-center font-extrabold">How To Be Involved:</h1>
            <ul className="text-lg list-decimal p-7">
              <li className="font-bold  mt-5">
                Be Personally Involved: by email
              </li>
              <p className="">
                Request to be on our monthly missionary email list, and be
                informed about our most current work on a regular basis. You can
                even interact with us personally by email or by phone using
                WhatsApp, should you desire. You can also read the monthly
                missionary letters here on our website.
              </p>
              <li className="font-bold  mt-5">
                Be Socially Involved: by social media (this website, YouTube,
                and Facebook)
              </li>
              <p className="">
                Follow our internet content, and be edified by the teaching
                content that is produced, taught, and made available through
                multiple outlets. All mp3 files of sermons can be found and
                downloaded by clicking the “Sermons” tab at the top of this
                webpage. These sermons are also regularly uploaded to our
                YouTube channel and Facebook page
              </p>
              <li className="font-bold mt-5">
                Be Financially Involved: by financial donations
              </li>
              <p className="">
                Take part in our work with financial contributions, and be
                invested in this ministry. Jesus Christ teaches us that to
                indiscriminately store up large sums of money is the height of
                foolishness (see Luke 12:15-21); instead, he counsels us to lay
                up treasure in heaven (Matthew 6:19-21); to, in fact, “sell that
                ye have, and give alms; provide yourselves bags which wax not
                old, a treasure in the heavens that faileth not…” (Luke 12:33).
                Probably there is no better way to use one’s money beyond their
                necessities than for the furtherance of the gospel, by giving to
                effective churches and mission work which follows the Biblical
                model of ministry and produces abundant good fruit. Real
                ministries fund selfless, sacrificial persons (like Paul), who
                render to God, as it were, “the fruits in their seasons”
                (Matthew 21:41). It really is a blessing both to the minister
                and to the giver (see Philippians 4:10-19) when one gives of
                their substance to the work of God.
              </p>
              <li className="font-bold  mt-5">
                Be Spiritually Involved: by prayer
              </li>
              <p className="">
                Join us in prayer, and be engaged in this work in spirit. Paul
                says, “ye also helping together by prayer for us…” (2
                Corinthians 1:11). One of the most remarkable things about the
                practice of prayer is that it is not only the easiest way for
                any believer, anywhere, at any time to specifically spiritually
                support this ministry in Africa, but it is also the most
                necessary and powerful way of helping. Because of the great
                report Paul continually got of the church at Rome, he was able
                to effectually pray for them without ceasing for years (cf.
                Romans 1:9 with 15:23), all without ever having visited them.
              </p>
              <p className="">
                Just think about how much God will do in Africa simply because
                of the faithful prayers of the saints (even if for just a couple
                of minutes each day), and that your prayers could be the reason
                many millions are brought to the Savior. It is our sincere
                desire that you will become thoroughly acquainted with this
                ministry, even from afar, and “serve God” with prayers (see Luke
                2:37) for the African people: for their salvation, for their
                sanctification, and for their own service. More specific prayer
                requests are regularly provided by the monthly letter (see
                above).
              </p>
            </ul>
          </div>
        </section>
        <section className="relative p-7 bg-gradient-to-r from-blue-100 to-teal-100 fadeInUp">
          {/* IMAGE  */}
          <div
            className="relative w-full rounded-xl text-gray-200  p-7 min-h-64 bg-cover"
            style={customBackground}
          ></div>
          {/* CONTENT DIV  */}
          <div className="p-7 absolute top-16 left-8 right-0">
            <h1 className="font-extrabold text-[30px] text-white ">Donate</h1>
            <p className=" text-xl text-white filter">
              {" "}
              If you are interested in donating to this ministry, please Click
              on the button below.
            </p>
            <a href="/donate">
              <button className="mt-4 p-2 bg-teal-500 text-white hover:bg-white hover:text-teal-400 rounded-xl ">
                Donate
              </button>
            </a>
          </div>
        </section>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
