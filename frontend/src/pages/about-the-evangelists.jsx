import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import cross2 from "../assets/images/christian-symbol-black-thin-cross-with-lighting-vector-26855336-removebg-preview.png";
import jesse from "../assets/images/img-2534-1256x837.png";
import john from "../assets/images/2-1256x837.png";
import OldJesseAndJohnPics from "../assets/images/Jesse and John.jpeg";
import cross1 from "../assets/images/christian-symbol-black-thin-cross-with-lighting-vector-26855336-removebg-preview.png";
import soulwinning from "../assets/images/soulWinning.jpeg";
import churchAttend from "../assets/images/churchAttend.jpeg";
import baptism_image_1 from "../assets/images/IMG-20240312-WA0014.jpg";
import church_attendance from "../assets/images/vlcsnap-2023-09-15-10h01m50s336-1476x830.png";

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

const AboutTheEvangelists = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About the Evangelists | Baptists for Africa</title>
      </Helmet>
      <main className="relative font-">
        <Navbar2 />
        <PageHead name="About The Evangelists" />
        <section className="p-5 bg-gray-100">
          <div className="grid justify-around gap-4 items-center md:flex md:justify-around">
            <div className="bg-white shadow-xl shadow-white-500/50 rounded-xl size-80 lg:size-96 hover:size-[360px] lg:hover:size-[360px] hover:shadow-teal-400/50">
              <img src={jesse} alt="" className="rounded-xl" />
              <div className="bg-white">
                <p className="heading-special-2 hover:p-special ">
                  JESSE MCPAUL
                </p>
              </div>
            </div>
            {/* <div className="">
              <img src={cross1} alt="" className="" />
            </div> */}
            <div className="bg-white shadow-xl shadow-white-500/50 rounded-xl size-80 lg:size-96 hover:size-[360px] lg:hover:size-[360px] hover:shadow-teal-400/50">
              <img src={john} alt="" className="rounded-xl" />
              <div className="">
                <p className="heading-special-2">JOHN MCPAUL</p>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:p-7 p-3 bg-gradient-to-r from-blue-100 to-teal-100">
          <div className="text-xl">
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 rounded-lg shadow-lg shadow-white-500/50  hover:font-extrabold hover:p-7 hover:shadow-teal-400">
              Jesse and John McPaul are independent Baptist, church-planting
              missionaries working in the African country of Uganda, operating
              particularly within the capital city of Kampala, based in
              Kisugu along Ntale road, which is located in Kampala’s southern division (of
              four city-wide divisions), Makindye. They currently lead their
              first church plant in Africa, Bible Baptist Church, founded
              officially at about the beginning of 2022. BBC is a locally,
              organically grown church from ground zero, with currently over a
              hundred regular church members. The church holds thrice-weekly
              services of doctrinal and dynamic Biblical preaching, and daily
              soul-winning outings which have seen (and continues to see) tens
              of thousands of people personally led to faith in Christ.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 rounded-lg shadow-lg shadow-white-500/50 hover:font-extrabold hover:p-7 hover:shadow-teal-400">
              Jesse and John are identical twin brothers, born in August of
              1996, who were saved by grace through faith in the Lord Jesus
              Christ when they were age 16, in 2012. Raised for the majority of
              their childhood in a small-town in Mid-Western America, Mohave
              Valley, Arizona, Jesse and John were led to Christ and Biblically
              baptized by a pastor of a Bible church (non-denominational) newly
              begun in that area.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 rounded-lg shadow-lg shadow-white-500/50  hover:font-extrabold hover:p-7 hover:shadow-teal-400">
              After four years (2010-2014) learning and serving (for example, in
              door-to-door evangelism) in that church, they moved to attend
              university pre-medical studies, in hopes of becoming physicians.
              After about a year of attending and lightly serving in a
              denominational Baptist church near the university, they began
              attending an independent Baptist church on the other side of the
              town, influenced by an unquenchable desire to preach the gospel.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 rounded-lg shadow-lg shadow-white-500/50 hover:font-extrabold hover:p-7 hover:shadow-teal-400">
              Their desire for the work of the Lord grew, and they felt
              certainly called to the work of the ministry as evangelists. They
              both, in time, sacrificed their secular college studies and worked
              at various jobs to earn a living during the interim period as they
              continued to study the Bible and train for their calling. They
              therefore performed extensive self-study, and gained invaluable
              experience and skill in evangelism. They were used in that church
              to, among other things, each lead many people to Christ, and
              preach helpful sermons in various lacking churches across America,
              as opportunity arose. A short-term mission trip to Malawi in the
              beginning of 2017 helped them to realize their calling was to
              preach the gospel in Africa.
            </p>
            <br />
          </div>
        </section>
        <section className="lg:p-7 p-3 bg-gradient-to-r from-teal-200 to-blue-100">
          <h1 className="heading-special">Ministry in Africa</h1>
          <div className="md:grid grid-cols-2 gap-3  md:mt-4 mt-2 bg-white bg-opacity-70 p-7 rounded-xl shadow-xl shadow-white500/50 hover:p-7 hover:shadow-teal-400">
            <div className="size-full">
              <img
                src={OldJesseAndJohnPics}
                alt="aboutus"
                className="rounded-lg h-56 w-full lg:size-full "
              />
            </div>
            <div className="text-xl flex justify-center items-center mt-4 rounded-lg">
              <p className="">
                In June of 2019, Jesse and John were presented with the
                opportunity to come to Uganda to work with a novice independent
                Baptist missionary intending to start a church in Kampala. The
                pastor and church held a farewell party for them, blessed them,
                and prayed for them corporately. Shortly after arriving in
                Uganda, the missionary they intended to work with had suddenly
                and unexpectedly decided to give up on ministry in Uganda, so
                Jesse and John worked with an established independent Baptist
                church in the city. After a little over 2 years serving there as
                volunteers (that is, totally unpaid), they were called to start
                their own church, and the pastor and church prayed for them and
                blessed them as they left.
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-3 md:mt-4 mt-2 bg-white bg-opacity-70 p-7 rounded-xl shadow-xl shadow-white500/50 hover:p-7 hover:shadow-teal-400">
            <div className="text-xl flex justify-center items-center">
              <p className="">
                After some preliminary independent work, they officially formed
                a Ugandan NGO, Baptists for Africa, under which they legally
                founded Bible Baptist Church, a Biblically-based, independent,
                fundamental Baptist church, at about the beginning of 2022 (the
                first service was held in December 2021). The plan, prayer, and
                hope is that indigenous evangelists and pastor-teachers will be
                trained and sent out to evangelize and begin churches all across
                Africa. Also, as evangelists, Jesse and John intend to
                personally plant multiple large, thriving churches (such as this
                first one), and nurture them to independence with a plurality of
                elders set as the long-term leaders
              </p>
            </div>
            <div className="w-full h-full mt-3">
              <img
                src={churchAttend}
                alt="aboutus"
                className="rounded-lg lg:size-full h-56 w-full"
              />
            </div>
          </div>
        </section>
        {/* <section className='padding bg-gradient-to-r from-blue-100 to-teal-100'>
                <div className="p-special">
                    
                </div>
            </section> */}
        <BackToTopButton/>

        <Footers />
      </main>
    </HelmetProvider>
  );
};

export default AboutTheEvangelists;
