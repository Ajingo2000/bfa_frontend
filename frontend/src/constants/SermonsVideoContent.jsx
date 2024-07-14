import React, {useState, useEffect} from "react";
import SermonVideoDiv from "../sections/SermonVideoDiv";
import SermonsAudioPlayer from "../pages/SermonsAudioPlayer";
import FolderPlaylistDivs from "../sections/VideoDiv";
import image1 from "../assets/images/features1.jpg";
import InfiniteScroll from "react-infinite-scroll-component"
import FolderSermonPlaylist from "./FolderSermonPlaylist";
import axios from "axios";

const SermonsVideoContent = ({sorterActive, sermons, searchResults}) => {
  const [bibleBook, setBibleBook] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; // ${apiUrl}  

  
  // ALL, RECENT, OLD, PLAYLIST FILTERS SWITCH DIV
   // BIBLE BOOK PLAYLIST API FOR EXPOSITORY SERMONS
   useEffect(() => {
    const fetchBibleBook = async () => {
      try {
        const res = await axios.get(`${apiUrl}bible-book`);
        setBibleBook(res.data);

      } catch (err) {}
    };

    fetchBibleBook();
  }, []);


  let content;

  switch (sorterActive) {
    case 0:
      content = sermons.map(
        (sermon, index) =>
          sermon.sermon_category && (
            <SermonVideoDiv
              key={index}
              link={`/sermon-details/${sermon.slug}`}
              image={sermon.thumbnail}
              title={sermon.title}
              preacher={sermon.preached_by}
              category={sermon.sermon_category.title}
            />
          )
      );
      break;
    case 1:
      content = sermons.map(
        (sermon, index) =>
          sermon.sermon_category && (
            <SermonVideoDiv
              key={index}
              link={`/sermon-details/${sermon.slug}`}
              image={sermon.thumbnail}
              title={sermon.title}
              preacher={sermon.preached_by}
              category={sermon.sermon_category.title}
            />
          )
      );
      break;
    case 2:
      content = (
        <section className="">
          <div className="grid grid-cols-1 size-64 rounded-xl shadow-xl ">
            <div className="rounded-xl">
              <div
                className="w-full h-full p-2 z-10 rounded-t-xl"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
              <div
                className="w-full h-full p-3 z-20"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
              <div
                className="w-full z-30"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </div>
            <div className="bg-white rounded-tr-[50%] rounded-bl-xl rounded-br-xl p-4">
              <h1 className="font-extrabold text-center text-black">Abide with me</h1>
            </div>
          </div>
        </section>
      );
      break;
    case 50:
        content = bibleBook.map(
          (books_sermon, index) =>   (
            <FolderSermonPlaylist slug={books_sermon.slug} name={books_sermon.name} thumbnail={books_sermon.thumbnail}/>
       
          )
        );
        break;
    case 5:
      content = (
        <div className=" w-full">
          {/* <ArchivePlaylistDiv playlistSermon={sermon} /> */}
        </div>
      );
      break;
    // THIS IS FOR SEARCH FUNCTIONALITY ON THE SERMONS  ARCHIVE IT WILL BE SET TO 100 ONLY FOR THAT
    case 100:
      content = searchResults.map(
        (sermon, index) =>
          sermon.sermon_category && (
            <SermonVideoDiv
              key={index}
              link={`/sermon-details/${sermon.slug}`}
              image={sermon.thumbnail}
              title={sermon.title}
              preacher={sermon.preached_by}
              category={sermon.sermon_category.title}
            />
          )
      );

      break;
    default:
      content = null;
  }

  return <>{content}</>;
};

export default SermonsVideoContent;
