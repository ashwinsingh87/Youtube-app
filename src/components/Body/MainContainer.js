import React, { useEffect, useState } from "react";
import VideoContainers from "./VideoContainers";
import { YOUTUBE_API_KEY, categories } from "../../utils/Helper";
import { useDispatch } from "react-redux";
import { showMenu } from "../../utils/sideToggle";

const MainContainer = () => {
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    callAPI();
    dispatch(showMenu());
  }, []);
  async function callAPI() {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideo(json.items);
  }
  return (  
    <div>
      <div className=" z-10">
        <div className="mb-2 sm:w-[350px] overflow-x-scroll ml-6 flex ">
          {categories.map(cat =>
            <span className=" border sm:ml-1 ml-2 rounded-lg p-1 hover:scale-x-110 bg-gray-200 hover:bg-red-700 hover:text-gray-200 sm:m-1 m-2">
              {cat}
            </span>
          )}
        </div>
        <div className="flex sm:flex-col flex-wrap justify-center ">
          {video?.map((vid) => (
            <VideoContainers key={vid.id} info={vid} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContainer
