"use client";

import React, { useState } from "react";
import Input from "./Input";
// import "./input.css";

function ReusableInputPage() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  return (
    <div className="flex flex-col w-[400px] mx-auto my-3 gap-5">
      <Input
        type="text"
        label="Enter Your name"
        labelType="top"
        className="my-input"
        setValue={setInputValue2}
        value={inputValue2}
      />
      {inputValue2}
      <Input
        type="customNumber"
        label="Password"
        labelType="top"
        className="my-input"
        setValue={setInputValue}
        value={inputValue}
      />
      {inputValue}
      <span
        data-from="0"
        data-to="4000"
        data-refresh-interval="100"
        data-speed="2500"
      >
        0
      </span>
    </div>
  );
}

export default ReusableInputPage;
