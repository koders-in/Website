import Image from "next/image";
import React from "react";

import { error } from "../../../assets";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name: string;
  errorText?: any;
  onBlur?: (props: any) => void;
  title?: string;
  textareaStyle?: string;
  id?: string;
  row?: number;
  fontSize?: string;
}

const TextArea = ({
  title,
  placeholder,
  handleChange,
  value,
  name,
  errorText,
  onBlur,
  textareaStyle,
  id,
  row,
  fontSize,
}: Props) => {
  return (
    <div className="field-container text-[0.9rem] md:text-[1.2rem] mt-[1.3rem] relative">
      {/* {title && (
        <div className="text-main-light_white tracking-[1px] sm:tracking-[2px] pb-3 font-miligramLight text-[0.9rem] md:text-[1.2rem] ">
          {title}
        </div>
      )} */}
      {errorText && (
        <p
          className={`absolute text-red-600 text-xs bottom-[-13.5px] flex justify-center items-center font-miligramTextMedium ${
            errorText ? "opacity-100" : "opacity-0"
          } `}
        >
          <Image
            src={error}
            alt={error}
            width={17}
            height={17}
            className="mr-1"
          />
          {errorText}
        </p>
      )}

      <textarea
        id={id}
        required
        // placeholder={placeholder}
        onBlur={onBlur}
        className={`border-b-2 border-main-light_white  font-miligramLight w-full outline-none text-main-light_white tracking-[1px] sm:tracking-[2px] placeholder:text-main-light_white  ${
          textareaStyle ? textareaStyle : "bg-main-secondary"
        } ${fontSize}`}
        name={name}
        cols={30}
        rows={row ? row : 3}
        onChange={handleChange}
        value={value}
      ></textarea>
      {placeholder && (
        <span
          className={`left-0 text-main-light_white tracking-[1px] font-miligramLight sm:tracking-[2px] ${fontSize}`}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
};

export default TextArea;
