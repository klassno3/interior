"use client";
import React, { useState } from "react";

type InputProps = {
  title: string;
  type: string;
};
const Input = ({ title, type }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };
  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor={title}
        className={`${
          isFocused ? "-translate-y-6 " : "-translate-y-1"
        } absolute text-sm md:text-base transition-all duration-500 text-foreground font-light  uppercase tracking-wide `}
      >
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={title}
          value={inputValue}
          required
          className="bg-transparent focus:outline-none w-full"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
        />
      ) : (
        <input
          type={type}
          id={title}
          value={inputValue}
          required
          className="bg-transparent focus:outline-none w-full"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
        />
      )}
      <div className="rounded-3xl mt- border-b border-[0.5px] border-border"></div>
    </div>
  );
};

export default Input;
