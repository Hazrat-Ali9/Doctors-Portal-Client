import React, { useEffect } from "react";
import { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useToken from './../../hooks/useToken';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
      return;
    }
    setIsPasswordShown(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
 
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/"; 

  const [token] = useToken(googleUser || emailUser)

  
  useEffect(() => {
    if (token) {
      navigate(redirect_uri, { replace: true }); 
    }
  },[token, redirect_uri, navigate])

  // useEffect(() => {
  //   if (googleUser || emailUser) {
  //     navigate(redirect_uri, { replace: true }); 
  //   }
  // },[googleUser,emailUser,redirect_uri,navigate])


  let signInError;
  if (googleError || emailError) {
    signInError = (
      <p className="text-red-500">
        <small>{googleError?.message || emailError.message}</small>
      </p>
    );
  } 

  if (googleLoading || emailLoading) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={isPasswordShown ? "text" : "password"}
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <i
                role="button"
                onClick={togglePasswordVisibility}
                style={{ top: 50, right: 14 }}
                className={`fa ${
                  isPasswordShown ? " fa-eye-slash" : "fa-eye"
                } password-icon absolute`}
              ></i>
            </div>
            <input />
            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to This Site?{" "}
              <Link to="/signup" className="text-primary">
                Create A New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
