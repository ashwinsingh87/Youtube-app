import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import VideoContainers from "./VideoContainers";
import { YOUTUBE_API_KEY } from "../../utils/Helper";

const Body = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);
  async function callAPI() {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideo(json.items);
  }
  // console.log(video);

  return (
    <div className="flex w-full">
      <Sidebar />

      {/* Videobody */}
      <div className="w-5/6 h-screen pl-2">
        <div className="mb-4">
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Sports
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Coding
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Hockey
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Cricket
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Games
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Action
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Football
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Photography
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Movie
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Games
          </button>
          <button className="border rounded-lg p-1 bg-gray-200 m-2">
            Action
          </button>
        </div>
        <div className="flex flex-wrap ">
          {video?.map((vid)=>(
            <VideoContainers key={vid.id} info={vid} />

          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Body;
