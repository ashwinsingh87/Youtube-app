import React, { useEffect, useState } from "react";
// import RecommendedVideo from "./RecommendedVideo";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/sideToggle";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { addMessage } from "../../utils/chatSlice";

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
    <div className="flex ml-10 mr-8 mt-2">
      <div className="">
        <iframe
          width="850"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2>Title</h2>
        <h1>Channel logo & Name</h1>
        <Comments />
      </div>
      <div className="ml-6">
        <h2 className="pl-5 pt-4 h-14 text-slate-800 text-lg border rounded-2xl border-gray-300 ">
          Top chats
        </h2>
        <div className=" rounded-2xl w-96 h-96 border overflow-y-scroll flex flex-col-reverse  border-gray-300">
          <LiveChat />
        </div>
        <div className="pl-5 py-2 h-14 text-slate-800 text-lg border rounded-2xl border-gray-300 w-96 ">
          <input
            className="pl-2 h-full"
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
            className="bg-gray-100 border rounded-md ml-2 p-1"
          >
            Send
          </button>
        </div>
        <h2 className="m-4 text-lg">Recommended videos</h2>
        {/* <RecommendedVideo/> */}
      </div>
    </div>
  );
};

export default VideoPage;
