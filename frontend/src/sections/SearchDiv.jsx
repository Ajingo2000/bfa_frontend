import React from "react";
import { useState, useEffect } from "react";
import SearchBtn from "../constants/SearchBtn";

export default function SearchDiv() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Redirect to the search results page with the search term as a query parameter
      window.location.href = `/blog-search?search=${searchTerm}`;
    } catch (error) {
      console.error("Error handling search:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 gap-4 rounded-lg border border-t-8 border-t-teal-500  shadow-xl shadow-white-500/50">
      <h1 className="font-bold text-2xl text-center">SEARCH</h1>
      <br />
      <SearchButton
        handle_search={handleSearch}
        set_search_term={setSearchTerm}
        search_term={searchTerm}
      />
      <br />
      <form
        onSubmit={handleSearch}
        className="w-full flex flex-col justify-center items-center"
      >
        <button
          type="submit"
          className="w-[80%] bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 rounded-xl p-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}

const SearchButton = (props) => {
  return (
    <div className="relative w-full">
      <form onSubmit={props.handle_search}>
        <input
          type="text"
          name="q"
          className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 outline-none focus:outline-teal-500 dark:border-teal-100 bg-gray-200 dark:bg-gray-200 "
          placeholder="search"
          value={props.search_term}
          onChange={(e) => props.set_search_term(e.target.value)}
          required
        />

        <button type="submit">
          <svg
            className="text-teal-500 h-5 w-5 absolute top-3.5 right-3 fill-current  dark:text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
    </div>
  );
};
