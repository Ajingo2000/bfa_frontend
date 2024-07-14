import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
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
import soulwinning from "../assets/images/soulWinning.jpeg";
import soulwinning_image1 from "../assets/images/IMG-20240312-WA0014.jpg";
import baptism_image_1 from "../assets/images/IMG-20240312-WA0014.jpg";
import afriPopDensity from "../assets/images/africa population density.jpg";
import afriAge from "../assets/images/africa age.jpg";
import AfriReligiosity from "../assets/images/afri-rel.webp";

const AboutTheMinistry = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About the Ministry | Baptists for Africa</title>
      </Helmet>
      <main className="relative">
        <Navbar2 />
        <PageHead name="About The Ministry" />

        <section className="lg:p-7 p-2 bg-gradient-to-r from-blue-100 to-teal-100 text-xl">
          <div className="lg:p-5 p-3">
            <h1 className="heading-special">About The Ministry</h1>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              <b>Matthew 28:18-20</b>:{" "}
              <sup>
                <b>18</b>
              </sup>{" "}
              And Jesus came and spake unto them, saying, All power is given
              unto me in heaven and in earth.
              <sup>
                <b>19</b>
              </sup>{" "}
              Go ye therefore, and teach all nations, baptizing them in the name
              of the Father, and of the Son, and of the Holy Ghost:{" "}
              <sup>
                <b>20</b>
              </sup>{" "}
              Teaching them to observe all things whatsoever I have commanded
              you: and, lo, I am with you always, even unto the end of the
              world. Amen.
            </p>
            <br />
            <div className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              <p className=" ">
                Jesus taught us to measure our success in ministry in relation
                to how effectively we fulfill, upon individuals, the entire{" "}
                <b> Great Commission.</b> It is a combination of three distinct
                commands:
              </p>

              <ul type="circle" className=" ">
                <li>
                  <b>(1).</b> “teach all nations,” preach the gospel and lead
                  lost souls to salvation by Christ;{" "}
                </li>
                <li>
                  <b>(2).</b> “baptizing them,” baptize new converts through
                  full-immersion in water as a symbol and public profession of
                  their faith in the death, burial, and resurrection of Christ;{" "}
                </li>
                <li>
                  <b>(3).</b> “teaching them to observe all things,” disciple
                  and train new converts in the essentials of Biblical doctrine
                  and practice, and bring them to maturity as consistent and
                  faithful disciples for Christ.
                </li>
              </ul>
            </div>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg ">
              To illustrate the success of the early churches, the Biblical
              author of Acts (Luke) would, at times, highlight the number of
              people who were “added to the Lord” (e.g., <b>Acts 5:14</b>;{" "}
              <b>11:24</b>), the number of those who were baptized (e.g.,{" "}
              <b>Acts 2:41</b>; <b>8:12</b>), as well as the number of those who
              were “added to the church” (e.g., <b>Acts 2:47</b>). These three (
              <b> evangelism</b>, <b> baptism</b>, and <b> discipleship</b>) are
              the Biblical (particularly, New Testament) ways to measure the
              success or failure of a ministry.
            </p>
            <br />
            <div className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  rounded-lg">
              <h1>
                <b>Ministry Methods</b>
              </h1>
              <p className="">An overview:</p>
              <ol type="i" className="flex flex-col gap-2">
                <li className="flex gap-4 hover:bg-gray-300">
                  <p className="border-l-4 border-teal-500"></p>
                  <a href="#soul-winning">Soul Winning</a>
                </li>
                
                <li className="flex gap-4 hover:bg-gray-300">
                  <p className="border-l-4 border-teal-500"></p>

                  <a href="#ministry-results">Ministry Results</a>
                </li>
                <li className="flex gap-4 hover:bg-gray-300">
                  <p className="border-l-4 border-teal-500"></p>

                  <a href="#ministry-projections">Ministry Projections</a>
                </li>
                <li className="flex gap-4 hover:bg-gray-300">
                  <p className="border-l-4 border-teal-500"></p>

                  <a href="#battle-plan-for-africa">Battle Plan for Africa</a>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="lg:p-7 p-3 bg-gradient-to-r from-blue-200 to-teal-200 text-xl">
          <div className="">
            <h1 className="heading-special">Ministry Methods</h1>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              We believe that God has divinely ordained, greatly used, and
              eternally honored Biblical preaching to perform his mighty works
              throughout history, because it is the human manifestation of God’s
              word to the world.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Titus 1:2-3: In hope of eternal life, which God, that cannot lie,
              promised before the world began;3 But hath in due times manifested
              his word through preaching, which is committed unto me according
              to the commandment of God our Saviour.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              It is God’s word which created the world (Hebrews 11:3; Psalm
              33:6; see Genesis 1:3ff, “God said”), his word which upholds and
              sustains the world in being (Hebrews 1:3; see also II Peter 3:7),
              and his word which will destroy the world (again, see II Peter
              3:7, 10-13; see also Revelation 21:1). He who is the Alpha and the
              Omega himself (Revelation 1:8; 21:6) has a word so powerful that
              it can spell out the beginning and the ending of all things
              created. God’s word is like a crushing hammer (Jeremiah 23:29), a
              cutting sword (Hebrews 4:12; Ephesians 6:17), and a cleansing
              water (Ephesians 5:26). God’s word is like a life-giving seed (I
              Peter 1:23), a self-revealing mirror (James 1:22-25), and a
              path-disclosing light (Psalm 119:105). When we mark just how
              powerful the word of God is (see also Psalm 29:4; Psalm 19:7-9),
              we will see at once that the exclamation, explanation, and
              exaltation of the word of God is the key to a fruitful ministry.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Isaiah 55:10-11: For as the rain cometh down, and the snow from
              heaven, and returneth not thither, but watereth the earth, and
              maketh it bring forth and bud, that it may give seed to the sower,
              and bread to the eater:11 So shall my word be that goeth forth out
              of my mouth: it shall not return unto me void, but it shall
              accomplish that which I please, and it shall prosper in the thing
              whereto I sent it.
            </p>
            <br />

            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              When so-called ministers/preachers “speak not according to this
              word,” the Bible says that “it is because there is no light in
              them” (Isaiah 8:20). They are “wind,” writes Jeremiah, “and the
              word is not in them” (Jeremiah 5:13). False preachers “pervert”
              (Jeremiah 23:36) and “wrest” (II Peter 3:16) the words of God;
              they “handl[e] the word of God deceitfully” (II Corinthians 4:2),
              speaking lies and the mere “deceit of their heart” (Jeremiah
              14:14). These, through hatred of God and his word, “steal” God’s
              words from the people (Jeremiah 23:30). Still others may preach
              truth, but not God’s truth, because they do not use God’s word.
              They don’t speak in the words which the Holy Ghost teaches (I
              Corinthians 2:13), “as the oracles of God” (I Peter 4:11). They
              preach their own heart, not the heart of God (see Psalm 40:9-10),
              refusing to preach “the preaching that I [God] bid thee” (Jonah
              3:2). The charge to God’s man is clear: “diminish not a word”
              (Jeremiah 26:2). Through fear, or self-ambition, or neglect, these
              hide and conceal the word of God from the people. Truly those
              preachers who keep back God’s words from the people, either
              through stealing or concealing them, are the cause of the people’s
              destruction (see Lamentations 2:14).
            </p>
          </div>
        </section>
        {/* Soul Winning  */}
        <section
          className="lg:p-7 p-3 bg-gradient-to-r from-blue-100 to-teal-100 text-xl"
          id="soul-winning"
        >
          <div className="flex flex-col" id="soul-winning">
            <h1 className="text-center font-extrabold text-2xl mb-3">
              Soul-Winning and Bible Preaching
            </h1>
            <h3 className="font-bold mb-2">
              <b>Soul-Winning: "Preach the gospel" (Mark 16:15)</b>
            </h3>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              All believers in Christ are commanded to preach to the lost and
              dying world the glorious gospel of the blessed God. If we would be
              personally righteous, we must be like fruitful trees, and if we
              would be practically wise, we must be winners of souls (Proverbs
              11:30). While it is true that our Christian walk can be a profound
              testimony of the power and truth of the gospel to unbelievers (see
              II Corinthians 3:2; I Peter 3:1-2; see also Acts 16:25), yet still
              we must have a faithful Christian talk—to “open” our “mouth”
              (Ephesians 6:19) and preach to others—if others are to trust
              Christ: “how shall they hear without a preacher?” (Romans 10:14).
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              This practice has various Biblical descriptions. It being so
              common to many in Kampala, Uganda, to see us and those we have
              trained explaining the gospel individually, they often say, in
              their local languages one to another, that we are “preaching the
              gospel,” a thoroughly Biblical way about it (see Matthew 9:35;
              Luke 9:6; Acts 8:25; 14:7). Paul wrote, “I am ready to preach the
              gospel” (Romans 1:15). Probably a more formal term would be
              evangelism. Others have understood it as a gracious giving out to
              others what we have ourselves received, and therefore call in
              sharing your faith. Yet still, it can be construed as a bold
              testifying to what God has done for one’s own soul (see Psalm
              66:16), and what he can do for others, and term it witnessing (see
              Acts 1:8). But we best like to call it soul-winning, where we
              “labor together with God” (I Corinthians 3:9) in winning a soul to
              Jesus. In this way, we see a strong imperative for the Christian:
              “Others save with fear, pulling them out of the fire, hating even
              the garment spotted by the flesh” (Jude 23)
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Anybody can, and everybody should, win souls. It doesn’t matter if
              you had been a promiscuous, pagan woman (like the woman at the
              well; see John 4), nor if you were a cowardly, carnal Christian
              (like Peter), nor even if you were the most notorious persecutor
              of the people of God (like Paul). The word of God is the same to
              you as it was in Jesus’ parable: “Son, go work to day in my
              vineyard” (Matthew 21:28)! It is therefore a heavy and prevailing
              influence of this ministry, to always be doing the “first works”
              of evangelism (Revelation 2:5). We ought to set apart time in our
              life to regularly, thoughtfully, and personally tell the gospel to
              others. This is better learned by experience soul-winning with a
              mature soul-winner, and it is our sincere desire that you would
              learn and live the life of a soul-winning Christian. May the
              example and teaching of this ministry be a help and encouragement
              to you as we “strive together for the faith of the gospel”
              (Philippians 1:27).
            </p>
            <br />
            <h2 className=" font-bold mb-2">
              <b> Bible Preaching: “Preach the word” (II Timothy 4:2)</b>
            </h2>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Throughout redemptive history, God has prepared and called
              particular men to fully devote themselves to the public
              proclamation, exposition, and ministration of the word of God. The
              apostles’ early decision to “give ourselves continually to the
              ministry of the word and prayer” (Acts 6:4) is a good
              preoccupation that this calling entails. God’s usual New Testament
              means of propagating his truth to the world and inculcating his
              word in the believers is through the office-gifts of evangelists
              and pastor-teachers, “for the perfecting of the saints, for the
              work of the ministry, for the edifying of the body of Christ” (see
              Ephesians 4:11-13). The churches of God are expected to be, above
              all else, heralds of and instructors in the Bible (see Jeremiah
              3:15; Acts 20:28; I Peter 5:1-3).
            </p>
            <br />
            <p className=" lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              God has appointed (or, ordained) gospel co-laborers and Biblical
              under-shepherds to increase his church in its quantity and
              quality, to grow the kingdom of God and to feed the sheep of God.
              If it is the engrafted word which saves (James 1:21), then it is
              also the sword of the word that reforms (Hebrews 4:12), the
              washing of the word that cleanses (Ephesians 5:26), and the milk
              of the word that grows (I Peter 2:2). A sober charge to keep have
              all servants of the Head, Christ Jesus, who are given the solemn
              duty to “preach the word.” They have the awesome responsibility,
              week after week, of providing a well-balanced and much-needed
              spiritual diet to the children of God, among whom and to whom they
              minister as servant-leaders. This has the most familiar expression
              in the preparation and preaching of sermons in a church setting,
              without which the people of God have nowhere to turn for corporate
              Christian worship, continuous Christian growth, community
              Christian fellowship, and committed Christian service. This pillar
              of a successful ministry, then, is also paramount in this very
              ministry, where a high emphasis is put on the continued preaching
              and teaching of the Bible.
            </p>
          </div>
        </section>
        {/* Ministry Results  */}
        <section
          className="lg:p-7 p-3 bg-gradient-to-r from-blue-200 to-teal-200 text-xl"
          id="ministry-results"
        >
          <div className="" id="ministryResults">
            <h1 className="text-center font-extrabold text-2xl mb-3">
              Ministry Results
            </h1>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Because Baptist for Africa’s mission work initially began and
              currently consists exclusively with the immediate, measurable
              effects of the local ministry conducted by the McPhaill brothers
              in Kampala, Uganda, it is this particular ministry that will, in
              whole, be examined. It is expected that this work will slowly grow
              over the next few years, and will, God willing, blaze abroad a
              mighty and massive movement for Christ, and that this will give
              occasion to broaden the “results” beyond what is here noted.
            </p>
            <br />
            <h1 className="font-bold ">
              A 4.5-Year Total: August 2019-August 2022:
            </h1>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Although the McPhaill brothers arrived in Uganda in June of 2019,
              it took a couple months to become acclimated to soul-winning in
              Africa and to develop effective follow-up, discipleship, and
              soul-winning training methods, which have been further refined
              over time. Largely ignoring the preliminary soul-winning (a couple
              hundred professions of faith), church-attendances (approximately
              11 persons), and evangelistic training (a few persons once or
              twice instructed out soul-winning) which occurred June-July 2019,
              then, here is a succinct summary of the past 3 years of work.
              Future results can be learned about through our monthly letters
              (please email your request to receive them), and this webpage will
              be edited yearly to reflect the ongoing total (4-year total in
              August 2023, 5-year total in August 2024, etc.). For a glimpse
              into the contexts these labors were accomplished in, see the About
              the Evangelists page
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              To understand these results, one must know the following. First,
              “professions of faith” means persons to whom an individual gospel
              presentation of 10-20 minutes was given, and who decided to put
              their faith in Jesus and prayed to trust him as the Savior.
              Second, “baptisms” are people who, having coming to church and
              (usually) many discipleship lessons, and who evidence a belief in
              the true gospel by clear and sound profession, are baptized by
              immersion before many witnesses. Third, we use attendance of
              “discipleship lessons” as a measurement of the third part of the
              Great Commission because it is only then that we record who and
              how many people came (i.e., church services have a total number
              recorded each time, but it is impossible to know who all came to
              them, thus complicating any attempt at estimating effectiveness).
              Also, using a standardized teaching system (for us, ten
              “discipleship lesson”) allows both us and outsiders to see the
              amount of content new converts are getting before they (as most)
              stop attending church. But of course, just because we no longer
              see them in church does not mean they are not believers, nor that
              they are entirely inert. Indeed, we often learn of people we have
              significantly ministered to who are faithfully serving Christ
              elsewhere. Thus, instead of a simple number of church members,
              which can be highly misleading, one gets a better picture of these
              labors in Africa.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Some might object to quantifying and counting these results, and
              wave it off as arrogance and pride. But setting aside the fact
              that the authors of the Bible do essentially the same thing we
              here have done in recording and displaying numbers (see Acts 2:41;
              4:4), there is simply no other way to reliably and objectively
              measure the effects of a ministry. There is not the least bit of
              pride or any other vice inherent in our relaying of this
              information. We are sure those who become genuinely acquainted
              with our service in Africa will have none of the evil perceptions
              that attend so many hostile persons to the work of God. Of course,
              as with anything we do for God, we give all thanks and praise to
              him, who has worked in us “both to will and to do of his good
              pleasure” (Philippians 2:13).
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              <b>Psalms 115:1</b>:{" "}
              <i>
                {" "}
                " Not unto us, O LORD, not unto us, but unto thy name give
                glory, for thy mercy, and for thy truth’s sake. "
              </i>
            </p>
            <br />
            <h1 className="font-bold  ">Table of the 4.5-Year Result Totals</h1>
            <br />
            <div className="md:grid grid-cols-2 gap-6 p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg mb-3">
              <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="font-bold  ">Evangelism</h1>
                <ul className="list-disc pl-7 p-3 ">
                  <li>
                    {" "}
                    Total Persons Personally Presented with the Gospel:
                    approximately 45,000 (This number is estimated from
                    statistical averages){" "}
                  </li>
                  <li>Total Professions of Faith: approximately 31,000</li>
                  <li>
                    Exact Numbers:
                    <ol className="list-decimal pl-7">
                      <li>Of Full-Time Evangelists (Jesse and John): 8,775</li>
                      <li>Of All Trained Soul-Winners: 22,362</li>
                    </ol>
                  </li>
                </ul>
              </div>
              <div className="w-auto h-auto mt-3 rounded-lg">
                <img
                  src={soulwinning}
                  alt="aboutus"
                  className="p-4 w-full max-h-96 rounded-lg"
                />
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-6 p-5 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg mb-3">
              <div className="flex flex-col justify-center ">
                <h1 className="font-bold  ">Baptism</h1>
                <ul className="list-disc  pl-7">
                  <li>
                    Total Baptisms of New Believers: <b>554 </b>
                  </li>
                </ul>
                <h1 className="font-bold  mt-7">Discipleship</h1>
                <ul className="list-disc pl-7 p-3 ">
                  <li>
                    Total Number of Persons Which Began Discipleship Lessons: ~{" "}
                    <b>2,000</b>
                  </li>

                  <ol className="list-decimal pl-7 m-6">
                    <li>Only one lesson: ~40%</li>
                    <li>Some lessons: ~ 35%</li>
                    <li>Most lessons: ~10% </li>
                    <li>
                      Completion of all lessons: ~{" "}
                      <b>15% (or, about 300 people)</b>
                    </li>
                  </ol>
                  <li>
                    Total Number of Persons Trained to be Soul-Winners: about
                    115
                  </li>
                </ul>
                <div className="">
                  <p className="">
                    {" "}
                    About 50 (or, nearly half of all) of them were currently
                    still faithfully attending church and soul-winning with us,
                    as of August 2022.
                  </p>
                  <br />
                </div>
              </div>
              <div className="w-auto h-auto mt-3 rounded-lg">
                <img
                  src={baptism_image_1}
                  alt="aboutus"
                  className="pl-5 w-auto h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg mb-3">
              Beyond all of these definite labors in the Great Commission,
              insofar as it is able to be diagrammed, there is a strong, stable
              church which has been officially congregating and operating since
              December 2021, Bible Baptist Church. The countless lives which
              have been transformed by the spiritual service of the leaders and
              servants in the church is truly breathtaking, and ultimately
              defies quantification. What is the value of a soul? What would one
              be willing to give to turn another to righteousness? Of what cost
              can a life-changing sermon be valued at? Who may estimate the
              instruction, prayer, guidance, and love that a Biblical leader
              regularly has for the sheep of God in his care? In all these
              things, may God be the more and more glorified, and may he be
              pleased to “increase the fruits of” our “righteousness” (II
              Corinthians 9:10), that the light of gospel in Africa may be as
              “the shining light, that shineth more and more unto the perfect
              day” (Proverbs 4:18).
            </p>
          </div>
        </section>
        {/* Ministry Projections  */}
        <section
          className="lg:p-7 p-3 bg-gradient-to-r from-blue-100 to-teal-100 text-xl"
          id="ministry-projections"
        >
          <div className=" mt-7" id="ministryProjections">
            <h1 className="text-center font-extrabold text-2xl mb-4">
              Ministry Projections
            </h1>
            <br />
            <p className=" lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              We pray and hope to be used by God to begin and finish a
              continent-wide evangelization of Africa. Despite the fact that a
              high volume (many hundreds) of missionaries who profess the true
              gospel have been and are currently working in countries all over
              Africa, the experience and investigations of Baptists for Africa
              have found that very few Africans believe, or have even been
              reached with the true, Biblical gospel. Therefore, most of Africa
              is currently in darkness spiritually, and has great need (and
              presents great opportunity) of missionaries/evangelists to bring
              the gospel of eternal salvation by faith to them. We have made it
              our life-goal to see to it, as much as lies in us, that this is
              accomplished.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Acts 20:24: But none of these things move me, neither count I my
              life dear unto myself, so that I might finish my course with joy,
              and the ministry, which I have received of the Lord Jesus, to
              testify the gospel of the grace of God.
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Ephesians 3:8-9: Unto me, who am less than the least of all
              saints, is this grace given, that I should preach among the
              Gentiles the unsearchable riches of Christ;9 And to make all men
              see what is the fellowship of the mystery, which from the
              beginning of the world hath been hid in God, who created all
              things by Jesus Christ.
            </p>
          </div>
        </section>
        {/* Battle Plan for Africa  */}
        <section
          className="lg:p-7 p-3 bg-gradient-to-r from-blue-200 to-teal-200  text-xl"
          id="battle-plan-for-africa"
        >
          <div className="" id="">
            <h1 className="text-center font-extrabold text-2xl">
              Battle Plan for Africa
            </h1>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              <i>
                <b>II Chronicles 16:8:</b> “Were not the Ethiopians and the
                Lubims a huge host, with very many chariots and horsemen? yet,
                because thou didst rely on the LORD, he delivered them into
                thine hand.
              </i>
            </p>
            <br />
            <p className=" lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              How exactly does one go about evangelizing an entire continent,
              the size of which is greater than the USA, Europe, and China
              combined, and the population of which is projected by 2050 to be
              at 2.5 billion people? It certainly does not help matters that
              Africa has historically proved a formidable challenge to
              missionaries the world over, with its estimated 1,000-2,000
              languages, its extreme poverty (Africa is statistically the
              poorest continent on the planet) and, therefore, lack of
              education, and its panoply of debilitating, often fatal diseases
              (e.g. malaria), which have successfully barred a large percentage
              of expatriates attempting to labor therein. It is said of the
              European colonization of America that the Native Americans could
              not endure the guns nor the diseases of the colonists—a vast swath
              of their population was decimated by colonization and U.S.
              expansion. But what a wonder that Africa has largely withstood the
              colonial tide on its own turf, and is still mostly, south of the
              Sahara, “Black Africa.” Africa is very much the continent that
              killed its colonizers. Who can stand before the children of Cush!
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              But will the harvest be past, the summer be ended, and they still
              be not saved? It is beyond sad to report that Africa, for all the
              fanciful, dreamy, and traditional representations of it as the
              neediest continent (spiritually as well as economically), and for
              all the drummed-up missionary fervor about it, has largely stood
              ominously and endlessly, eyes failing with longing, having arms
              widely outstretched in earnest, as it were, which beckons with
              mournful pleas to all of true Christendom, “Come over into Africa,
              and help us.”
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              It is God’s will that there would be believers in heaven who form
              “a great multitude, which no man could number, of all nations, and
              kindreds, and people, and tongues” (Revelation 7:9). The heart of
              God goes out to all people, willing their salvation (I Timothy
              2:4; II Peter 3:9). As children of God, we ought to share our
              Father’s vision (Luke 2:49), and have a big spiritual goal for our
              lives. Caleb expressed his zeal for God in both his confident
              statement about the Israelites being “well able to overcome” the
              Canaanites (Numbers 13:30), and in his bold claim on the land
              promised him of God: “Give me this mountain” (Joshua 14:12).
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              Isaiah 7:11-13: Ask thee a sign of the Lord thy God; ask it either
              in the depth, or in the height above.12 But Ahaz said, I will not
              ask, neither will I tempt the Lord.13 And he said, Hear ye now, O
              house of David; Is it a small thing for you to weary men, but will
              ye weary my God also?
            </p>
            <br />
            <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
              As Christ’s soldiers and ambassadors, we ought to have a view to
              spiritually “conquering” the world in our generation with the
              truth of the gospel message (see Psalm 71:17-18), to extending the
              gospel’s saving influence to all people.
            </p>
            <br /> <br />
            <div className="">
              <h1 className=" font-bold">
                The Model for Complete Evangelization of Africa.
              </h1>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                DEF. “Complete evangelization”: Every person in a designated
                area (e.g., the continent of Africa) and time (e.g., the second
                and third generations of the 21st century) has been personally
                offered the gospel at least once by an able soul-winner.
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                To better see how to bring the gospel to all of Africa, we must
                understand the current situation Africa is in, and, from this
                data, make observations about the viability of such a plan. We
                must sit down first, and count the cost (see Luke 14:28).
              </p>
              <br />
              <h1 className=" font-bold m-5 ">Africa's Demographics</h1>
              <ul className="list-decimal  pl-2 lg:pl-5">
                <li className="font-bold pl-3 lg:pl-0">
                  Africa’s Population and Population Distribution
                </li>
                <div className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <p className="lg:flex justify-center items-center">
                    Africa in 2022 has an approximate population of 1.4 billion
                    people. By 2050, it is estimated that Africa’s total
                    population will be approximately 2.5 billion. There are
                    apparently five “population clusters” in Africa (in the
                    north, north-east, south, east, and west) where the majority
                    of the inhabitants of the continent reside. Three of them
                    lie within the Sub-Saharan region. With urbanization and
                    better development of cities, we can expect population
                    growth to largely center on these clusters, and, indeed, to
                    make them more concentrated with people to preach to.
                  </p>
                  <img
                    src={afriPopDensity}
                    alt=""
                    className="rounded-xl lg:h-96 w-full"
                  />
                </div>
                <br />
                <li className="font-bold">Africa’s Population Age.</li>
                <div className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <p className="flex justify-center items-center lg:text-2xl">
                    Africa’s inhabitants are predominately young: age 0-14
                    (~40%); age 15-24 (~20%); age 25-64 (35%). This means that,
                    at the present time, the greater majority of Africans are at
                    (or will soon reach) a receptive age.
                  </p>
                  <img
                    src={afriAge}
                    alt=""
                    className="rounded-xl h-96 w-full"
                  />
                </div>
                <br />
                <li className="font-bold">Africa's Religiosity</li>
                <div className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <p className="flex justify-center items-center">
                    While the northern regions of Africa are predominately
                    Muslim (and devout Muslims are greatly unreceptive to the
                    gospel), most of the countries that lie in the Sub-Saharan
                    region of Africa are predominately Christian. This makes
                    them more open to the true gospel, and therefore very
                    opportune fields for evangelism. For example, consider the
                    following charts of a few countries of Sub-Saharan Africa:
                  </p>
                  <img
                    src={AfriReligiosity}
                    alt=""
                    className="rounded-xl w-full h-96"
                  />
                </div>
              </ul>

              <br />
              <h1 className=" font-bold m-5">
                The Receptive African City Evangelization Model
              </h1>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg gap-4">
                There are a few problems that present themselves with
                evangelizing a continent. Keep in mind that we are assuming a
                ground-zero, grassroots starting ground. One problem, already
                discussed, is the population problem: how do we get the gospel
                to a widely disbursed people? Another is the language problem:
                how do we preach the gospel to people with diverse and difficult
                languages from our own? Yet still another, often overlooked,
                problem is the religion problem: how do we effectively convert
                people of other religions (e.g., Islam, animism, etc.) to
                Christianity? Interestingly, all of these problems are, to a
                great degree, solved by what we will here call the Receptive
                African City Evangelization (or, “RACE”) model.
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                Note first that whatever happens in a big city has a more
                significant impact on the entire population of, say, a nation
                than what happens in more remote areas. Jesus’ death was all the
                more known, and “not done in a corner” (Acts 26:26), partly
                because it transpired in the renowned and ancient city of
                Jerusalem. When the apostle Paul wrote to the Roman Christians,
                brethren who, by his admission, he, for the most part, had never
                met, he seemed greatly acquainted with them as if he had been
                their close friend. It might have something to do with the fact
                that their church was located in the very capital of the Roman
                empire, that “your faith is spoken of throughout the whole
                world” (Romans 1:8). The Thessalonian believers (congregating
                surely in that large city they are named by) had also a godly
                testimony which “sounded out” from them and “spread abroad” to
                many others (I Thessalonians 1:8). A notable evangelist of the
                nineteenth century, D. L. Moody, when theorizing how to best
                evangelize all of the U.S., proposed that revival campaigns be
                held in the biggest cities. He reasoned like this: “Water runs
                downhill, and the highest hills in America are the great cities.
                If we can stir them we shall stir the whole country.”
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                The evangelization of the first-century world presumably
                proceeded on this assumption. The apostles early on spent a
                great deal of time in Jerusalem, which afforded them countless
                opportunities to preach to the many pilgrims (especially at
                feast days) and merchantmen who would visit or pass through/by
                the city in the droves. We observe Phillip conducting his great
                revival in Sebaste of Samaria (see Acts 8:5), and it doesn’t
                take long for the apostles at Jerusalem to hear about it (Acts
                8:14). And we see none other than Paul pleased to spend most of
                his time in big cities (Ephesus, Athens, Corinth, etc.). It
                seems that it is best, if we are to evangelize this mighty
                continent, that we succor them out of the city
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                Like the distinction between the rural and the urban in
                societies, Africa retains a strong bifurcation of its populace
                between city-dwellers (urban) and village-dwellers (rural). In
                and around big cities, there are massive populations often in
                the millions, groups large enough to reach and train up for work
                in outlying, smaller areas. This solves the population problem.
                Those who are near to or who reside in a city (as opposed to a
                simple village), and those who are younger (those who grew up in
                or slightly before the 21st century), are more likely to be
                educated and effectively able to communicate with ease in a
                Western language (e.g., English), with a Westerner (e.g., an
                American). Thus, people can be won to Christ and trained in,
                say, English, and many of those same people (being native
                Africans) can bring the gospel to those of their countrymen,
                whose native language they speak. This solves the language
                problem. And if we restrict our scope (at least for the first
                couple decades) to Sub-Saharan Africa, most urban centers there
                are highly Christian (though, of course, unsaved) by proportion.
                This solves the religion problem.
              </p>

              <h1 className=" font-bold m-5">The Spiritual Future of Africa</h1>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                For every soul to hear the gospel in Sub-Saharan Africa, it
                would take many, many millions of soul-winning hours. But
                because the labor is gradated by an ever-increasing labor force,
                the hours accomplished each year grow, not in a direct
                proportionality, but exponentially. The “experiment of
                ministration” to reach all of Sub-Saharan Africa with the true
                gospel, therefore, after just a few years of preparatory gospel
                work, does not merely add, but multiplies. This “multiplication”
                is indeed what the early believers in the book of Acts
                experienced (see Acts 6:1, 7; 9:31), and it is what should be
                expected after a relatively brief (5-10 years) incubation period
                of growth. Jesus famously compared the kingdom of God the
                kingdom of God to “a grain of mustard seed,” in that it begins
                very small, but within a little time, and under the right
                conditions, can grow into something quite grand.
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                Matthew 13:32: Which indeed is the least of all seeds: but when
                it is grown, it is the greatest among herbs, and becometh a
                tree, so that the birds of the air come and lodge in the
                branches thereof.
              </p>
              <br />
              <h1 className=" font-bold">Illustration of Exponential Growth</h1>
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                To get a glimpse at how a massive task (e.g., evangelizing
                billions of people) can be accomplished in a relatively short
                window of time (e.g., 50 years), consider the following thought
                experiment. Suppose that we begin a 50-year time frame with just
                2 evangelists that are actively soul-winning, discipling,
                preaching sermons, and training others in soul-winning (which is
                actually what we have right now). And suppose that these 2
                evangelists are only able to make 1 other person each just like
                themselves every 5 years, to make someone who does what they do,
                in the way they do it, and with the zeal that they do it—others
                who themselves, in five years of time, will be able to make 1
                other person like themselves.
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                This replication model follows an exponential equation. After 5
                years, there would be 4 evangelists (4 total: the 2 we began
                with (ourselves), and 2 more made). After 10 years, there would
                be 8 (each of us 4 made 1 evangelist each, equaling a total of
                8). After 15 years, there would be 16. After 20 years, there
                would be 32. After 25 years, there would be 64. After 30 years,
                there would be 128. After 35 years, there would be 256. After 40
                years, there would be 512. After 45 years, there would be 1,024.
                And after 50 years, there would be 2,048. Observe that we are
                using a very moderate and excessively conservative
                scale—contrast with how most people who theorize in this way do
                so in a ridiculous and unrealistic manner; e.g., 1 new person
                added every year, per person. In fact, we have permitted so wide
                of a buffer range that it may seem we are being far too
                pessimistic! For instance, is it accurate to believe that after
                10 years of our labor here in Africa, there will only be 6 other
                full-time evangelists like ourselves, when, in reality, after
                only about 3 years we have foretastes of perhaps double that in
                the next few years? Only time will tell.
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                Let us assume this is precisely what will happen, though. All of
                this is to say, then, that by having a ministry devoted to the
                Great Commission, and intentionally training people for
                evangelistic work (and all the skills and experience which is
                requisite for it), it is not unreasonable to suppose that within
                a couple generations of time, if God spare our lives and bless
                our work (as we hope he shall), and if he tarry his second
                coming, within 50 years, we can expect to see well-over 2,000
                full-time evangelists running about that many churches in all of
                the major cities and high population areas of Africa. This is
                probably far more than enough for “complete evangelization.” And
                of course, just like Bible Baptist Church in Uganda currently,
                those churches will be soul-winning powerhouses, with dozens to
                hundreds of soul-winners, who, as individual churches, see tens
                of thousands of people led to Christ each year. Consider the
                hundreds to thousands of soul-winning missions such churches
                must at that time (in the hypothetical 2070s) be leading each
                year, and the innumerable multitude of persons they will have
                trained in soul-winning who continue the work of evangelism in
                Africa quite apart from them (like we experience in some sense
                even now). How could Africa not be evangelized in our lifetime?
              </p>
              <br />
              <p className="lg:p-5 p-3 bg-white bg-opacity-65 shadow-lg shadow-white-500/50  hover:font-bold hover:p-7 hover:shadow-teal-400 rounded-lg">
                Psalm 67:1-2: God be merciful unto us, and bless us; and cause
                his face to shine upon us; Selah.2 That thy way may be known
                upon earth, thy saving health among all nations.
              </p>
            </div>
          </div>
        </section>
        <BackToTopButton />
        <Footers />
      </main>
    </HelmetProvider>
  );
};

export default AboutTheMinistry;
