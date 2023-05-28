"use cleint";
import React, { useState, useEffect } from "react";

function useScroll(threshold: number, callback: Function) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);

      if (window.pageYOffset >= threshold) {
        callback();
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

export default useScroll;
