import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { FaLocationDot } from "react-icons/fa6";
import contact from "../assets/images/contact-image-removebg-preview.png";
import contact_form_image from "../assets/images/contact-bg-2.jpg";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";

const ContactForm = () => {
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 
  const customId = "contact-notify-1";
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

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
    toast.loading('Sending...');
    axios
      .post(`${apiUrl}contact-form`, { ...formData, recaptchaToken })
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
    <div className="">
      <h1 className="font-extrabold text-[50px] text-center m-5">Contact Us</h1>
      <p className="text-center text-[20px] m-5">
        Below are some of our contacts to reach to us and inquire of anything
        regarding the ministry, you can also send us a message directly via
        email below.
      </p>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 p-5 bg-white bg-opacity-55 rounded-lg shadow-xl"
        style={{
          backgroundImage: `url(${contact_form_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* SUBMIT FORM  */}
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col items-center justify-center p-5 gap-4">
            <h1 className="font-extrabold text-[20px]">Get In Touch</h1>
            <p className="text-lg">We are here to help! Leave us a message</p>
            <input
              type="text"
              name="name"
              className="pl-7 bg-gray-100 h-14 rounded-lg w-full"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="pl-7 bg-gray-100 h-14 rounded-lg w-full"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              className="pl-7 bg-gray-100 h-14 rounded-lg w-full"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="pl-7 bg-gray-100 h-36 rounded-lg w-full"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              className={`w-full p-3 text-white rounded-lg ${!recaptchaToken ? " bg-red-600" : " bg-teal-500"}`}
              type="submit"
              disabled={!recaptchaToken}
            >
              {!recaptchaToken ? "Complete Recaptcha first!" : "SUBMIT" }
            </button>
            <NotificationHandler customId={customId} />
            {/* notification */}
            <ReCAPTCHA
              sitekey="6Lf9meMpAAAAAKvhxH8YFAMccUahJjaxgCK2VnHv"
              onChange={handleRecaptchaChange}
            />
          </div>
        </form>

        <div className="w-full flex flex-col p-5 gap-4 text-xl">
          <img src={contact} alt="" className="w-full h-64 lg:h-80" />
          <div className="flex gap-4 items-center">
            <div className="border-2 border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
              <FaLocationDot />
            </div>
            <h1>Ntale Road, Kampala-Uganda</h1>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
              <CallIcon />
            </div>
            <a href="tel:+256-702207220" className="hover:text-blue-200">
              <h1>Jesse McPaul: +256-702207220</h1>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
              <CallIcon />
            </div>
            <a href="tel:+256-708797133" className="hover:text-blue-200">
              <h1>John McPaul: +256-708797133</h1>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-2 border-teal-500 text-teal-500 rounded-full flex justify-center items-center size-10">
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
      </div>
      
    </div>
  );
};

export default ContactForm;
