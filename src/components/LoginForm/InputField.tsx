import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  inputType: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: string;
  autoFocus?: boolean;
};

const InputField = ({
  id,
  name,
  label,
  placeholder,
  inputType,
  value,
  onChange,
  autoComplete,
  autoFocus = false,
}: InputFieldProps) => {
  const [isPassword, setIsPassword] = useState(false);
  const toggle = () => setIsPassword((value) => !value);

  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label
        htmlFor={id}
        className="text-lg mobileM:text-xl font-medium text-slate-500
        cursor-pointer"
      >
        {label}
      </label>

      {inputType === "password" ? (
        <div className="relative flex items-center justify-between">
          {/* btn to show or hide password */}
          <button
            type="button"
            onClick={toggle}
            className="absolute right-2 p-2 text-slate-500
            hover:text-primary-blue/80 duration-300"
          >
            {isPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
          </button>

          {/* input password */}
          <input
            id={id}
            name={name}
            type={isPassword ? inputType : "text"}
            placeholder={placeholder}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            required
            className="py-2 px-5 rounded-lg text-slate-500 font-medium
            text-base mobileM:text-lg outline-none border border-slate-300  
            hover:border-primary-blue/40 focus:border-primary-blue/80
            focus:shadow-[0_0_0_1px_#008ecccc] duration-300 w-full"
          />
        </div>
      ) : (
        //  input text, email, etc.
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          required
          className="py-2 px-5 rounded-lg text-slate-500 font-medium
          text-base mobileM:text-lg outline-none border border-slate-300  
          hover:border-primary-blue/40 focus:border-primary-blue/80
          focus:shadow-[0_0_0_1px_#008ecccc] duration-300"
        />
      )}
    </div>
  );
};

export default InputField;
