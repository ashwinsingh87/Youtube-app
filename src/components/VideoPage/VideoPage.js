import React, { useEffect, useState } from "react";
import RecommendedVideo from "./RecommendedVideo";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/sideToggle";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { addMessage } from "../../utils/chatSlice";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  // console.log(searchParams);
  const dispatch = useDispatch();
  function HandleSend() {
    dispatch(
      addMessage({
        name: "User",
        message: message,
      })
    );
    setMessage("");
  }
  function setMsg(val) {
    setMessage(val);
  }
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex z-auto lg:w-screen sm:p-2 sm:w-screen md:w-screen sm:flex-col md:p-2 p-4 w-full md:flex-col lg:flex-col justify-center overflow-hidden ">
      <div className="pl-3 sm:pl-0 sm:w-full lg:w-full md:w-full md:pl-0 lg:pl-1">

        <iframe
          width="850"
          height="500"
          className="xl:w-[650px] sm:w-full sm:h-[200px] lg:w-full md:w-full md:h-[350px] lg:h-[400px] xl:h-[400px]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2 className="text-xl sm:mt-2 sm:pl-1 sm:text-base mt-4 pl-2">Video Title</h2>
        {/* Title and subscription */}
        <div className="w-full sm:flex-col sm:items-start flex items-center justify-between">
          <div className="flex items-center">
            <SupervisedUserCircleRoundedIcon className="text-cyan-800 mr-2 sm:mr-1 sm:scale-90 scale-110"/>
            <h1 className="text-lg sm:text-base">Channel Name</h1>
            <button className=" bg-red-600 border sm:ml-8 rounded-full flex  sm:p-0 justify-center m-1 p-1 ">
              <NotificationsIcon className="text-gray-100 sm:mr-0 sm:scale-90 sm:ml-0 mr-1 ml-1" />
              <span className="mr-2 sm:font-sm text-white font-bold">Subscribe</span>
            </button>
          </div>
          {/* like and dislike buttons */}
          <div className="flex sm:flex-wrap sm:mt-2 item-center sm:justify-between justify-center">
            <button className=" border-gray-500 border rounded-full flex item-center justify-center  sm:p-0 mr-2 p-1 ">
              <ThumbUpAltOutlinedIcon className="sm-scale-40 sm:pl-1 text-gray-800 hover: mr-1 " />
              <span className="mr-2 text-gray-800 sm:mr-1 sm:text-sm font-light"> 77k | </span> 
              <ThumbDownAltOutlinedIcon className="sm-scale-40 text-gray-800  mr-1 " />
            </button>
            <button className=" p-1 border border-gray-500 rounded-full flex item-center justify-center  sm:p-0 mr-2">
              <ShareIcon className="text-gray-800 mr-1 sm-scale-40" />
              <span className="mr-2 text-gray-800 sm:text-sm font-light">Share</span>
            </button> 
             <button className="p-1 mr-2 sm:p-0 border-gray-500 border rounded-full flex item-center justify-center">
              <ContentCutIcon className="sm-scale-40 text-gray-800 mr-1 " />
              <span className="mr-2 text-gray-800 sm:mr-1 sm:text-sm font-light  ">Clip</span>

               </button>
            <button className=" mr-2 p-1  sm:p-0 border-gray-500 border rounded-full flex item-center justify-center">
              <MoreHorizIcon className="sm-scale-90 text-gray-800 sm:mr-0  mr-1 " />
            </button>

          </div>
        </div>
        <Comments />
      </div>




      <div className="ml-6 md:ml-2 sm:mt-4 sm:ml-1 md:flex md:flex-row-reverse lg:flex lg:flex-row-reverse">
        <div>
        <div className="pl-4 sm:hidden pt-4 md:w-[300px]  w-96 h-14 xl:w-[340px] text-slate-800 text-xl border rounded-2xl border-gray-300 ">
          Top chats
        </div>
        <div className=" rounded-2xl sm:hidden md:w-[300px] xl:w-[340px] w-96 h-96 border overflow-y-scroll flex flex-col-reverse  border-gray-300">
          <LiveChat />
        </div>
        <div className="pl-5 py-2 md:w-[300px] sm:hidden xl:w-[340px] h-14 text-slate-800 text-lg border rounded-2xl border-gray-300 w-96 ">
          <input
            className="pl-2 border md:w-[200px] xl:w-[250px] border-gray-400 rounded-lg"
            value={message}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                HandleSend();
              }
            }}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            type="submit"
            onClick={HandleSend}
            className="bg-gray-100 border xl:p-0 rounded-md ml-2 p-1">
            Send
          </button>
        </div>
        </div>
        <div >
        <h2 className="m-4 sm:m-0 sm:mb-2 sm:text-base sm:font-medium text-lg">Recommended videos</h2>
        <RecommendedVideo />
        </div>
        </div>
      </div>
   
  );
};

export default VideoPage;
