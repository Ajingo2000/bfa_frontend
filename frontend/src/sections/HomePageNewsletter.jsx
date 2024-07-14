import React, { useState } from "react";
import Email from "@mui/icons-material/Email";
import toast from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";

const HomePageNewsletter = () => {
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}
  const customId = "newsletter-notification-1";
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Subscription pending...");
    try {
      const response = await fetch(`${apiUrl}subscription/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Subscription successful!");
      } else {
        toast.error(`Subscription failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      toast.error("Subscription failed: Network error");
    }
  };

  return (
    <div className="p-5 m-5 text-center">
      <h1 className="font-extrabold text-[50px]">Newsletter</h1>
      <p className="text-[20px]">
        Hey, there, I hope you enjoy our content. We write personal devotions,
        Bible Questions as well as Spiritual texts. Subscribe to our newsletter
        to keep up to date with the latest blog posts.
      </p>
      <div className="mt-5 flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex justify-center items-center w-full"
        >
          <div className="lg:w-[75%] w-[80%]">
            <input
              type="email"
              name="email"
              className="border w-full h-16 shadow p-4 rounded-l-lg dark:text-gray-800 outline-none focus:outline-teal-300 dark:border-teal-100 dark:bg-gray-100"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <Email className="text-teal-500 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-blue-300" />
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="p-2 rounded-r-lg h-16 text-white bg-teal-400"
            >
              Subscribe
            </button>
            <NotificationHandler customId={customId} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePageNewsletter;
