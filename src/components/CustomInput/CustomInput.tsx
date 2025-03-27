// import { useState } from "react";

type CustomInputProps = {
  text: string;
  placeholder: string;
  setText: (value: string) => void;
};

const CustomInput = ({ text, placeholder, setText }: CustomInputProps) => {
  return (
    <>
      <input
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default CustomInput;
