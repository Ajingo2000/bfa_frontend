import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Email from '@mui/icons-material/Email';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import NoDataFoundDiv from './NoDataFoundDiv';

const SermonsSearchBtn = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // SEARCH DEPENDING ON THE CATEGORY 
    
    const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
        // // SET THE SORTER AND ACTIVE CATEGORY VALUES
        props.setActiveCategory(0) //FIX THIS
         props.setSorterActive(100)
      // Redirect to the search results page with the search term as a query parameter
      navigate(`/sermons-archive?search=${props.searchTerm}`);

    } catch (error) {
      console.error('Error handling search:', error);
    }
  };

  return (
    <div className="relative w-full dark:text-white text-teal-400">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          className="w-full border h-12 shadow p-4 rounded-full outline-none focus:outline-teal-500 dark:border-teal-100 text-teal-400 dark:text-white dark:bg-neutral-600 bg-gray-200"
          placeholder="Search title, preacher, date, year "
          value={props.searchTerm} onChange={(e) => props.setSearchTerm(e.target.value)} required
        />
            {console.log(`sort value: ${props.sorterActive} and active value: ${props.activeCategory}` )}
        <button type="submit">
          <FaSearch className="text-teal-500 h-5 w-5 absolute top-3.5 right-3 fill-current  dark:text-white" />
        </button>
      </form>
    </div>
  );
};


export default SermonsSearchBtn;