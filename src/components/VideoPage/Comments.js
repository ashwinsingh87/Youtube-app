import React from "react";
import Face3Icon from '@mui/icons-material/Face3';
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
      <Face3Icon className="mr-2" />
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
      <Comment key={index} info={com} />
      <div className="ml-10">
        <CommentList key={index} commentInfo={com.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return <>
    <h1 className="text-xl border-t-2 border-gray-400 pt-2 mt-2">Comments</h1>
    <CommentList key={CommentData.length} commentInfo={CommentData} />
  </>
};

export default Comments;
