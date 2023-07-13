import React from "react";
import Input from "./Input";
import "../../../styles/test/input.css";

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
