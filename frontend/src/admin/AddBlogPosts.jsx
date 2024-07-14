import React, { useState, useEffect } from "react";
import AdminTemplate from "./AdminTemplate";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";
import MultiSelectDiv from "../constants/MultiSelectDiv";
import slugify from "react-slugify";
import QuillEditor from "../constants/QuillEditor";
import DraftEditor from "../constants/DraftjsEditor";

const AddBlogPosts = () => {
  const customId = "contact-notify-1";
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}

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
    <AdminTemplate pageTitle={"Add BlogPosts"}>
      <main className="px-4 lg:px-14 size-full">
        <section className="mt-10 flex flex-col border rounded-xl shadow-xl bg-white size-full">
          <section className="text-bold text-2xl flex  items-center gap-5  p-4 border-b-2 rounded-t-xl size-full">
            <AddCircleIcon />
            <p className="">ADD BLOG POST.</p>
          </section>

          {/* FORMS SECTIONS// / */}
          <section className="">
            <div className="flex flex-col p-4 gap-4">
              <input
                type="text"
                name="name"
                id=""
                className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                placeholder="Enter title"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                id=""
                className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                placeholder="Enter slug"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="flex">
                <p className="p-3 font-bold bg-white rounded-l-lg border  ">
                  Image
                </p>
                <div className="size-full p-3  accent-white flex justify-center items-center rounded-r-lg border ">
                  <input
                    type="file"
                    name=""
                    id=""
                    className="size-full "
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="pl-4 lg:pl-7 bg-gray-100 h-36 rounded-lg"
                placeholder="Enter body"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              {/* AUTHORS INPUT */}
              <div className="flex size-full">
                {" "}
                <p className=" rounded-l-lg p-3 bg-white border">Author:</p>
                <div className="size-full flex justify-center items-center  rounded-r-lg">
                  <select
                    name=""
                    id=""
                    className="p-3 bg-gray-200  text-black outline-none size-full"
                  >
                    <option value="" className="outline-none text-black p-3">
                      John
                    </option>
                    <option value="" className="outline-none text-black">
                      Jesse
                    </option>
                  </select>
                </div>
              </div>

              <div className="rounded-lg flex border border-black bg-gray-200 ">
                <p className="p-3 rounded-l-lg border-r border-black bg-white font-bold">
                  Editor's Pick
                </p>
                <div className="pl-10 flex justify-center items-center  rounded-r-lg ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="pl-4 lg:pl-7 bg-gray-200  size-8  rounded-r-lg border border-black"
                  />
                </div>
              </div>

              
                  <MultiSelectDiv api_link={"blog-category"} title={"Category"} />
                  <MultiSelectDiv api_link={"blog-tags"} title={"Tags"} />
                

              {/* <h1>Quill Editor</h1> */}
              <h1>Draft Editor</h1>
              <DraftEditor />

              <div className="flex justify-end">
                <button
                  className={`   p-3  rounded-lg bg-blue-400 `}
                  type="submit"
                ></button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </AdminTemplate>
  );
};

export default AddBlogPosts;
