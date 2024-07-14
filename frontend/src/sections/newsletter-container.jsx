import React, { useState, useEffect } from "react";
import Email from "@mui/icons-material/Email";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";

export default function NewsLetterContainer() {
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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500 shadow-2xl ">
        <h1 className="font-bold text-2xl text-center">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 outline-none focus:outline-teal-300 dark:border-teal-100 bg-gray-200 dark:bg-gray-100"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            {/* Email SVG Icon */}
            <div className="text-teal-300 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-blue-300">
              <Email />
            </div>
          </button>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 rounded-xl p-3"
        >
          SUBSCRIBE NOW
        </button>
        <NotificationHandler customId={customId} />
        {/* notification */} {/* Toaster Notification Added over here.  */}
      </div>
    </form>
  );
}
