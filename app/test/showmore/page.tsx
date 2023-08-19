"use client";
import React, { useState } from "react";
import ShowMoreLessButton from "./ShowMoreLessButton";
import Link from "next/link";
import { useCollapse } from "react-collapsed";

const data = [
  {
    id: 1,
    number: "01",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟1",
    desc: "1لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط اساسا مورد استفاده قرار گیرد...",
    href: "/test1",
  },
  {
    id: 2,
    number: "02",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟2",
    desc: "2لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط اساسا مورد استفاده قرار گیرد...",
    href: "/test2",
  },
  {
    id: 3,
    number: "03",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟3",
    desc: "3لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط اساسا مورد استفاده قرار گیرد...",
    href: "/test3",
  },
  {
    id: 4,
    number: "04",
    title:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟4",
    desc: "4لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط اساسا مورد استفاده قرار گیرد...",
    href: "/test4",
  },
];

function ShowMorePage() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });
  return (
    <div className="px-20">
      <ShowMoreLessButton />

      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-400 show-more-page-container p-5 rounded-md"
          >
            <div
              className="flex gap-2"
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
              <span className="border-l border-gray-400 px-2">
                {item.number}
              </span>
              <p>{item.title}</p>
            </div>
            {/* when expand show this div */}
            <div
              {...getCollapseProps()}
              className="flex flex-col gap-4 mt-4 border-t pt-4 border-gray-300"
            >
              <p>{item.desc}</p>
              <Link href={item.href}>مشاهده توضیحات تکمیلی</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowMorePage;
