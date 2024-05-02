import React from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useToken from './../../hooks/useToken';

const Signup = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(googleUser || emailUser);

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/"; 
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

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.Name }); 
    // navigate(redirect_uri, { replace: true });
  };

  let signInError;
  if (googleError || emailError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {googleError?.message || emailError.message || updateError.message}
        </small>
      </p>
    );
  }

  if (googleLoading || emailLoading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate('/appointment') 
  }

  // if (googleUser || emailUser) { 
  //   navigate('/appointment')
  //   navigate(redirect_uri, { replace: true }); 
  // }

  return (
    <div className="flex h-full justify-center items-center py-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label pt-0">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label pt-0">
                {errors.Name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label pt-0">
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
              <label className="label pt-0">
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
              <label className="label pt-0">
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
              <label className="label pt-0">
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
              value="Sign up"
            />
          </form>
          <p>
            <small>
              Already Have An Account?{" "}
              <Link to="/login" className="text-primary">
                Please Login
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

export default Signup;
