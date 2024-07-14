import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Footers, Navbar2, PageHead } from "../sections";
import { Helmet, HelmetProvider } from "react-helmet-async";
import newconvert from "../assets/images/convert1.jpg";
import BackToTopButton from "../constants/back-to-top-btn";
import MyPDFViewer from "../constants/pdfreader";
import selectFile from "../assets/images/select_file.jpg";
import selectIconLargeScreen from "../assets/images/large screen Icon.gif";
import selectIconMobile from "../assets/images/Select from the right pannel.gif";


const SoulWinningLessons = () => {
  const [soulWinningDoc, setSoulWinningDoc] = useState([]);
  const [pdfDoc, setPdfDoc] = useState({});
  const [activeDocument, setActiveDocument] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  


  useEffect(() => {
    const fetchSoulwinningDoc = async () => {
      try {
        const response = await axios.get(`${apiUrl}soul-winning-lessons`);
        setSoulWinningDoc(response.data);
      } catch (error) {
        console.error("Error fetching Soul winning documents:", error);
      }
    };

    fetchSoulwinningDoc();
  }, []);

  useEffect(() => {
    if (activeDocument) {
      const fetchPdfDoc = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}soul-winning-lessons/${activeDocument}`
          );
          console.log(response.data); // Debugging line
          setPdfDoc(response.data);
        } catch (error) {
          console.error("Error fetching PDF document:", error);
        }
      };

      fetchPdfDoc();
    }
  }, [activeDocument]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soul Winning Lessons | Baptists for Africa</title>
        </Helmet>
        <>
          <Navbar2 />
          <PageHead name="Soul Winning Lessons" />
          <section className="bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-8 bg-white border-b">
              <div className="px-4">
                <div className="py-2">
                  <h1 className="font-extrabold text-2xl uppercase">
                    SOUL WINNING DOCUMENT LESSONS
                  </h1>
                  <p className="py-2 text-xl">
                    These are documents which are designed to be helpful for new
                    believers, ranging in content from a thorough presentation
                    of the gospel to a guide on how to preach the gospel.
                  </p>
                </div>
              </div>
              <div className="lg:px-20 px-5 py-5">
                <img
                  src={newconvert}
                  alt=""
                  className="w-full h-40 rounded-md"
                />
              </div>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
              <section className="sticky col-span-3 h-full w-full border-r lg:bg-white">
                <ul className="hidden lg:block lg:w-full">
                  <li className=" hidden lg:block lg:p-2 lg:w-full lg:border-b lg:font-extrabold">
                    SOUL WINNING DOCUMENT LESSONS:
                  </li>
                  {soulWinningDoc.map((doc) => (
                    <li
                      key={doc.slug}
                      className={`hidden lg:p-2 lg:w-full lg:border-b  lg:flex gap-4 lg:hover:bg-gray-200 ${
                        activeDocument === doc.slug ? "lg:bg-gray-200" : ""
                      }`}
                      onClick={() => setActiveDocument(doc.slug)}
                    >
                      <p
                        className={`${
                          activeDocument === doc.slug
                            ? "lg:border-2 lg:border-teal-400"
                            : "lg:border-2 lg:border-gray-300"
                        }`}
                      ></p>
                      {doc.name}
                    </li>
                  ))}
                </ul>
                {/* MOBILE RESPONSIVE DROPDOWN ! */}
                <div className="lg:hidden mx-4 mt-4 p-4 flex flex-col gap-4 justify-center items-center bg-white rounded-md shadow-xl">
                  <h1 className="font-bold text-xl">
                    SELECT DOCUMENT TO VIEW{" "}
                  </h1>
                  <div className="flex rounded-lg">
                    {" "}
                    <p className=" rounded-l-lg p-2 bg-teal-400 text-white">
                      SELECT:
                    </p>
                    <select
                      name=""
                      id=""
                      className="rounded-r-lg border-1 bg-gray-200 text-black outline-none "
                      onChange={(e) => setActiveDocument(e.target.value)}
                    >
                      {soulWinningDoc.map((doc, index) => (
                        <option
                          value={doc.slug}
                          className="outline-none text-black"
                        >
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
              <section className="col-span-9 p-4 lg:p-7 block lg:flex gap-7">
                <section className="p-1 lg:p-4 lg:w-[800px] w-full lg:flex gap-5 box-shadow rounded-xl">
                  {activeDocument ? (
                    pdfDoc.pdf_doc ? (
                      <div className="lg:h-[700px] h-[550px] w-full">
                        {/* Debugging line */}
                        <MyPDFViewer pdf_url={pdfDoc.pdf_doc} />
                      </div>
                    ) : (
                      <div className="">
                        <p className="hidden lg:block text-center">
                          SELECT OPTION FROM THE LEFT PANEL TO VIEW DOCUMENT
                        </p>
                        <p className="lg:hidden block text-center">
                          SELECT OPTION FROM THE DROP DOWN SELECT TO VIEW
                          DOCUMENT
                        </p>
                        <img
                        src={selectIconLargeScreen}
                        alt=""
                        className="hidden lg:block min-h-64 w-full rounded-xl"
                      />
                      <img
                        src={selectIconMobile}
                        alt=""
                        className="block lg:hidden min-h-64 w-full rounded-xl"
                      />
                      </div>
                    )
                  ) : (
                    <div className="">
                      <p className="hidden lg:block text-center">
                        SELECT OPTION FROM THE LEFT PANEL TO VIEW DOCUMENT
                      </p>
                      <p className="lg:hidden block text-center">
                        SELECT OPTION FROM THE DROP DOWN SELECT TO VIEW DOCUMENT
                      </p>
                      <div className="rounded-md px-10 lg:px-32  my-4">
                      <img
                        src={selectIconLargeScreen}
                        alt=""
                        className="hidden lg:block min-h-64 w-full rounded-xl"
                      />
                      <img
                        src={selectIconMobile}
                        alt=""
                        className="block lg:hidden min-h-64 w-full rounded-xl"
                      />
                      </div>
                    </div>
                  )}
                </section>
                <section className="flex gap-4">
                  {activeDocument && pdfDoc.pdf_doc && (
                    <a href={pdfDoc.pdfDoc} download>
                      <button className="p-2 mt-3 bg-white rounded-xl shadow-xl">
                        Download
                      </button>
                    </a>
                  )}
                </section>
              </section>
            </section>
          </section>
          <BackToTopButton />
          <Footers />
        </>
      </HelmetProvider>
    </>
  );
};

export default SoulWinningLessons;
