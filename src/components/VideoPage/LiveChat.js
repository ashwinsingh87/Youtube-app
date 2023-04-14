import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateName, generateMessage } from "../../utils/Helper";

const Comment = (info) => {
  return (
    <>
      <div className="flex items-center">
        <img
          alt="pfp"
          className=" w-10 h-10"
          src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        ></img>
        <div>
          <span className="font-bold">{info.name}</span>
          <span className="ml-2">{info.message}</span>
        </div>
      </div>
    </>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatDisplay = useSelector((store) => store.chat.messages);
  // console.log(chatDisplay)
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(20),
        })
      );
    }, 2000);
    return () => clearTimeout(i);
  }, []);
  return (
    <>
      <div className="flex flex-col-reverse">
        <div>
          {chatDisplay.map((c) => (
            <Comment name={c.name} message={c.message} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LiveChat;
