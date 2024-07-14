import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import App from './App';
import './App.css';
import AboutTheMinistry from './pages/about-the-ministry';
import AboutTheEvangelists from './pages/about-the-evangelists';
import BeliefsandPurposes from './pages/beliefsandpurpose';
import Contacts from './pages/contacts';
import Donate from './pages/donate';
import GetInvolved from './pages/get-involved';
import BlogDetails from './pages/blog-details'
import Blog from './pages/blog'
import BlogAuthor from './pages/blog-writer'
import BlogSearch from './pages/blog-search'
import BlogAuthorDetails from './pages/blog-author-details';
import ErrorPage from './pages/error';
import Sermons from './pages/sermons';
import SermonsArchive from './pages/sermons-archive';
import SermonsDetails from './pages/sermon-details';
import SermonsDetailsExpository from './pages/sermon-details-expostitory';
import NewBelieverDocs from './pages/believer-docs';
import MinistryResources from './pages/MinistryResources';
import SoulWinningLessons from './pages/SoulWinningLessons';
import DisciplerClassLessons from './pages/DisciplerClassLessons';
import DiscipleshipLessons from './pages/DiscipleshipLessons';
import BiblicalTheologyLessons from './pages/BiblicalTheologyLessons';
import MissionaryLetters from './pages/MissionaryLetters';
import NewBelieverDocsDetails from './pages/believer-docs-details';
import FrontendAdminDashboard from './admin/FrontendAdminDashboard';
import FrontendAdminLogin from './admin/FrontendAdminLogin';
import AddSermons from './admin/AddSermons';
import SermonsDashboard from './admin/SermonsDashboard';
import AddBlogPosts from './admin/AddBlogPosts';
import BlogPostsDashboard from './admin/BlogPostsDashboard';
import AddNewBelieverDocs from './admin/AddNewBelieverDocs';
import BelieversDocsDashboard from './admin/BeleiversDocsDashboard';



const router = createBrowserRouter(
    [
        {
          path: '/',
          element: <App />,
          errorElement: <ErrorPage />
        },
        {
          path: '/about-the-ministry',
          element: <AboutTheMinistry />,
          errorElement: <ErrorPage />
        },
        {
          path: '/about-the-evangelists',
          element: <AboutTheEvangelists />,
          errorElement: <ErrorPage />
        },
        {
          path: '/our-beliefs-and-purposes',
          element: <BeliefsandPurposes />,
          errorElement: <ErrorPage />
        },
        {
          path: '/missionary-letters',
          element: <MissionaryLetters/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/contacts',
          element: <Contacts />,
          errorElement: <ErrorPage />
        },
        {
          path: '/donate',
          element: <Donate />,
          errorElement: <ErrorPage />
        },
        {
          path: '/ministry-resources',
          element: <MinistryResources/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/new-believer-documents',
          element: <NewBelieverDocs />,
          errorElement: <ErrorPage />
        },
        {
          path: '/new-believer-documents/:slug',
          element: <NewBelieverDocsDetails />,
          errorElement: <ErrorPage />
        },
        {
          path: '/resources-and-guides',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/soul-winning-lessons',
          element: <SoulWinningLessons />,
          errorElement: <ErrorPage />
        },
        {
          path: '/discipleship-lessons',
          element: <DiscipleshipLessons/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/discipler-class-lessons',
          element: <DisciplerClassLessons />,
          errorElement: <ErrorPage />
        },
        {
          path: '/biblical-theology-lessons',
          element: <BiblicalTheologyLessons />,
          errorElement: <ErrorPage />
        },
        {
          path: '/bible-doctrine',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/bible-books-and-characters',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/bible-practice',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/get-involved',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/commentaries',
          element: <GetInvolved />,
          errorElement: <ErrorPage />
        },
        {
          path: '/blog',
          element: < Blog/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/blog-details/:slug',
          element: < BlogDetails/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/blog-author-details/:name',
          element: < BlogAuthorDetails/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/blog-search/',
          element: < BlogSearch/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/blog-authors',
          element: < BlogAuthor/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/sermons',
          element: <Sermons/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/sermon-details/:slug',
          element: <SermonsDetails />,
          errorElement: <ErrorPage />
        },
        
        {
          path: '/sermons-archive',
          element: <SermonsArchive/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/sermon-details-expostitory/:slug',
          element: <SermonsDetailsExpository/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/frontend-admin/login',
          element: <FrontendAdminLogin/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/frontend-admin',
          element: <FrontendAdminDashboard/>,
          errorElement: <ErrorPage />
        },
        
        {
          path: '/frontend-admin/sermons-dashboard',
          element: <SermonsDashboard/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/frontend-admin/add-sermon',
          element: <AddSermons/>,
          errorElement: <ErrorPage />
        },
        
        {
          path: '/frontend-admin/add-newBelieverDocs',
          element: <AddNewBelieverDocs/>,
          errorElement: <ErrorPage />
        },
         
        {
          path: '/frontend-admin/newBelieverDocs-dashboard',
          element: <BelieversDocsDashboard/>,
          errorElement: <ErrorPage />
        },
        {
          path: '/frontend-admin/add-blogPost',
          element: <AddBlogPosts/>,
          errorElement: <ErrorPage />
        },

        {
          path: '/frontend-admin/blogPost-dashboard',
          element: <BlogPostsDashboard/>,
          errorElement: <ErrorPage />
        },
      
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
