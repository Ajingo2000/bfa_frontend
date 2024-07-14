import React from "react";

const SidebarItems = ({ icon, text, alert, expanded, active, index}) => {
  
    return(
        <>
        <li
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            active === index
              ? " bg-gradient-to-r from-indigo-100 text-indigo-800 "
              : "hover:bg-indigo-50 text-gray-600 "
          } `}
          
        >
          {icon}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "flex gap-2" : "hidden"
            } `}
          >
            {text}
          </span>
  
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "flex" : "hidden"
              }`}
            />
          )}
  
        </li>
      </>
  )
};

export default SidebarItems;
