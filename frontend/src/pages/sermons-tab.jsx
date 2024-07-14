import React, { useState } from "react";
import SermonsAudioPlayer from "./SermonsAudioPlayer";
import CleanedUpSermonUrl from "../constants/CleanUpSermonUrl";
import audioBg from "../assets/images/male-formal-outfit-preaching-holy-bible-from-tribune-altar-church.jpg"


const SermonsTabs = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="m-7 bg-white dark:bg-neutral-900  font-sans flex flex-col w-full rounded-tl-2xl rounded-tr-2xl border dark:border-neutral-900 shadow-lg ">
      {/* Tab Headers */}
      <div className="w-full grid grid-cols-2 border-b dark:border-neutral-600">
        {/* Audio Tab Header */}
        <div
          onClick={() => setActiveTab(1)}
          className={`p-3 cursor-pointer ${
            activeTab === 1 ? "bg-teal-600 text-white  border-teal-600  rounded-tl-2xl rounded-tr-2xl" : " rounded-tl-2xl rounded-tr-2xl"
          }`}
        >
          <p className="w-full">Audio</p>
        </div>
        {/* Video Tab Header */}
        <div
          onClick={() => setActiveTab(2)}
          className={`p-3 cursor-pointer ${
            activeTab === 2 ? "bg-teal-600 text-white border-teal-600  rounded-tl-2xl rounded-tr-2xl" : " rounded-tl-2xl rounded-tr-2xl"
          }`}
        >
          <p className="w-full">Video</p>
        </div>
      </div>

      {/* Tab Contents */}
      {/* Audio Tab Content */}
      <div
        className={`flex items-center justify-center w-full  ${
          activeTab === 1 ? "block" : "hidden"
        }`}
      >
        <SermonsAudioPlayer thumbnail={props.thumbnail} audio_url={props.sermon_audio} />
      </div>
      {/* Video Tab Content */}
      <div
        className={`flex items-center justify-center w-full ${
          activeTab === 2 ? "block" : "hidden"
        }`}
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      >
        <div className="aspect-video  flex justify-center p-5 rounded-2xl size-full">
          <div className="size-full" dangerouslySetInnerHTML={{ __html: `${props.sermon_url}`  }}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonsTabs;
