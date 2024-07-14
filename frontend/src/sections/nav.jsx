import headerLogo from "../assets/images/bfa-logo-80x80.png";
import hamburger from "../assets/images/hamburger.png";
import x_symbol from "../assets/images/x_symbol-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { Children } from "react";
import { navLinks } from "../constants/index.js";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from "react";

const NavigationBar = (props) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  // NAVIGATION ITEMS ARE HERE 
  const navItems = [
    {
      label: "Home",
      href: "/",
      hasDropdownItems: false,
      dropdownItems: [
        {
          label: " ",
          href: "/",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
      ],
    },
    {
      label: "About",
      href: "#",
      hasDropdownItems: true,
      dropdownItems: [
        {
          label: "About the Ministry",
          href: "/about-the-ministry",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        {
          label: "About the Evangelists ",
          href: "/about-the-evangelists",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        {
          label: "Our Beliefs and Purpose ",
          href: "/our-beliefs-and-purposes",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        {
          label: "Missionary Letters",
          href: "/missionary-letters",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
      ],
    },
    {
      label: "Get Involved",
      href: "/get-involved",
      hasDropdownItems: false,
      dropdownItems: [
        {
          label: " ",
          href: "/",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
      ],
    },
    {
      label: "Ministry Resources",
      href: "#",
      hasDropdownItems: true,
      dropdownItems: [
        {
          label: "New Believer Documents ",
          href: "/new-believer-documents",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: "",
              href: "/",
            },
          ],
        },
        {
          label: "Soul Winning Lessons",
          href: "/soul-winning-lessons",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: "",
              href: "/",
            },
          ],
        },
        {
          label: "Biblical Theology Lessons ",
          href: "/biblical-theology-lessons",
          hasDropdownItems: true,
          dropdownItems: [
            {
              label: " Section 1: Bible Doctrine",
              href: "/bible-doctrine",
            },
            {
              label: "Section 2: Bible Practice ",
              href: "/",
            },
            {
              label: "Section 3: Bible Books and Characters",
              href: "/bible-books-and-characters",
            },
          ],
        },
        {
          label: "Discipleship Lessons ",
          href: "/discipleship-lessons",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        {
          label: "Discipler Class Lessons",
          href: "/discipler-class-lessons",
          hasDropdownItems: true,
          dropdownItems: [
            {
              label: " Resources & Guides",
              href: "/resources-and-guides",
            },
            {
              label: " Soul Winning Lessons",
              href: "/soul-winning-lessons",
            },
            {
              label: " Discipleship Lessons",
              href: "/discipleship-lessons",
            },
            {
              label: " Discipler Class Lessons",
              href: "/discipler-class-lessons",
            },
          ],
        },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      hasDropdownItems: false,
      dropdownItems: [
        {
          label: "Blogs ",
          href: "/blog",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        
        {
          label: "Blog Authors ",
          href: "/blog-authors",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
      ],
    },
    {
      label: "Sermons",
      href: "/sermons-archive",
      hasDropdownItems: false,
      dropdownItems: [
        {
          label: "Sermons",
          href: "/sermons",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
        {
          label: "Sermons Archive",
          href: "/sermons-archive",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/sermons-archive",
            },
          ],
        },
        {
          label: "Sermon Details",
          href: "/sermon-details",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "",
            },
          ],
        },
      ],
    },
    {
      label: "Contacts",
      href: "/contacts",
      hasDropdownItems: false,
      dropdownItems: [
        {
          label: " ",
          href: "/",
          hasDropdownItems: false,
          dropdownItems: [
            {
              label: " ",
              href: "/",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 bg-gradient-to-r from-blue-300 to-teal-100 bg-opacity-80 backdrop-blur-2xl  border-inherit ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={headerLogo} alt=" bfa logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">Baptists for Africa</span>
          </div>
          <ul className="hidden lg:flex items-center flex-shrink-0 ml-14 space-x-12">
            {navItems.map((item, index) => (
              
              <>
                <ul
                  
                  // className={({isActive}) => {
                  //   return isActive
                  //     ? " text-white  font-extrabold border-b-4 border-b-white"
                  //     : "";
                  // // }
                  // }
                  className={`${activeNav===index?"":""}` }
                  onClick={() => setActiveNav(index)}
                >
                  <li
                    key={index}
                    className="text-lg tracking-tight group relative "
                  >
                    <a
                      href={item.href}
                      className={
                        item.hasDropdownItems
                          ? "relative  after:absolute  after:ml-2 after:mt-[8px] after:h-2 after:w-2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-black lg:group-hover:opacity-70 "
                          : "relative "
                      }
                    >
                      {item.label}
                    </a>
                    {item.hasDropdownItems && (
                      <div className="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-gray-100 bg-opacity-75 p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                        {item.dropdownItems.map((dropdItem, dropIndex) => (
                          <ul key={dropIndex}>
                            <li className="p-2 ">
                              <a href={dropdItem.href}>{dropdItem.label}</a>
                            </li>
                          </ul>
                        ))}
                      </div>
                    )}
                  </li>
                </ul>
              </>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="" className="py-2 px-3 border rounded-md">
              SignIn
            </a> */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=CM4MRZKU8KPRC"
              className="box-shadow text-white bg-blue-600 py-2 px-3 rounded-md"
            >
              Donate
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="text-black" onClick={toggleNavbar}>
            {mobileDrawerOpen ? < CloseIcon size="20"/> : <MenuIcon size="20"/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 font-sans bg-gradient-to-r from-blue-300 to-teal-100 w-full p-12 flex flex-col  lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 font-bold relative">
                  <a
                    href={item.href}
                    onClick={() => toggleDropdown(index)}
                    className={
                      item.hasDropdownItems
                        ? "  after:absolute  after:ml-2 after:mt-[4px] after:h-2 after:w-2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current lg:group-hover:opacity-70 "
                        : ""
                    }
                  >
                    {item.label}
                  </a>
                  {item.hasDropdownItems && openDropdownIndex === index && (
                    <div class="top-10 right-0 w-[200px] bg-inherit flex flex-col gap-2 mt-4">
                      {item.dropdownItems.map((dropdItem, dropIndex) => (
                        <ul key={dropIndex}>
                          <li className="text-white ">
                            <a href={dropdItem.href}>{dropdItem.label}</a>
                          </li>
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex ">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=CM4MRZKU8KPRC"
                className="p-2 rounded-md bg-gradient-to-r from-teal-100 to-blue-200 shadow-lg"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
      {props.children}
    </nav>
  );
};

export default NavigationBar;
