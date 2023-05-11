import React from "react";
// import VideoPage from "../VideoPage/VideoPage";
import { Link } from "react-router-dom";

const VideoContainers = ({ info }) => {
 
  return (
    <div className=" sm:w-screen sm:overflow-hidden sm:rounded-xl transition duration-550 hover:scale-105  ">
      <div className=" sm:w-full w-80 sm:h-auto sm:p-2 sm:mt-1 sm:mb-2 sm:shadow-2xl h-80 lg:w-60 lg:h-60 shadow-lg sm:m-0 m-2 hover:shadow-2xl rounded-2xl sm:flex sm:flex-col ">
        <Link to={"/watch?v=" + info.id}>
          <img
            alt=""
            className="sm:w-full sm:pr-2  cursor-pointer duration-500 rounded-2xl hover:rounded-sm "
            src={info?.snippet?.thumbnails?.medium?.url}
            
          ></img>
        </Link>
        <Link to="/watch">
          <h2 className="pl-4  cursor-pointer mt-4 lg:mt-2 xl:mt-2 font-medium ">
            {info?.snippet?.title?.slice(0, 50)}
          </h2>
        </Link>
        <h3 className="pl-4 cursor-pointer pt-2 lg:pt-1 xl:pt-1 font-normal">
          {info?.snippet?.channelTitle}
        </h3>
        <h3 className="pl-4 pt-2 text-gray-700 lg:pt-0 xl:pt-0 text-sm">
          {info?.statistics?.viewCount} views
        </h3>
      </div>
    </div>
  );
};

export default VideoContainers;
