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
    <div className="flex z-auto p-4 w-full justify-center overflow-hidden ">
      <div className="pl-3">

        <iframe
          width="850"
          className="xl:w-[650px] xl:h-[400px]"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2 className="text-xl  mt-4 pl-2">Video Title</h2>
        {/* Title and subscription */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <SupervisedUserCircleRoundedIcon className="text-cyan-800 mr-2 scale-110"/>
            <h1 className="text-lg">Channel Name</h1>
            <button className=" bg-red-600 border rounded-full flex justify-center m-1 p-1 ">
              <NotificationsIcon className="text-gray-100 mr-1 ml-1" />
              <span className="mr-2 text-white font-bold">Subscribe</span>
            </button>
          </div>
          {/* like and dislike buttons */}
          <div className="flex item-center justify-center">
            <button className=" border-gray-500 border rounded-full flex item-center justify-center mr-2 p-1 ">
              <ThumbUpAltOutlinedIcon className="text-gray-800 hover: mr-1 " />
              <span className="mr-2 text-gray-800  font-light"> 77k | </span> 
              <ThumbDownAltOutlinedIcon className="text-gray-800  mr-1 " />
            </button>
            <button className=" p-1 border border-gray-500 rounded-full flex item-center justify-center  mr-2">
              <ShareIcon className="text-gray-800 mr-1 " />
              <span className="mr-2 text-gray-800  font-light">Share</span>
            </button> 
             <button className="p-1 mr-2 border-gray-500 border rounded-full flex item-center justify-center">
              <ContentCutIcon className="text-gray-800 mr-1 " />
              <span className="mr-2 text-gray-800  font-light  ">Clip</span>

               </button>
            <button className=" mr-2 p-1 border-gray-500 border rounded-full flex item-center justify-center">
              <MoreHorizIcon className="text-gray-800  mr-1 " />
            </button>

          </div>
        </div>
        <Comments />
      </div>

      <div className="ml-6">
        <div className="pl-4 pt-4 w-96 h-14 xl:w-[350px] text-slate-800 text-xl border rounded-2xl border-gray-300 ">
          Top chats
        </div>
        <div className=" rounded-2xl xl:w-[350px] w-96 h-96 border overflow-y-scroll flex flex-col-reverse  border-gray-300">
          <LiveChat />
        </div>
        <div className="pl-5 py-2 xl:w-[350px] h-14 text-slate-800 text-lg border rounded-2xl border-gray-300 w-96 ">
          <input
            className="pl-2 border xl:w-[250px] border-gray-400 rounded-lg"
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
        <h2 className="m-4 text-lg">Recommended videos</h2>
        <RecommendedVideo />
      </div>
    </div>
  );
};

export default VideoPage;
