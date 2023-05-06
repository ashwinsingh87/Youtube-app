import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIt } from "../../utils/sideToggle";
import { Link } from "react-router-dom";
import { SEARCH_API } from "../../utils/Helper";
import { cacheResults } from "../../utils/cacheSlice";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedList, setSearchedList] = useState("");
  const [showFocus, setShowFocus] = useState(false);

  const dispatch = useDispatch();
  const cacheInfo = useSelector((store) => store.Cache);

  const callSearching = async () => {
    const data = await fetch(SEARCH_API + searchText);
    const json = await data.json();
    setSearchedList(json[1]);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheInfo[searchText]) {
        setSearchedList(cacheInfo[searchText]);
      } else {
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
    <div className="lg:mr-0 lg:ml-0  lg:rounded-sm bg-gradient-to-r from-sky-100 via-red-100 to-sky-100 duration-700 hover:from-red-200 hover:to-sky-300  grid grid-flow-col shadow-lg ml-4 mb-4 mr-4 rounded-lg">
      {/* burger menu and youtube logo */}
      <div className=" col-span-1 md:col-span-11 flex items-center justify-center ">
        <div className="sm:hidden">
          
          <MenuIcon className=" cursor-pointer text-slate-800 hover:scale-x-125 "
          onClick={() => {
            handleOnClick();
          }} />
          </div>
        <Link to="/">
          <img
            alt="logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            className="w-28 pl-4 md:scale-125 "
          ></img>
        </Link>
      </div>

      {/* Search bar */}
      <div className="col-span-10 mt-1 px-10 flex flex-col items-center md:invisible">
        <div className="w-3/6 flex ">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full hover:border-blue-400 hover:border-2 rounded-l-full p-2 pl-4 border border-gray-200 "
            placeholder="Search"
            value={searchText}
            onFocus={() => setShowFocus(true)}
            onBlur={() => setShowFocus(false)}
          ></input>
          <button className="hover:bg-gray-200  bg-gray-50 px-2 py-2 border-gray-300 border rounded-r-full flex">
            <SearchIcon />
          </button>
        </div>
        {/*seachedList */}
        {showFocus && searchText.length>0 && (
          <div className="fixed bg-gray-100 mt-11 shadow-lg w-2/6 rounded-xl py-2">
            <ul>
              {searchedList.length !== 0 &&
                searchedList.map((val) => (
                  <li
                    key={val}
                    // onClick={setSearchText(val)}
                    className="px-4 py-2 border-b-2 cursor-pointer hover:bg-gray-200"
                  >
                    <SearchIcon /> {val}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right nav bars */}
      <div className="col-span-1 flex items-center  justify-center">
        <VideocamOutlinedIcon className="text-gray-600 hover:text-gray-800 scale-125 cursor-pointer mr-4 duration-500 hover:scale-125 " />

        <NotificationsNoneSharpIcon className="text-gray-600 hover:text-gray-800 scale-110 cursor-pointer mr-4 duration-500 hover:scale-125" />

        <AccountCircleIcon className="text-red-600 hover:text-red-900 scale-125 cursor-pointer mr-2 duration-500 hover:scale-125" />

      </div>
    </div>
  );
};

export default Header;
