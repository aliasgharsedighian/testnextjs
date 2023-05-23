import React from "react";
import ShowMoreCard from "./ShowMoreCard";

const data = [
  {
    id: 1,
    img: "img1",
    headng: "heading1",
    desc: "Description1",
    showMore: "Show More1",
  },
  {
    id: 2,
    img: "img2",
    headng: "heading2",
    desc: "Description2",
    showMore: "Show More2",
  },
  {
    id: 3,
    img: "img3",
    headng: "heading3",
    desc: "Description3",
    showMore: "Show More3",
  },
];

function ShowMoreLessButton() {
  return (
    <div>
      <h1>Read more Read less</h1>
      {data.map((item) => (
        <ShowMoreCard
          key={item.id}
          img={item.img}
          heading={item.headng}
          desc={item.desc}
          showMore={item.showMore}
        />
      ))}
    </div>
  );
}

export default ShowMoreLessButton;
