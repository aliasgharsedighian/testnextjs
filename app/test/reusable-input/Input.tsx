"use client";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
// import "./Input.css";

interface PageProps {
  type: string;
  label: string;
  labelType: string;
  className: string;
  setValue: any;
  value: any;
  placeholder?: string;
  inputRef?: any;
}

const Input = ({
  type,
  label,
  labelType,
  className,
  setValue,
  value,
  placeholder,
  inputRef,
  ...rest
}: PageProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isPassword = type === "password";
  const customNumber = type === "customNumber";

  const handleTogglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const setTypeToInput: any = () => {
    if (isPassword) {
      if (isPasswordShown) {
        return "text";
      } else {
        return "password";
      }
    }
    if (customNumber) {
      return "text";
    } else {
      return type;
    }
  };

  const customNumberFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!customNumber) {
      setValue(e.target.value);
    } else {
      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {
        setValue(e.target.value);
      }
    }
  };

  const setInputValue: any = () => {
    if (customNumber) {
      return value?.toLocaleString();
    }
  };

  return (
    <div className={`input-container ${className} ${labelType}`}>
      {label && <label>{label}</label>}
      <div className="input-field">
        <input
          {...rest}
          placeholder={placeholder}
          ref={inputRef}
          type={setTypeToInput()}
          onChange={customNumberFunc}
          value={customNumber ? setInputValue() : value}
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
