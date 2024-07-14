import React from "react";
import { useState, useEffect } from "react";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import YouTube from "@mui/icons-material/YouTube";
import Email from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from '@mui/icons-material/Share';

const ShareBlogOnSocialsOnSocials = () => {
  let [showShareButtons, setShowShareButtons] = useState(false);
  let [indexNumb, setIndexNumb] = useState();
  const customId = "copy-notify-1";

  

  const toggleShare = () => {
    setShowShareButtons(!showShareButtons);
  };
  const sharePageUrl = window.location.href; // Share this in production
  const dummyUrlShare =
    "https://www.hostinger.com/tutorials/wordpress-video-themes";
  const handleCopyLink = () => {
    const url = window.location.href;

    // Try using the Clipboard API if available
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy: ", error);
          toast.error("Failed to copy link!");
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const textField = document.createElement("textarea");
      textField.innerText = url;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      toast.success("Link copied to clipboard!");
    }
  };

  const socialShareItems = [
    {
      name: "Facebook ",
      indexNumb: 1,
      content: (
        <FacebookShareButton url={sharePageUrl}>
          {console.log(indexNumb)}
          <li
            className={`size-7  p-2 mt-[5px] text-white bg-blue-800 rounded-full flex items-center justify-center gap-2  shadow-lg`}
          >
            <Facebook />
            
          </li>
        </FacebookShareButton>
      ),
    },
    {
      name: " Instagram",
      indexNumb: 2,
      content: (
        <WhatsappShareButton url={sharePageUrl}>
          <li
            className={`size-7  p-2 mt-[5px] text-white bg-green-500 rounded-full flex items-center justify-center gap-2  shadow-lg`}
          >
            <WhatsAppIcon />
            
          </li>
        </WhatsappShareButton>
      ),
    },
    {
      name: "Twitter ",
      indexNumb: 3,
      content: (
        <TwitterShareButton url={dummyUrlShare}>
          <li
            className={`size-7  p-2  text-white bg-black rounded-full flex items-center justify-center gap-2  shadow-lg`}
          >
            <XIcon />
            
          </li>
        </TwitterShareButton>
      ),
    },
    {
      name: "Email ",
      indexNumb: 4,
      content: (
        <EmailShareButton url={dummyUrlShare}>
          <li
            className={`size-7  p-2 mt-[5px] text-white bg-blue-400 rounded-full flex items-center justify-center gap-2  shadow-lg`}
          >
            <Email />
            
          </li>
        </EmailShareButton>
      ),
    },
    {
      name: "Copy Link ",
      indexNumb: 4,
      content: (
        <li
          className={`size-7  p-2  text-black bg-white rounded-full flex items-center justify-center gap-2  shadow-lg`}
          onClick={handleCopyLink}
          title="copy-link"
        >
          <ContentCopyIcon />
          <NotificationHandler customId={customId} />
        {/* notification */} {/* Toaster Notification Added over here.  */}

        </li>
      ),
    },
  ];
  return (
    <>
      <div className="flex items-center gap-2 mt-2 lg:mt-0">
        <div className="font-bold text-md  flex " onClick={toggleShare}>Share <p className=""><ShareIcon/></p> </div>
        <div className={`${!showShareButtons ? "flex" : "hidden"} items-center justify-center gap-2 share-btn`}>
        {socialShareItems.map((item, index) => (
          <ul className="">{item.content}</ul>
        ))}
        </div>
      </div>
    </>
  );
};

export default ShareBlogOnSocialsOnSocials;
