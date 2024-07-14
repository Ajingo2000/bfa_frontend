import React from 'react'

const FolderSermonPlaylist = (props) => {
  return (
    <section className="">
            <a href={`/sermon-details-expostitory/${props.slug}`}>
            <div className="grid grid-cols-1 size-64 rounded-xl shadow-xl " style={{ backgroundImage: `url(${props.thumbnail})` }}>
              <div className="rounded-xl">
                <div
                  className="w-full h-full p-2 z-10 rounded-t-xl"
                  
                ></div>
              </div>
              <div className="bg-white rounded-tr-[50%] rounded-bl-xl rounded-br-xl p-4 flex items-center justify-center">
                <h1 className="font-extrabold text-center text-black text-xl uppercase">{props.name}</h1>
              </div>
            </div>
            </a>
          </section>
          
  )
}

export default FolderSermonPlaylist