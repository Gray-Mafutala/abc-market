import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { userSignIn, selectAuth } from "../../redux/slices/authSlice";

import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { LoginFormValues } from "../../models";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pending } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [loginError, setLoginError] = useState({
    emailError: "",
    passwordError: "",
    anotherError: "",
  });

  const { handleSubmit, register, formState } = useForm<LoginFormValues>({
    mode: "onTouched",
  });
  const { errors, isSubmitting } = formState;

  console.log("re-rendu");

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

      default:
        setLoginError({
          emailError: "",
          passwordError: "",
          anotherError: errorMessage,
        });
    }
  };

  const onSubmit = ({ email, password }: LoginFormValues) => {
    /* the addition of the "return new Promise..." helps to display
        a spin-loader on the sign-in button during submission */
    return new Promise((resolve) => {
      // no error at start of login-form submission
      setLoginError({
        emailError: "",
        passwordError: "",
        anotherError: "",
      });

      dispatch(userSignIn({ email, password }))
        .unwrap()
        .then((user) => {
          // resolves the promise with a value
          resolve(user.id);

          /* go to the page we wanted to access before 
            logging in, else go to HomePage */
          location.state?.path ? navigate(location.state.path) : navigate("/");
        })
        .catch((error) => {
          handleLoginErrorsState(error.code, error.message);
        });
    });
  };

  return (
    <div
      className="flex flex-col gap-y-6 bg-white px-6 pt-4 pb-6 
      max-w-sm mx-auto rounded-md shadow-sm"
    >
      {/* debug */}
      <p className="flex flex-col border">
        {/*<span>isDirty: {JSON.stringify(isDirty)}</span>*/}
        <span>isSubmitting: {JSON.stringify(isSubmitting)}</span>
      </p>

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

          {/* email error (from react-hook-form) */}
          {errors.email ? (
            <span className="text-red-500 text-sm font-light">
              {errors.email.message}
            </span>
          ) : (
            // from firebase/auth
            loginError.emailError && (
              <span className="text-red-500 text-sm font-light">
                {loginError.emailError}
              </span>
            )
          )}
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

          {/* password error (from react-hook-form) */}
          {!errors.email && errors.password ? (
            <span className="text-red-500 text-sm font-light">
              {errors.password.message}
            </span>
          ) : (
            // from firebase/auth
            loginError.passwordError && (
              <span className="text-red-500 text-sm font-light">
                {loginError.passwordError}
              </span>
            )
          )}
        </div>

        {/* btn to submit */}
        <button
          type="submit"
          disabled={isSubmitting && pending}
          className="mt-2 py-2 px-5 rounded-3xl text-base mobileM:text-lg
          font-medium bg-primary-blue/80 text-white border-2 
          border-transparent hover:bg-white hover:text-primary-blue/80
          hover:border-primary-blue/80 active:bg-blue-light 
          active:text-primary-blue disabled:bg-primary-blue/10 
          disabled:text-primary-blue/30 disabled:border-primary-blue/10
          duration-300 flex items-center justify-center gap-x-3 whitespace-nowrap test"
        >
          Sign in
          {isSubmitting && pending && (
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
