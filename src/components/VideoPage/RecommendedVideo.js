import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../../utils/Helper";
import { Link } from "react-router-dom";



const RecommendedVideo = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        callVideo();
    }, []);

    const callVideo = async () => {
        const response = await fetch(YOUTUBE_API_KEY);
        const data = await response.json();
        setVideos(data.items);
    };
    function videoContainers(video) {

        // console.log(videoData.id);
        return (


            <div className="w-full mr-6 flex">
                <div className="rounded-2xl object-contain mr-2 bg-gray-400 h-auto mb-2 w-1/3">
                    <Link to={"/watch?v=" + video.id}>
                        <img
                            alt="recommended videos"
                            className="rounded-lg"
                            src={video?.snippet?.thumbnails?.medium?.url}
                            onClick={()=>{window.scrollTo(0, 0);}}
                        />
                    </Link>
                </div>
                <div>
                    <Link to={"/watch?v=" + video.id}>
                        {/* <div>{video?.snippet?.title?.slice(0, 25)}</div> */}
                        <div onClick={()=>{window.scrollTo(0, 0);}}>{video?.snippet?.channelTitle}</div>
                        <div onClick={()=>{window.scrollTo(0, 0);}}>{video?.statistics?.viewCount} views</div>
                    </Link>
                </div>
            </div>
        )
    };
    return (
        <div>
            {videos?.map((videoData, index) =>
                index < 14 && videoContainers(videoData)
            )}
        </div>
    );
};

export default RecommendedVideo;
