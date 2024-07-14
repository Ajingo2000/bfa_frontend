import React from "react";
import headerLogo from "../assets/images/bfa-logo-80x80.png";
import { Link } from "react-router-dom";
export default function BfaDiv() {
  const socialIcons = [
    {
      name: "logo-twitter",
      link: " ",
    },
    {
      name: "logo-facebook",
      link: " ",
    },
    {
      name: "logo-youtube",
      link: " ",
    },
    {
      name: "logo-instagram",
      link: " ",
    },
    {
      name: "logo-google",
      link: " ",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500 shadow-xl ">
        <h1 className="font-bold text-xl">Baptists for Africa</h1>
        <img
          src={headerLogo}
          alt=""
          className="h-32 border-4 border-teal-500 rounded-full outline-teal-500 p-2"
        />
        <p className="">
          Baptists for Africa is an independent Baptist, church-planting mission
          in Africa, currently based in Uganda, operating particularly within
          the capital city of Kampala, based in Kisugu along Ntale Road, which is located in
          Kampala’s southern division (of four city-wide divisions), Makindye.
        </p>
        <div className="flex gap-7">
          {socialIcons.map((icon, index) => (
            <Link to="/" className="mt" key={index}>
              <ion-icon name={icon.name} style={{ color: "black" }}></ion-icon>
            </Link>
          ))}
        </div>

        <button className="bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 rounded-xl p-3">
          About Us
        </button>
      </div>
    </>
  );
}
