import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { firebaseAuth, signInWithEmailAndPassword } from "../../firebase";

import { LoginFormValues } from "../../types";
import { useForm } from "react-hook-form";
import InputField from "./InputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // react-hook-form
  const { handleSubmit, register, formState } = useForm<LoginFormValues>();
  const { errors, isSubmitting } = formState;

  // login error state
  const [loginError, setLoginError] = useState({
    emailError: "",
    passwordError: "",
    anotherError: "",
  });

  // to handle login errors
  const handleLoginErrorsState = (errorCode: string, errorMessage: string) => {
    switch (errorCode) {
      case "auth/invalid-email":
      case "auth/user-not-found":
        setLoginError({
          emailError: "Not found an account with this email address.",
          passwordError: "",
          anotherError: "",
        });
        break;

      case "auth/wrong-password":
        setLoginError({
          emailError: "",
          passwordError: "Wrong password.",
          anotherError: "",
        });
        break;

      case "auth/too-many-requests":
        setLoginError({
          emailError: "",
          passwordError: "",
          anotherError: "Too many tries, please try again later.",
        });
        break;

      case "auth/network-request-failed":
        setLoginError({
          emailError: "",
          passwordError: "",
          anotherError:
            "An error has occurred, please check your internet connection and try again.",
        });
        break;

      default:
        setLoginError({
          emailError: "",
          passwordError: "",
          anotherError: errorMessage,
        });
    }
  };

  // to sign-in user
  const onSubmit = async ({ email, password }: LoginFormValues) => {
    // no error at start of login-form submission
    setLoginError({
      emailError: "",
      passwordError: "",
      anotherError: "",
    });

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      // go to the page we wanted to access before logging in, else go to HomePage
      location.state?.path ? navigate(location.state.path) : navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      handleLoginErrorsState(error.code, error.message);
    }
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
        Sign in
      </h2>

      {/* Login form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        {/* another error */}
        {loginError.anotherError && (
          <span className="text-red-500 text-sm font-light">
            {loginError.anotherError}
          </span>
        )}

        {/* email */}
        <div className="flex flex-col gap-y-1">
          <InputField
            id="login-email"
            name="email"
            register={register}
            registerOptions={{
              required: "This field is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address.",
              },
            }}
            label="Email"
            placeholder="Enter your email address"
            autoComplete="email"
            inputType="email"
            autoFocus={true}
          />

          <span className="text-red-500 text-sm font-light">
            {/* display email error from react-hook-form or from firebase/auth */}
            {errors.email ? errors.email.message : loginError.emailError}
          </span>
        </div>

        {/* password */}
        <div className="flex flex-col gap-y-1">
          <InputField
            id="login-password"
            name="password"
            register={register}
            registerOptions={{
              required: "This field is required.",
              minLength: {
                value: 6,
                message: "Password must contain at least 6 characters.",
              },
              maxLength: {
                value: 32,
                message: "Password must not exceed 32 characters.",
              },
            }}
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            inputType="password"
          />

          {/* password error from react-hook-form or from firebase/auth */}
          <span className="text-red-500 text-sm font-light">
            {!errors.email && errors.password
              ? errors.password.message
              : loginError.passwordError}
          </span>
        </div>

        {/* btn to submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 py-2 px-5 rounded-3xl text-base mobileM:text-lg
          font-medium bg-primary-blue/80 text-white border-2 
          border-transparent hover:bg-white hover:text-primary-blue/80
          hover:border-primary-blue/80 active:bg-blue-light 
          active:text-primary-blue disabled:bg-primary-blue/10 
          disabled:text-primary-blue/30 disabled:border-primary-blue/10
          duration-300 flex items-center justify-center gap-x-3 whitespace-nowrap"
        >
          Sign in
          {isSubmitting && (
            <span className="-order-1">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-primary-blue/40"
              >
                <g>
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      dur="1.5s"
                      calcMode="spline"
                      values="0 150;42 150;42 150;42 150"
                      keyTimes="0;0.475;0.95;1"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="1.5s"
                      calcMode="spline"
                      values="0;-16;-59;-59"
                      keyTimes="0;0.475;0.95;1"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="2s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </g>
              </svg>
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
