import { useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { LoginFormValues } from "../../types";
import { HiEye, HiEyeOff } from "react-icons/hi";

type InputFieldProps = {
  id: string;
  name: "email" | "password";
  label: string;
  register: UseFormRegister<LoginFormValues>;
  registerOptions: RegisterOptions<LoginFormValues, "email" | "password">;
  placeholder: string;
  inputType: string;
  autoComplete?: string;
  autoFocus?: boolean;
};

const InputField = ({
  id,
  name,
  label,
  register,
  registerOptions,
  placeholder,
  inputType,
  autoComplete,
  autoFocus = false,
}: InputFieldProps) => {
  const [isPassword, setIsPassword] = useState(true);
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
          {/* input password */}
          <input
            id={id}
            {...register(name, registerOptions)}
            name={name}
            type={isPassword ? inputType : "text"}
            placeholder={placeholder}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            className="py-2 px-5 rounded-lg text-slate-500 font-medium
            text-base mobileM:text-lg outline-none border border-slate-300  
            hover:border-primary-blue/40 focus:border-primary-blue/80
            focus:shadow-[0_0_0_1px_#008ecccc] duration-300 w-full"
          />

          {/* btn to show or hide password */}
          <button
            type="button"
            title={isPassword ? "Show the password" : "Hide the password"}
            onClick={toggle}
            className="absolute right-2 p-2 text-slate-500
            hover:text-primary-blue/80 duration-300 outline-primary-blue"
          >
            {isPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
          </button>
        </div>
      ) : (
        //  input text, email...
        <input
          id={id}
          {...register(name, registerOptions)}
          name={name}
          type={inputType}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
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
