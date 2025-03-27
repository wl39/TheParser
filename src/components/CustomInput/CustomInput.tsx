// import { useState } from "react";

type CustomInputProps = {
  type: string;
  text: string;
  placeholder: string;
  setText: (value: string) => void;
  disabled: boolean;
};

const CustomInput = ({
  type,
  text,
  placeholder,
  disabled,
  setText,
}: CustomInputProps) => {
  return (
    <>
      {type === "multiple" ? (
        <textarea
          value={text}
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          value={text}
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default CustomInput;
