import React, { useEffect } from "react";
import RecommendedVideo from "./RecommendedVideo";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/sideToggle";
import {useSearchParams} from "react-router-dom"
import Comments from "./Comments";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[])
// const videoSrc = ;
  return (
    <div className="flex ml-10 mr-8 mt-2">
      <div className="">
        <iframe
          width="850"
          height="500"
          src= {"https://www.youtube.com/embed/"+searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2>Title</h2>
        <h1>Channel logo & Name</h1>
        <Comments/>
      </div>
      <div className="ml-6">
        <div className=" rounded-2xl w-96 h-96 border border-gray-300">
          <h2 className="pl-5 pt-4 h-14 text-slate-800 text-lg border-b-2 border-gray-300">
            Top chats
          </h2>
        </div>
        <h2 className="m-4">Recommended videos</h2>
        <div><RecommendedVideo/></div>
      </div>
    </div>
  );
};

export default VideoPage;
