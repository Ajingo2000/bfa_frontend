import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRouteError } from "react-router-dom";
import { Navbar2, PageHead, Footers } from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Error Page | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="ERROR PAGE" />
        <section className="bg-gradient-to-r from-gray-200 to-blue-200 w-full h-96">
          <div className="text-black p-7 max-h-96 h-92">
            <h1 className="heading-special-mono text-center text-3xl mt-7">
              ERROR PAGE
            </h1>
            {error && (
              <div className="text-center mt-4 flex gap-4 justify-center items-center">
                <p className="font-extrabold  ">Error Code: {error.status}</p>
                <p>{error.statusText || error.message}</p>
              </div>
            )}
          </div>
          <div className="shapedividers_com-3176 h-24 w-full -bottom-[120px]"></div>
        </section>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
