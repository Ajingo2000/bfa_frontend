import React, { useEffect, useState } from "react";
import selectFile from "../assets/images/select_file.jpg";
import "../App.css";
import { Link, useParams } from "react-router-dom";
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
import { Helmet, HelmetProvider } from "react-helmet-async";
import newconvert from "../assets/images/convert1.jpg";
import BackToTopButton from "../constants/back-to-top-btn";
import MyPDFViewer from "../constants/pdfreader";
import axios from "axios";



const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 

const NewBelieverDocsDetails = () => {
  const [believerDoc, setBelieverDoc] = useState([]);
  const [pdfDoc, setPdfDoc] = useState({});
  const [activeDocument, setActiveDocument] = useState("");
  const [docDetails, setDocDetails] = useState({});
  const slug = useParams().slug;
  console.log(slug);
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBelieverDoc = async () => {
      try {
        const response = await axios.get(`${apiUrl}new-believer-documents/${slug}`);
        setDocDetails(response.data);
      } catch (error) {
        console.error("Error fetching believer documents:", error);
      }
    };

    fetchBelieverDoc();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>New Believer Documents | Baptists for Africa</title>
      </Helmet>
      <>
        <Navbar2 />
        <PageHead name="New Believer Documents" />
        <section className="bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-8 bg-white border-b">
            <div className="px-4">
              <div className="py-2">
                <h1 className="font-extrabold text-2xl uppercase">
                  New Believer Documents
                </h1>
                <p className="py-2 text-xl">
                  These are documents which are designed to be helpful for new
                  believers, ranging in content from a thorough presentation of
                  the gospel to a guide on how to preach the gospel.
                </p>
              </div>
            </div>
            <div className="lg:px-20 px-5 py-5">
              <img src={newconvert} alt="" className="w-full h-40 rounded-md" />
            </div>
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
            <section className="sticky col-span-3 h-full w-full border-r lg:bg-white">
              {/* MOBILE RESPONSIVE DROPDOWN ! */}
              <div className="lg:hidden mx-4 mt-4 p-4 flex flex-col gap-4 justify-center items-center bg-white rounded-md shadow-xl">
                <h1 className="font-bold text-xl">SELECT DOCUMENT TO VIEW </h1>
                <div className="flex rounded-lg">
                  <p className=" rounded-l-lg p-2 bg-teal-400 text-white">
                    SELECT:
                  </p>
                  <select
                    name=""
                    id=""
                    className="rounded-r-lg border-1 bg-gray-200 text-black outline-none "
                    onChange={(e) => setActiveDocument(e.target.value)}
                  >
                    <option
                      value={docDetails.slug}
                      className="outline-none text-black"
                    >
                      {docDetails.name}
                    </option>
                  </select>
                </div>
              </div>
            </section>
            <section className="col-span-9 p-4 lg:p-7 block lg:flex gap-7">
              <section className="p-1 lg:p-4 lg:w-[800px] w-full lg:flex gap-5 box-shadow rounded-xl">
                {docDetails.pdf_doc ? (
                  <div className="min-h-96 w-full">
                    {console.log("Rendering PDF URL:", docDetails.pdf_doc)}{" "}
                    {/* Debugging line */}
                    <MyPDFViewer pdf_url={docDetails.pdf_doc} />
                  </div>
                ) : (
                  <div className="">
                    <p className="hidden lg:block text-center">
                      SELECT OPTION FROM THE LEFT PANEL TO VIEW DOCUMENT
                    </p>
                    <p className="lg:hidden block text-center">
                      SELECT OPTION FROM THE DROP DOWN SELECT TO VIEW DOCUMENT
                    </p>
                    <img
                      src={selectFile}
                      alt=""
                      className="min-h-64 w-full rounded-xl"
                    />
                  </div>
                )}
              </section>
              <section className="flex gap-4">
                
                  <a href={docDetails.pdf_doc} download>
                    <button className="p-2 mt-3 bg-white rounded-xl shadow-xl">
                      Download
                    </button>
                  </a>
            
              </section>
            </section>
          </section>
        </section>
        <BackToTopButton />
        <Footers />
      </>
    </HelmetProvider>
  );
};

export default NewBelieverDocsDetails;
