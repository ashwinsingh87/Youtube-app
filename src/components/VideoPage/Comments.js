import React from "react";

const CommentData = [
  {
    Name: "Ashwin Singh",
    Message: "Nice video, loved the content",
    replies: [
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
        replies: [
          {
            Name: "Ashwin Singh",
            Message: "Nice video, loved the content",
            replies: [
              {
                Name: "Ashwin Singh",
                Message: "Nice video, loved the content",
                replies: [
                  {
                    Name: "Ashwin Singh",
                    Message: "Nice video, loved the content",
                  },
                ],
              },
              {
                Name: "Ashwin Singh",
                Message: "Nice video, loved the content",
              },
            ],
          },
          {
            Name: "Ashwin Singh",
            Message: "Nice video, loved the content",
          },
        ],
      },
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
    ],
  },
  {
    Name: "Ashwin Singh",
    Message: "Nice video, loved the content",
    replies: [
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
    ],
  },
  {
    Name: "Ashwin Singh",
    Message: "Nice video, loved the content",
    replies: [
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
    ],
  },
  {
    Name: "Ashwin Singh",
    Message: "Nice video, loved the content",
    replies: [
      {
        Name: "Ashwin Singh",
        Message: "Nice video, loved the content",
      },
    ],
  },
];

const Comment = ({ info }) => {
  const { Name, Message } = info;
    return (
    <div className="flex m-2 p-2 bg-gray-100 rounded-xl">
      <img
        alt="pfp"
        className=" w-10 h-10"
        src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
      ></img>
      <div>
        <h1>{Name}</h1>
        <p>{Message}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentInfo }) => {
  return commentInfo?.map((com, index) => (
    <div>
      {" "}
      <Comment key={index} info={com} />
      <div className="ml-10">
        <CommentList key={index} commentInfo={com.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return <CommentList commentInfo={CommentData} />;
};

export default Comments;
