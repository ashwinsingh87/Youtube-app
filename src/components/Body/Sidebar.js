import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mainOptions } from "../../utils/Helper";
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WebStoriesIcon from '@mui/icons-material/WebStories';

const Sidebar = () => {
  const toggleInfo = useSelector(Store => Store.toggle.isMenuOpen)
  if (!toggleInfo) {
    return null;  
  }

  return (
    <div className="ml-2 w-52 sm:hidden shadow-2xl h-fit mb-4 z-50 ">
      <ul className="w-52 border-b-2 sm:w-40 lg:w-40 border-gray-200 z-50 ">
        <Link to="/">
          <li className="p-2 hover:shadow-xl ease-in  sm:w-40 duration-100  hover:bg-sky-400 flex items-center rounded-lg z-50 hover:scale-105">
            <HomeIcon className="cursor-pointer mr-4 scale-125 z-50" />
            <span className="font-medium text-gray-700">
            Home
            </span>
          </li>
        </Link>
        {mainOptions.map((item, index) =>
          <li className="p-2 sm:w-40 hover:scale-105 ease-in duration-100 cursor-pointer bg-gradient-to-r hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 flex items-center  rounded-lg z-50">
            <WebStoriesIcon  className="ml-2 scale-75 mr-4 "/>
            <span className="font-medium text-gray-700">
            {item.title}
            </span>
          </li>)}
      </ul>
      <ul className="sm:mb-2">
        <div className=  "mt-2 sm:w-40 hover:scale-105 p-2 w-full rounded-lg cursor-pointer hover:bg-sky-300">
      <SubscriptionsIcon  className="w-8 mr-4 "/>
        <span className="font-medium text-gray-700">
        Subscriptions 
            </span>
        </div>
        <li className=" hover:scale-105 sm:w-40 p-2 z-50 cursor-pointer bg-gradient-to-r hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 rounded-lg flex items-center">
        <WebStoriesIcon  className="ml-2 scale-75 mr-4 "/>
            <span className="font-medium text-gray-700">
            Home 
            </span>
        </li>
        <li className="p-2 hover:scale-105 sm:w-40 pl-2 cursor-pointer bg-gradient-to-r hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 rounded-lg flex items-center">
        <WebStoriesIcon  className="ml-2 scale-75 mr-4 "/>
            <span className="font-medium text-gray-700">
            Sports 
            </span>
        </li>
        <li className="p-2 hover:scale-105 sm:w-40  pl-2 cursor-pointer bg-gradient-to-r hover:from-sky-200 hover:via-sky-300 hover:to-sky-400 rounded-lg flex items-center">
        <WebStoriesIcon  className="ml-2 scale-75 mr-4 "/>
            <span className="font-medium text-gray-700">
            Movie 
            </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
