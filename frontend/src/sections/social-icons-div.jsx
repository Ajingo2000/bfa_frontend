import React from 'react'
import { Link } from "react-router-dom";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import Email from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function SocialIconsDiv() {
  const socialIcons = [
    {
      name: "logo-twitter",
      icon: <XIcon/>,
      link: (<>
        <a href="https://x.com/baptists4africa" target="_blank" rel="noopener noreferrer"><XIcon /></a>
      </>),
    },
    {
      name: "logo-facebook",
      icon: < Facebook/>,
      link: (<>
        <a href="" target="_blank" rel="noopener noreferrer"><Facebook /></a>
      </>),
    },
    {
      name: "logo-youtube",
      icon: <YouTube />,
      link: (<>
      <a href="https://youtube.com/@baptistsforafrica?si=U0OtL6pMW9zzau6V" target="_blank" rel="noopener noreferrer"><YouTube /></a>
    </>),
    },
    {
      name: "logo-instagram",
      icon: <Instagram />,
      link: (<>
        <a href="" target="_blank" rel="noopener noreferrer"><Instagram /></a>
      </>),
    },
    {
      name: "logo-google",
      icon: <Email />,
      link: (<>
        <a href="mailto:bap" target="_blank" rel="noopener noreferrer"><Email /></a>
      </>),
    },
  ];
  return (
    <>
    <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500 shadow-xl ">
      <h1 className="blog-head">SOCIAL LINKS</h1>
      <div className="flex gap-7">
          {socialIcons.map((icon) => (
            
              <div className="">{icon.link}</div>
            
          ))}
        </div>
    </div>
    </>
  )
}
