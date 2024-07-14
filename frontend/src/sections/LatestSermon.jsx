import React, { useEffect, useState } from "react";
import axios from "axios";
import NoDataFoundDiv from "../constants/NoDataFoundDiv";

const LatestSermon = () => {
  const [latestSermon, setLatestSermon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 


  useEffect(() => {
    const fetchLatestSermon = async () => {
      try {
        const response = await axios.get(`${apiUrl}sermons`);
        setLatestSermon(response.data);
        setError(null); // Clear any previous errors
        console.log("Response:", response);
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", err.response);
          setError(`Error: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response was received
          console.error("Error request:", err.request);
          setError(
            "No response received from the server. Please try again later."
          );
        } else {
          // Something else happened while setting up the request
          console.error("Error message:", err.message);
          setError("An error occurred. Please try again.");
        }
        setLatestSermon([]); // Clear any previous data
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchLatestSermon();
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="font-extrabold text-[50px] text-center">
          Latest Sermon
        </h1>
        <p className="text-[20px] text-center">
          This is our latest sermon posted over our YouTube channel
        </p>
      </div>

      <div className="aspect-video flex justify-center p-5 rounded-2xl">
        {loading ? (
          <p className="text-center font-extrabold">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : Array.isArray(latestSermon) ? (
          latestSermon.slice(0, 1).map((sermon, index) => (
            <div
              key={index}
              className="size-full"
              dangerouslySetInnerHTML={{ __html: `${sermon.embed_code}` }}
            />
          ))
        
        ) : 
            
         (
          <NoDataFoundDiv />
        )}
      </div>
    </div>
  );
};

export default LatestSermon;
