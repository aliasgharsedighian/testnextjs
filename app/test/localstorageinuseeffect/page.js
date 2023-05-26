"use client";
import React, { useEffect, useState } from "react";

function localStorageInUseEffect() {
  const [items, setItems] = useState("a");
  const [userData, setUserData] = useState("");
  // how use setItem
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  // how use getItem
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems("c");
      console.log(items);
    }
  }, []);
  //To listen for changes in localStorage, you should add an event listener for local storage. You can use the useEffect() hook to add an event listener for local storage. Here’s an example of how to do this:
  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem("userData");

      if (item) {
        setUserData(item);
      }
    }

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  return <div>{items}</div>;
}

export default localStorageInUseEffect;
