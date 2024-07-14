import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import phone_bg from "../assets/images/contact.jpg";
import email_bg from "../assets/images/email-bg.jpg";
import BackToTopButton from "../constants/back-to-top-btn";
import {
  FaLocationDot,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import contact from "../assets/images/contact-image-removebg-preview.png";

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
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";
import contactImage from "../assets/images/contactImage.jpg";

export default function Contacts() {
  const customId = "contact-notify-1";
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl} 


  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
  function onChange(value) {
    handleRecaptchaChange();
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("sending...");
    axios
      .post(`${apiUrl}contact-form`, formData)
      .then((response) => {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Error sending message");
        console.error(error);
      });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Contacts | Baptists for Africa`}</title>
        </Helmet>
        <Navbar2 />
        <PageHead name="Contacts" page_image={contactImage}/>
        <section className="p-4 lg:p-7 bg-gradient-to-r from-blue-100 to-teal-100">
          <div className="">
            <h1 className="font-extrabold text-3xl lg:text-[50px] text-center m-5">
              Contact Us
            </h1>
            <p className="text-center text-[20px] m-5">
              Below are some of our contacts to reach to us and inquire of
              anything regarding the ministry, you can also send us a message
              directly via email below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4  p-3 lg:p-5 bg-white bg-opacity-70 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col  size-full justify-center p-3 lg:p-5 gap-4 ">
                  <h1 className="font-extrabold text-[20px]">Get In Touch</h1>
                  <p className="">We are here to help! Leave us a message</p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg w-full"
                    placeholder="Enter the subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className="pl-4 lg:pl-7 bg-gray-100 h-36 rounded-lg"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button
                    className={`w-full p-3 text-white rounded-lg ${
                      !recaptchaToken ? " bg-red-600" : " bg-teal-500"
                    }`}
                    type="submit"
                    disabled={!recaptchaToken}
                  >
                    {!recaptchaToken ? "Complete Recaptcha first!" : "SUBMIT"}
                  </button>
                  <NotificationHandler customId={customId} />
                  {/* notification */}
                  <div className="flex items-center justify-center ">
                    <ReCAPTCHA
                      sitekey="6Lf9meMpAAAAAKvhxH8YFAMccUahJjaxgCK2VnHv"
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                </div>
              </form>

              <div className="w-full grid grid-cols-1 p-3 lg:p-5 gap-4">
                <div className="w-full flex-col h-72 order:first">
                  <iframe
                    frameborder="0"
                    className="rounded-lg w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.761488524325!2d32.605729!3d0.305814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd922f519a6f%3A0xb3ec2fc3ccff2c14!2sBible%20Baptist%20Church%20of%20Baptists%20for%20Africa!5e0!3m2!1sen!2sug!4v1700905465741!5m2!1sen!2sug"
                    allowfullscreen=""
                  ></iframe>
                </div>
                <div className="w-full flex flex-col gap-5 order:last">
                  <div className="flex gap-4 items-center">
                    <div className="border-2  border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
                      <FaLocationDot />
                    </div>
                    <h1>Ntale Road, Kampala-Uganda</h1>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="border-2  border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
                      <CallIcon />
                    </div>
                    <a
                      href="tel:+256-702207220"
                      className="hover:text-blue-200"
                    >
                      <h1>Jesse McPaul: +256-702207220</h1>{" "}
                    </a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="border-2  border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
                      <CallIcon />
                    </div>
                    <a
                      href="tel:+256-708797133"
                      className="hover:text-blue-200"
                    >
                      <h1>John McPaul: +256-708797133</h1>
                    </a>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="border-2  border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
                      <EmailIcon />
                    </div>
                    <h1>
                      <a
                        href="mailto:baptistsforafrica@gmail.com"
                        className="hover:text-blue-200"
                      >
                        baptistsforafrica@gmail.com
                      </a>
                    </h1>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center size-8 rounded-full shadow-md border-2 border-teal-400 text-teal-400"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="http://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center size-8 rounded-full shadow-md border-2 border-teal-400 text-teal-400"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center size-8 rounded-full shadow-md border-2 border-teal-400 text-teal-400"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center size-8 rounded-full shadow-md border-2 border-teal-400 text-teal-400"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BackToTopButton />
        <Footers />
      </HelmetProvider>
    </>
  );
}
