import { Link } from "react-router-dom";
import headerLogo from "../assets/images/bfa-logo-80x80.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import "../index.css";

const Footers = () => {
  return (
    <>
      <section className="w-full p-7 absolute bg-black">
        <footer>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-white w-full">
            <div className="grid grid-cols-2 p-4 gap-4">
              {/* CHURCH INFO AND LOGO  AS WELL AS ABOUT PAGES */}
              <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <img
                  src={headerLogo}
                  alt="Baptists for Africa Logo"
                  srcset=""
                  className="size-20 p-3 border-2 border-teal-500 rounded-full"
                />
                <h1 className="font-extrabold">Baptists For Africa</h1>
                <p className="">
                  Reaching Africa through the Gospel. 
                </p>
                <div className="flex gap-2 lg:flex lg:gap-7">
                  <Link to="/" className="mt">
                    <FacebookIcon />
                  </Link>
                  <Link to="https://x.com/baptists4africa">
                    <XIcon />
                  </Link>
                  <Link to="/">
                    <InstagramIcon />
                  </Link>
                  <Link to="https://youtube.com/@baptistsforafrica?si=U0OtL6pMW9zzau6V">
                    <YouTubeIcon />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ">
                <h1 className="h-special font-extrabold ">About</h1>
                <div className="mt-3 flex flex-col gap-3">
                  <p className="">
                    <Link to="/about-the-ministry">About The Ministry</Link>
                  </p>
                  <p className="">
                    {" "}
                    <Link to="/about-the-evangelists">
                      About The Evangelists
                    </Link>
                  </p>
                  <p className="">
                    {" "}
                    <Link to="/our-beliefs-and-purpose">
                      Our Beliefs and Purpose
                    </Link>
                  </p>

                  <p className="">
                    <Link to="/missionary-letters">Missionary Letters</Link>{" "}
                  </p>
                </div>
              </div>
              
              </div>
              {/* CONTACT AND OTHER PAGE LINKS  */}
              <div className="flex flex-col gap-5">
              <div className="">
                <h1 className="h-special font-extrabold ">Contact</h1>
                <div className="">
                  <p className="">
                    <Link to="/contacts">Contact</Link>{" "}
                  </p>
                  <p className="">
                    <Link to="/get-involved">Get-Involved</Link>
                  </p>
                  <p className="">
                    {" "}
                    <Link to="/donate">Donate</Link>
                  </p>
                  
                </div>
              </div>
              <div className="">
                <h1 className="h-special font-extrabold mb-1">Pages</h1>
                <div className="flex flex-col gap-1">
                 
                  <p className="">
                    {" "}
                    <Link to="/blog">
                      Blog
                    </Link>
                  </p>
                  <p className="">
                    {" "}
                    <Link to="/sermons-archive">
                      Sermons
                    </Link>
                  </p>
                   <p className="">
                    <Link to="/ministry-resources">Ministry Resources</Link>
                  </p>

                  <p className="">
                    <Link to="/new-believer-documents">New Believer Documents</Link>{" "}
                  </p>
                  
                  <p className="">
                    <Link to="/soul-winning-lessons">Soul Winning</Link>{" "}
                  </p>
                  <p className="">
                    <Link to="/discipleship-lessons">Discipleship Lessons</Link>{" "}
                  </p>
                  <p className="">
                    <Link to="/discipler-class-lessons">Discipler Class Lessons</Link>{" "}
                  </p>
                  <p className="">
                    <Link to="/biblical-theology-lessons">Biblical Theology Lessons</Link>{" "}
                  </p>
                  
                </div>
              </div>
              </div>
              
            
            </div>
            <div className=" grid grid-flow-col">
              <iframe
                frameBorder="0"
                className="rounded-lg w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.761488524325!2d32.605729!3d0.305814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd922f519a6f%3A0xb3ec2fc3ccff2c14!2sBible%20Baptist%20Church%20of%20Baptists%20for%20Africa!5e0!3m2!1sen!2sug!4v1700905465741!5m2!1sen!2sug"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="mt-7">

            <p className="text-white mt-3">
              Copyright &copy; Baptists for Africa 2024 - All Rights Reserved
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footers;
