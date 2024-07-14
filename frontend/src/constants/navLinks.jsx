 import {Link} from "react-router-dom"
import {useState} from 'react';

export const NavLinks = () =>{
    const [heading, setHeading] = useState("");
    const links = [
        {
            name: "Home",
            link:"/",
        },
        {
            name: "About",
            link:"",
            submenu: true,
            sublinks: [
                {
                    head: "About:",
                    sublink: [
                        { name: "The Ministry", link: "/about-the-ministry", sublogo: "" },
                        { name: "The Evangelists", link: "/about-the-evangelists", sublogo: "" },
                        { name: "Our Beliefs and Purposes", link: "/our-beliefs-and-purposes", sublogo: "chatbox-ellipses-outline" },
                    ],
                    sublogo: "chatbox-ellipses-outline"
                }
            ]
        },
        {name: "Get-Involved", link: '/get-involved'},
        {
            name: "Ministry Resources",
            link:"",
            submenu: true,
            sublinks: [
                {
                    head: "Biblical Theology Lessons",
                    sublink: [
                        { name: "Section 1: Bible Doctrine", link: "/", sublogo: "folder-outline" },
                        { name: "Section 2: Bible Practice", link: "", sublogo: "folder-outline" },
                        { name: "Section 3: Bible Books", link: "", sublogo: "folder-outline" },
                    ],
                    sublogo: 'folder-open-outline'
                },
                {
                    head: "New Believer's Documents",
                    sublink: [
                        { name: "Resources & Guides", link: "", sublogo: "document-outline" },
                        { name: "Discipleship Lessons", link: "", sublogo: "document-outline" },
                        { name: "Soul winning Lessons", link: "", sublogo: "document-outline" },
                        { name: "Discipler Class Lessons", link: "", sublogo: "document-outline"},
                    ],
                    sublogo: 'folder-open-outline'
                },
                {
                    head: "Commentaries",
                    sublink: [
                        { name: "Commentary", link: "", sublogo: "chatbox-ellipses-outline" },
                        { name: "Commentary", link: "", sublogo: "chatbox-ellipses-outline" },
                        { name: "Commentary", link: "", sublogo: "chatbox-ellipses-outline" },
                        { name: "Commentary", link: "", sublogo: "chatbox-ellipses-outline" },
                    ],
                    sublogo: 'chatbox-ellipses-outline',
                },
                {
                    head: "Sermons Archive",
                    sublink: [
                        { name: "Search by Year", link: "", sublogo: "videocam-outline" },
                        { name: "Search by Month", link: "", sublogo: "videocam-outline" },
                        { name: "Search by Date", link: "", sublogo: "videocam-outline" },
                    ],
                    sublogo: 'videocam-outline'
                },
            ]
        },
        {name: "Blog", link: '/blog'},
        {name: "Sermons", link: '/sermons'},
        {name: "Contacts", link: '/contacts'},
    
    ]

    return (
    <>
    {
        links.map(link => (
            <div>
                <div className="px-3 text-left heading-special-mono md:cursor-pointer group">
                    <h1 className="py-7" onClick={()=>setHeading(link.name)}><ion-icon name={link.sublogo}></ion-icon><a href={link.link}> {link.name}</a></h1>
                    
                    {link.submenu && (
                        <div>
                            <div className="absolute top-20  hidden group-hover:md:block hover:md:block">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-8 absolute mt-1  bg-white bg-opacity-2yy0  rotate-45"></div>
                                </div>
                                <div className="bg-white bg-opacity-2yy0 p-3.5 grid grid-cols-2 gap-3 ">
                                    {
                                        link.sublinks.map((mysublinks)=>(
                                            <div className="m-2">
                                                <h1 className="test-lg font-semibold ">{mysublinks.head}</h1>
                                                {mysublinks.sublink.map(slink => (
                                                    <li className="text-sm text-gray-600 my-2.5">
                                                        <Link to={slink.link} className="hover:text-blue-400"><ion-icon name={slink.sublogo}></ion-icon> {slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Mobile Menu */}
                <div className={`
                    ${heading === link.name ? 'md:hidden': 'hidden'}
                `}>
                <h1 className="md:hidden py-4 text-xl"><ion-icon name={link.sublogo}></ion-icon> {link.name}</h1>
                    {

                        link.sublinks?.map((slinks) => 
                             (
                                <div>
                                    <div>
                                        <h1 className=" pl-7 font-semibold ">{slinks.head}</h1>
                                    </div>
                                    <div>
                                            {slinks.sublink.map((slink) => {
                                                return (
                                                    <li className="py-3 pl-12">
                                                        <Link to={slink.link}>{slink.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </div>
                                </div>
                            )
                    )
                    }
                </div>
            </div>
        ))
    }  
    </>
    );
    
};

export default NavLinks;