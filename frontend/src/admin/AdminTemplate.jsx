import React from "react";
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
import SearchBtn from "../constants/SearchBtn";
import SidebarAdmin from "./SidebarAdmin";

const AdminTemplate = ({children, pageTitle }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${pageTitle} | Baptists for Africa`}</title>
        </Helmet>

        <section className="bg-gray-200 flex">
          <SidebarAdmin />

          {/* MAIN BODY SECTIONS: */}
          <main className="bg-gray-200 w-full">
            {/* PAGE SECTION DETAILS */}
            <section className="p-5 flex justify-center items-center bg-white w-full">
              <SearchBtn />
            </section>
            {/* MAIN PAGE CONTENT  */}
            <section className="">{children}</section>
          </main>
        </section>
        <BackToTopButton/>
      </HelmetProvider>
    </>
  );
};

export default AdminTemplate;
