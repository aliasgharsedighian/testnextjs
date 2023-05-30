"use client";

import React, { useState } from "react";
import Input from "./Input";
import "./input.css";

function ReusableInputPage() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Input
        type="customNumber"
        label="Password"
        labelType="top"
        className="my-input"
        setValue={setInputValue}
        value={inputValue}
      />
      {inputValue}
    </div>
  );
}

export default ReusableInputPage;
