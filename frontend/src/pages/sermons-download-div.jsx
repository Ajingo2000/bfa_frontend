import React from "react";
import {
  FaClock,
  FaDownload,
  FaBookBible,
  FaSort,
  FaCalendar,
  FaLanguage,
  FaHeading,
  FaPersonPraying,
  FaPerson,
  FaChurch,
} from "react-icons/fa6";
import SermonsDownload from "../constants/sermons-download";
import email_bg from "../assets/images/email-bg.jpg";
import { FaFileDownload, FaSortAmountDown } from "react-icons/fa";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import axios from "axios";
import FormattedDate from "../constants/formatted-date";
import TuneIcon from "@mui/icons-material/Tune";


const SermonsDownloadDiv = (props) => {
  return (
    <>
      <section className="lg:w-full h-full border-r-1 p-8">
        <div className=" flex lg:flex flex-col bg-white dark:bg-neutral-900 rounded-xl border dark:border-neutral-900 shadow-lg">
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 flex justify-between items-center gap-6">
            <button className="flex rounded-lg bg-gray-200 dark:bg-neutral-600 p-4 font-bold ">
              {` ${props.index}/${props.length} `}
            </button>

            <div className="w-full">
            <p className="w-full h-full font-bold ">{props.title}</p>
            </div>

            
          <div className="hidden lg:flex lg:justify-center lg:items-center w-full p-2 border-b dark:border-neutral-600 lg:border-none">
            <a
              href={props.sermon_audio}
              rel="noopener noreferrer"
              download={props.sermon_audio}
            >
              <div className="bg-gray-200 dark:bg-neutral-600 flex items-center justify-center rounded-xl gap-2 p-1 h-full font-bold  ">
                 <p>Download Audio </p><AudioFileIcon />
              </div>
            </a>
          </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
              <div className="flex bg-gray-200 dark:bg-neutral-600 lg:border-none items-center gap-2 p-1 h-full rounded-l-lg">
                <FaBookBible /> Bible Text
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">{props.bible_text}</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 dark:bg-neutral-900 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg ">
              <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                <FaPerson /> Preacher:
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">{props.preached_by}</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
              <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                <TuneIcon /> Category
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">
                  {props.sermon_category && props.sermon_category.title}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
              <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                <FaLanguage /> Language
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">English</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
              <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                <FaCalendar /> Date
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">
                  <FormattedDate date={props.preaching_date} />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-3 border-b dark:border-neutral-600 lg:border-none">
            <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
              <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                <FaChurch /> Location
              </div>
              <div className="flex">
                <p className="w-full h-full font-bold ">Bible Baptist church</p>
              </div>
            </div>
          </div>
          {/* <div className="h-full w-full p-3 border-b dark:border-neutral-600">
                    <div className="grid grid-cols-2 items-center gap-2 border dark:border-neutral-600 rounded-lg">
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center gap-2 p-1 h-full rounded-l-lg">
                        <FaClock /> Duration
                      </div>
                      <div className="flex">
                        <p className="w-full h-full font-bold ">1:00</p>
                      </div>
                    </div>
                  </div> */}
          <div className=" p-2 border-b dark:border-neutral-600 lg:border-none">
            <a
              href={props.sermon_audio}
              rel="noopener noreferrer"
              download={props.sermon_audio}
            >
              <div className="flex lg:hidden bg-gray-200 dark:bg-neutral-600 items-center justify-center rounded-xl gap-2 p-1 h-full font-bold">
                <AudioFileIcon /> Download Audio
              </div>
            </a>
          </div>
          </div>
          {/* <div className=" p-2 border-b dark:border-neutral-600">
                    <a
                      href={props.sermon_audio}
                      rel="noopener noreferrer"
                      download={props.sermon_audio}
                    >
                      <div className="flex bg-gray-200 dark:bg-neutral-600 items-center justify-center rounded-xl gap-2 p-1 h-full font-bold">
                        <VideoDownload slug={props.slug && console.log(props.slug)} />
                      </div>
                    </a>
                  </div> */}
        </div>
      </section>
    </>
  );
};

export default SermonsDownloadDiv;
