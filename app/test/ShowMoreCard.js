"use client";

import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

//this hooks from https://www.npmjs.com/package/react-collapsed with detail and more option

function ShowMoreCard({ img, heading, desc, showMore }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  return (
    <>
      <div>
        <p>{img}</p>
        <p>{heading}</p>
        <p>{desc}</p>

        <button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
        <section {...getCollapseProps()}>{showMore}</section>
      </div>
    </>
  );
}

export default ShowMoreCard;
