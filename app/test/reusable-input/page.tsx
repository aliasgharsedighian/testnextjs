import React from "react";
import Input from "./Input";
import "./input.css";

function ReusableInputPage() {
  return (
    <div>
      <Input
        type="password"
        label="Password"
        labelType="top"
        className="my-input"
      />
    </div>
  );
}

export default ReusableInputPage;
