import React, { useState } from "react";
import InputField from "./InputField";

const LoginForm = () => {
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: field, value } = e.target;
    setEmailAndPassword({ ...emailAndPassword, [field]: value });
  };

  return (
    <div
      className="flex flex-col gap-y-6 bg-white px-6 pt-4 pb-6 
      max-w-sm mx-auto rounded-md shadow-sm"
    >
      {/* title */}
      <h2
        className="text-2xl mobileL:text-3xl
        text-slate-500 font-bold"
      >
        Log in
      </h2>

      {/* Login form */}
      <form className="flex flex-col gap-y-4">
        {/* email */}
        <InputField
          id="login-email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          autoFocus={true}
          autoComplete="username"
          inputType="email"
          value={emailAndPassword.email}
          onChange={handleChange}
        />

        {/* password */}
        <InputField
          id="login-password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          inputType="password"
          value={emailAndPassword.password}
          onChange={handleChange}
        />

        {/* btn to submit */}
        <button
          className="mt-2 py-2 px-5 rounded-3xl text-base mobileM:text-lg
          font-medium bg-primary-blue/80 text-white border-2 
          border-transparent hover:bg-white hover:text-primary-blue/80
          hover:border-primary-blue/80 active:bg-blue-light 
          active:text-primary-blue duration-300"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
