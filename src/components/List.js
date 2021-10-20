import React from "react";
import Card from "./Card";

const List = () => {
  const videos = [
    {
      imgSrc: "https://source.unsplash.com/random/76x76",
      imgAlt: "random",
      user: "Mohamed",
      description: "lorem Ipsum3322",
    },
    {
      imgSrc: "https://source.unsplash.com/random/77x77",
      imgAlt: "random",
      user: "Jimmy",
      description: "lorem Ipsum6666",
    },
    {
      imgSrc: "https://source.unsplash.com/random/78x78",
      imgAlt: "random",
      user: "Ibrahim",
      description: "lorem Ipsum9999",
    },
    {
      imgSrc: "https://source.unsplash.com/random/79x79",
      imgAlt: "random",
      user: "Khaled",
      description: "lorem Ipsum9999",
    },
  ];
  return (
    <div className="list">
      {videos.map((video, i) => (
        <Card
          key={i}
          imgSrc={video.imgSrc}
          imgAlt={video.imgAlt}
          user={video.user}
          description={video.description}
        />
      ))}
    </div>
  );
};

export default List;
