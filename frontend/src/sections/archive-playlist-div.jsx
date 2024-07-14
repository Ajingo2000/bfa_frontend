import React from "react";
import archive_image from "../assets/images/mbr-1256x707.png";
import FolderPlaylistDivs from "../sections/VideoDiv";

const ArchivePlaylistDiv = (props) => {
  return (
    <>
      <section className="w-full border shadow-xl bg-white rounded-xl">
        <div className="rounded-xl border-b">
          <button className="text-white border p-2 bg-teal-400 rounded-tl-xl">
            2024
          </button>
        </div>

              <div className="grid grid-cols-3 gap-4 p-2 w-full">
              {
                props.playlistSermon.map((playlist, index) =>(
                  <FolderPlaylistDivs/>
                ))
              }
              </div>
        
      </section>
    </>
  );
};

export default ArchivePlaylistDiv;
