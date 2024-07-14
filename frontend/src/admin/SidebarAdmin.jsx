import React, { useState, useEffect, createContext, useContext } from "react";
// import SidebarItems from "./SidebarItems";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import headerLogo from "../assets/images/bfa-logo-80x80.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SidebarItems from "../admin/SidebarItems";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import QuizIcon from "@mui/icons-material/Quiz";

const SidebarContext = createContext();

export default function SidebarAdmin() {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(0);
 
  const sidebar_items = [
    {
      icon: <DashboardIcon />,
      text: "Dashboard",
      alert: "alert",
      link: "#"
    },

    {
      icon: <AnalyticsIcon />,
      text: "Statistics",
      alert: "alert",
      link: "#"
    },
    {
      icon: <ArticleIcon />,
      text: "Bfa Documents",
      alert: "alert",
      link: "/frontend-admin/add-newBelieverDocs"
    },
    {
      icon: <NewspaperIcon />,
      text: "Bfa Blog",
      alert: "alert",
      link: "/frontend-admin/add-blogPost"
    },
    {
      icon: <VideoCameraFrontIcon size={20} />,
      text: "Bfa Sermons",
      alert: "alert",
      link: "/frontend-admin/add-Sermon"
    },

    {
      icon: <QuizIcon size={20} />,
      text: "Help",
      alert: "alert",
      link: "#"
    },
    {
      icon: <SettingsIcon size={20} />,
      text: "Settings",
      alert: "alert",
      link: "#"
    },

    {
      icon: <ExitToAppIcon size={20} />,
      text: "Logout",
      alert: "alert",
      link: "#"
    },
  ];
  //   useEffect(() => {

  //     function fetchSidebarItems(){
  //         return SidebarItems
  //     }

  //     fetchSidebarItems();

  //   }, [active]);

  return (
    <>
      <aside
        className={`h-screen  ${expanded ? " w-64 lg:72" : " w-16 lg:w-20"}`}
      >
        <nav
          className={`h-full flex flex-col bg-white border-r shadow-sm ${
            expanded ? " " : " "
          }`}
        >
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={headerLogo}
              alt=""
              className={`overflow-hidden transition-all ${
                expanded ? "w-10 h-10" : "hidden"
              } rounded-full`}
            />
            
            <button
              className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200`}
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? <FirstPageIcon /> : <LastPageIcon />}
            </button>
          </div>

          <ul className="flex-1 px-3">
            {sidebar_items.map((item, index) => (
              <li onClick={() => setActive(index)}>
                <a href={item.link} >
                <SidebarItems
                  icon={item.icon}
                  text={item.text}
                  active={active}
                  expanded={expanded}
                  index={index}
                />
                </a>
              </li>
            ))}
            <hr className="my-3" />
          </ul>

          <div className="border-t flex p-3">
            <p className="rounded-lg w-10 h-10 text-teal-500 border-2 flex items-center justify-center font-bold bg-blue-100">
              {" "}
              JD{" "}
            </p>

            <div
              className={`flex justify-between items-center ${
                expanded ? "w-52 ml-3 " : " hidden"
              } `}
            >
              <div className="leading-4">
                <h4 className="fon-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                <MoreVertIcon size={20} />
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

// export function SidebarItems({ icon, text, active, alert, }) {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <>
//       <li
//         className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//           active
//             ? " bg-gradient-to-r from-indigo-100 text-indigo-800 "
//             : "hover:bg-indigo-50 text-gray-600 "
//         } `}
//       >
//         {icon}
//         <span
//           className={`overflow-hidden transition-all ${
//             expanded ? "w-52 ml-3" : "hidden"
//           } `}
//         >
//           {text}
//         </span>

//         {alert && (
//           <div
//             className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//               expanded ? "" : "hidden"
//             }`}
//           />
//         )}

//       </li>
//     </>
//   );
// }
