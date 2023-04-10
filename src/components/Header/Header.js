import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIt } from "../../utils/sideToggle";
import { Link } from "react-router-dom";
import { SEARCH_API } from "../../utils/Helper";
import { cacheResults } from "../../utils/cacheSlice";
import SearchResult from "../SearchResult/SearchResult";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedList, setSearchedList] = useState("");
  const [showFocus, setShowFocus] = useState(false);

  const dispatch = useDispatch();
  const cacheInfo = useSelector((store) => store.Cache);
  // console.log(cacheInfo);

  const callSearching = async () => {
    const data = await fetch(SEARCH_API + searchText);
    const json = await data.json();
    setSearchedList(json[1]);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
    // console.log(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheInfo[searchText]) {
        setSearchedList(cacheInfo[searchText]);
      } else {
        console.log("Api calling for " + searchText);
        callSearching();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  function handleOnClick() {
    dispatch(toggleIt());
  }
  return (
    <div className=" grid grid-flow-col">
      {/* burger menu and youtube logo */}
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

      {/* Search bar */}
      <div className="col-span-10 mt-1 px-10 flex flex-col items-center ">
        <div className="w-3/6 flex ">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-l-full p-2 border border-gray-200 "
            placeholder="Search"
            value={searchText}
            onFocus={() => setShowFocus(true)}
            onBlur={() => setShowFocus(false)}
          ></input>
          <button className="  bg-gray-50 px-2 py-2 border-gray-300 border rounded-r-full">
            Search
          </button>
        </div>
        {/*seachedList */}
        {showFocus && (
          <div className="fixed bg-gray-100 mt-11 shadow-lg w-2/6 rounded-xl py-2">
            <ul>
              {searchedList.length !== 0 &&
                searchedList.map((e) => (
                  <li
                    key={e}
                    className="px-4 py-2 border-b-2 cursor-pointer hover:bg-gray-200"
                  >
                    🔍 {e}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right nav bars */}
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
