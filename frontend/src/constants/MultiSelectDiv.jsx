import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

export default function MultiSelectDiv({ api_link, title }) {
  const [dataOptions, setDataOptions] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  


  useEffect(() => {
    const fetchDataOptions = async () => {
      try {
        const res = await axios.get(`${apiUrl}${api_link}`);
        // Assuming res.data is an array of objects with 'value' and 'label' properties
        setDataOptions(
          res.data.map((item) => ({ value: item.id, label: item.title || item.tag }))
        );
        console.log(res.data); // Log to see what data is being received
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchDataOptions();
  }, [api_link]); // Add api_link to dependencies array to re-fetch data when it changes

  return (
    <div className="flex rounded-lg border">
      <p className="p-3 rounded-l-lg border-r">{title}</p>
      <div className="rounded-l-lg flex justify-center items-center w-full">
        <div className="App">
          <Select
            defaultValue={[dataOptions[0], dataOptions[1]]} // Use 'value' instead of 'defaultValue' to bind selected options
            isMulti
            name="colors"
            options={dataOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
    </div>
  );
}
