"use client";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "../../../styles/test/input.css"; // Don't forget to create this file

interface PageProps {
  type: string;
  label: string;
  labelType: string;
  className: string;
}

const Input = ({ type, label, labelType, className, ...rest }: PageProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const isPassword = type === "password";

  const handleTogglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className={`input-container ${className} ${labelType}`}>
      {label && <label>{label}</label>}
      <div className="input-field">
        <input
          {...rest}
          type={isPassword ? (isPasswordShown ? "text" : "password") : type}
        />
        {isPassword && (
          <div className="icon" onClick={handleTogglePasswordVisibility}>
            {isPasswordShown ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
