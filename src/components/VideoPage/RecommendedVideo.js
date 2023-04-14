// import React, { useEffect, useState } from "react";
// import { YOUTUBE_API_KEY } from "../../utils/Helper";

// const VideoContainers = (video) => {
//   console.log("inside video container");
//   return (
//     <div className="w-full mr-6 flex">
//       <div className="rounded-xl mr-2 bg-gray-400 h-24 w-1/3">
//         <img
//           alt="recommended videos"
//           src={video?.snippet?.thumbnails?.medium?.url}
//         />
//       </div>
//       <div>
//         <div>{video?.snippet?.title?.slice(0, 25)}</div>
//         <div>{video?.snippet?.channelTitle}</div>
//         <div>{video?.statistics?.viewCount} views</div>
//       </div>
//     </div>
//   );
// };

// const RecommendedVideo = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     callVideo();
//   }, []);

//   const callVideo = async () => {
//     const response = await fetch(YOUTUBE_API_KEY);
//     const data = await response.json();
//     setVideos(data.items);
//   };
//   return videos.length == 0 ? null : (
//     <div>
//       {videos.map((videoData, index) => {
//         <VideoContainers key={index} data={videoData} />
//       })}
//     </div>
//   );
// };

// export default RecommendedVideo;
