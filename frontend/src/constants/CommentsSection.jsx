import React from "react";

const CommentsSection = () => {
  return (
    <>
      <div className="w-full p-4 mt-7">
        <h1 className="font-bold mb-7 ml-2  ">
          COMMENTS
          <p className="w-[1/4] border-b-2 border-b-teal-500"></p>
        </h1>
        {/* comment  */}
        <div className="w-full">
          {/* Comment form  */}
          <div className="w-full flex flex-col justify-between">
            <form id="commentForm" className="mb-8">
              <textarea
                id="commentInput"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-teal-500 focus:"
                placeholder="Write your comment..."
              ></textarea>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#A0FBF9] text-white rounded-md hover:bg-teal-500 transition-colors"
                >
                  Submit
                </button>
                <span className="ml-4 text-gray-600">
                  Sign In to Comment or Comment as Guest
                </span>
              </div>
            </form>
          </div>
          <hr />
          <div className="flex p-4">
            <img src={john} alt="" className="size-14 rounded-full" />
            <div className="flex flex-col pl-4 text-sm">
              <h1 className="font-bold ">John</h1>
              <p className=" text-slate-600">
                Great Blog there, brother! hello there also bother me also down
                here wherever i go , I will follow Jesus
              </p>
              <div className="flex space-2 mt-3">
                <p className="text-slate-600">June 13 2024</p>
                <p
                  className="text-teal-500 pl-4 cursor-pointer"
                  onClick={toggleReply}
                >
                  Show Replies
                </p>
              </div>
            </div>
          </div>
          {replyOpen && (
            // {/* Reply  */}
            <div className="flex flex-col p-4">
              <div className="flex  items-center">
                <img
                  src={dropdown_to_left}
                  alt=""
                  className="size-14 rounded-full"
                />
                <img src={john} alt="" className="size-14 rounded-full" />
                <div className="flex flex-col pl-4 text-sm">
                  <h1 className="font-bold ">John</h1>
                  <p className=" text-slate-600">
                    Great Blog there, brother! hello there also bother me also
                    downn here wherever i go , I will follow Jesus
                  </p>
                  <div className="flex space-2 mt-3">
                    <p className="text-slate-600">June 13 2024</p>
                    <p className="text-teal-500 pl-4">Reply</p>
                  </div>
                </div>
              </div>
              {/* Reply form  */}
              <div className="w-full flex flex-col justify-between pl-4 mt-2">
                <form
                  id="commentForm flex-col flex justify-center items-center"
                  className="mb-8"
                >
                  <textarea
                    id="commentInput"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-teal-500 focus:"
                    placeholder="Write your comment..."
                  ></textarea>
                  <div className="flex items-center mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#A0FBF9] text-white rounded-md hover:bg-[#A0FBF9] transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentsSection;
