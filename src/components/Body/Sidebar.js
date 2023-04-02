import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
const toggleInfo = useSelector(Store => Store.toggle.isMenuOpen)
if(!toggleInfo){
  return null;
}
  return (
    <div className=" mr-4 ml-2 shadow-lg w-1/6  h-screen ">
      <ul className=" border-b-2 border-gray-200">
        <li className="p-2  hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8 mr-4 "
          ></img>
          Home
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8 mr-4 "
          ></img>
          Sports
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Movie
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Cars
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Football
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center rounded-lg">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Shooting
        </li>
      </ul>
      <ul className="p-4 ">
        Subscriptions
        <li className="p-2 mt-2 hover:bg-gray-100 rounded-lg flex items-center">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Home
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg flex items-center">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Sports
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-lg flex items-center">
          <img
            alt="profile"
            src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
            className="w-8  mr-4"
          ></img>
          Movie
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
