import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import {
  AboutUs,
  BibleLessons,
  ChurchInfo,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  Navbar2,
  NewsLetter,
  SermonArchive,
  Nav,
  PageHead,
} from "../sections";

import SidebarAdmin from "./SidebarAdmin";
import SidebarItems from "./SidebarItems";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import QuizIcon from "@mui/icons-material/Quiz";


const FrontendAdminLogin = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Admin Login | Baptists for Africa`}</title>
        </Helmet>
        <SidebarAdmin>
          <SidebarItems
            icon={<DashboardIcon size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItems icon={<AnalyticsIcon />} text="Statistics" alert />
          <SidebarItems icon={<ArticleIcon size={20} />} text="Bfa Documents" />
          <SidebarItems icon={<NewspaperIcon size={20} />} text="Bfa Blog" />
          <SidebarItems
            icon={<VideoCameraFrontIcon size={20} />}
            text="BfaSermons"
            alerts
          />
          <hr className="my-3" />
          <SidebarItems icon={<SettingsIcon size={20} />} text="Settings" />
          <SidebarItems icon={<QuizIcon size={20} />} text="Help" />
          <SidebarItems icon={<ExitToAppIcon size={20} />} text="Logout" />
        </SidebarAdmin>
      </HelmetProvider>
    </>
  );
};

export default FrontendAdminLogin;
