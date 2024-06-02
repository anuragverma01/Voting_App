"use client";
import React, { useRef, useState } from "react";
import Login_Img from "../Assets/Image/login 1.svg";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../util/validate";
import { auth } from "../util/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate("/PersonalInfo", { replace: true });
  // };
  const [errorMessage, seterrorMessage] = useState<any>(null);
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const handleLogin = () => {
    const message: any = checkValidData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/PersonalInfo",{replace:true})
        console.log("USER LOGIN")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + "----" + errorMessage);
      });
  };
  return (
    <div className="flex bg-[#001124] w-full h-screen">
      <div>
        <img src={Login_Img} className=" md:m-48" />
      </div>
      <div className=" md:my-56">
        <div className="md:my-10">
          <span className="text-white font-semibold text-4xl">LOGIN</span>
        </div>

        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email id
            </label>
            <input
              ref={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Password"
            />
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-[#015FC7] text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
