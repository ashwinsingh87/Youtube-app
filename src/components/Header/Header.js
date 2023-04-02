import React, { useState } from "react";
// import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleIt } from "../../utils/sideToggle";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");

  function handleChange(value) {
    setSearchItem(value);
    console.log(searchItem);
  }
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(toggleIt());
  }
  return (
    <div className=" grid grid-flow-col  h-14   ">
      <div className=" col-span-1 flex items-center justify-center">
        <img
          alt="button"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAABtbW2UlJROTk6Ojo5JSUmgoKD8/PzT09OIiIiYmJidnZ3BwcFzc3O1tbUODg4yMjIcHBxUVFQiIiKlpaXW1tbHx8fm5ua7u7uvr6+BgYFZWVn09PRqamolSUV7AAABZ0lEQVR4nO3c7U7bQBCG0WwMOKmxA6VOIHzc/2VCWiTa/sbzStY5d/DI8a4jjWazAQAAAAAAAAAAAAAAAP6274duSUO/j/aN921592MucC7ou+hTgWNRYGtPocKKn+gfP3eRwH1ZYGuZV7EvLPwRKRwKCx8ihbeFhdtI4amwMHNf7O7qCh8jhZtzWWDmoPnwXBT4kgqs+myLPcGL1/P0cLWoaQ69gwAAAAAAAAD/2Y3DtF3SNIyZia9Ph4pxjLtDLrAr6Lu4TgU+FQW2ds4E7n6VFbb1T19mRmgrpy+fI4Xrn76sfIZTpLDyPZwjhZVnaWjyq+4+HDKBdd80b6nAou/SdpsLLPhvse0Or8lAAAAAAAAAgC/HubteUjcfo32nkt2Xp1zg6ndf1i1sS20wXf3uy2NZoN2XS1n/9KXdl9/J7suF2H35bTLnzG81F0Z69+XVzaK2vd2XAAAAAAAAAAAAAAAA8I93D28fr0e8asYAAAAASUVORK5CYII="
          className="w-9 cursor-pointer h-7 "
          onClick={() => {
            handleOnClick();
          }}
        ></img>
        <Link to="/">
          <img
            alt="logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            className="w-28 pl-4 "
          ></img>
        </Link>
      </div>
      <div className="col-span-10  flex items-center justify-center">
        
            <input
              type="text"
              onChange={(e) => handleChange(e.target.value)}
              className="w-1/2 rounded-l-full pl-4 border-2 text-base  border-gray-200 border-r-0 p-2 "
              placeholder="Search"
            ></input>
            <button  className="  bg-gray-50 border-gray-300 border rounded-r-full">
             <img alt="" src="https://www.clipartmax.com/png/middle/279-2795130_search-magnifying-glass-search-icon-transparent.png"  className="w-7 p-1 mt-2 mb-2  ml-3 mr-3"></img>
            </button>
            <div>
              {searchItem.length > 0 ? (
                <div className="w-8 h-60 bg-slate-500">hello</div>
              ) : null}
            </div>
          <img
            alt="search-mic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasxNP_W1mTVyXC5tCJ4ya0vh1iRkHUsZK1NnBJLbq&s"
            className="w-3 h-5 cursor-pointer ml-4"
          ></img>
          </div>
       
      
      <div className="col-span-1 flex items-center justify-center">
        <img
          alt="video-logo"
          src="https://cdn0.iconfinder.com/data/icons/photo-and-video-3/24/116-512.png"
          className="w-6 cursor-pointer h-6"
        ></img>
        <img
          alt="bell-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/010/366/166/small/bell-icon-transparent-notification-free-png.png"
          className="w-9 cursor-pointer h-9 mr-1 ml-4"
        ></img>
        <img
          alt="profile"
          src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          className="w-12 cursor-pointer mr-2 "
        ></img>
      </div>
    </div>
  );
};

export default Header;
