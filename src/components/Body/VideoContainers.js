import React from "react";
// import VideoPage from "../VideoPage/VideoPage";
import { Link } from "react-router-dom";

const VideoContainers = ({ info }) => {
  // console.log(info);

  return (
    <div className="flex flex-wrap">
      <div className="w-80 h-80 shadow-lg m-2 rounded-2xl">
        <Link to={"/watch?v=" + info.id}>
          <img
            alt=""
            className="w-full cursor-pointer rounded-2xl hover:rounded-sm "
            src={info?.snippet?.thumbnails?.medium?.url}
            
          ></img>
        </Link>
        <Link to="/watch">
          <h2 className="pl-4 cursor-pointer mt-4 font-bold ">
            {info?.snippet?.title?.slice(0, 50)}
          </h2>
        </Link>
        <h3 className="pl-4 cursor-pointer pt-2 font-normal">
          {info?.snippet?.channelTitle}
        </h3>
        <h3 className="pl-4 pt-2 text-gray-700 text-sm">
          {info?.statistics?.viewCount} views
        </h3>
      </div>
    </div>
  );
};

export default VideoContainers;
