import React from "react";

const Comments = () => {
  const comments = [
    {
      user: "Ahmed",
      imgSrc: "https://source.unsplash.com/random/77x77",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      user: "Ahmed",
      imgSrc: "https://source.unsplash.com/random/78x78",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      user: "Mohamed",
      imgSrc: "https://source.unsplash.com/random/80x80",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
  ];
  return (
    <div className="comments">
      {comments.map((el, i) => (
        <div key={i} className="suggest-card">
          <div className="img">
            <img src={el.imgSrc} alt="" />
          </div>
          <div>
            <p className="user">{el.user}</p>
            <p className="desc">{el.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
