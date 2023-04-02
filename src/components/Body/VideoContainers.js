import React from "react";

const VideoContainers = ({ info }) => {
  // console.log(info);
  return (
    <div className="flex flex-wrap">
      <div className="w-80 h-80 shadow-lg m-2 rounded-2xl">
        <img
          alt=""
          className="w-full rounded-2xl hover:rounded-sm "
          src={info?.snippet?.thumbnails?.medium?.url}
        ></img>
        <h2 className="pl-4 mt-4 font-bold ">
          {info?.snippet?.title?.slice(0, 50)}
        </h2>
        <h3 className="pl-4 pt-2 font-light">{info?.snippet?.channelTitle}</h3>
        <h3 className="pl-4 font-light text-sm">
          {info?.statistics?.viewCount} views
        </h3>
      </div>
    </div>
  );
};

export default VideoContainers;
