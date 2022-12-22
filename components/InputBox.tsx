import React from "react";
import Image from "next/image";
import { error } from "../assets";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  type: string;
  styling?: string;
  errorText?: any;
  onBlur?: (props: any) => void;
  id?: string;
  fontSize?: string;
  labelID: string;
}

const InputBox = ({
  handleChange,
  name,
  placeholder,
  value,
  styling,
  type,
  errorText,
  onBlur,
  id,
  fontSize,
  labelID,
}: Props) => {

  return (
    <div className="input-field-container w-full relative h-[2.5rem]">
     {errorText&& <p
        className={` absolute text-red-600 text-xs bottom-[-20px] left-0 flex justify-center items-center font-miligramTextMedium ${
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
      </p>}
      <input
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={handleChange}
        className={`z-10 h-full font-miligramLight relative px-1 text-main-light_white bg-transparent tracking-[1px] sm:tracking-[2px] border-b-2 outline-none border-main-light_white placeholder:text-main-light_white w-full ${styling} ${
          fontSize ? fontSize : "text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]"
        }`}
        required
      />
         {placeholder && (
        <span
          id={labelID}
          className={`z-0 pl-1 font-miligramLight text-main-light_white tracking-[1px] sm:tracking-[2px] ${
            fontSize
              ? fontSize
              : "text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]"
          }`}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
};

export default InputBox;
