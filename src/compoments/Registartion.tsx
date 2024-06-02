import React, { useRef, useState } from "react";
import BG_IMG from "../Assets/Image/Figure.svg";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../util/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../util/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/slice/userSlice";

function Registartion() {
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   navigate("/PersonalInfo", { replace: true });
  // };
  const [errorMessage, seterrorMessage] = useState<any>(null);
  const username = useRef<any>(null);
  const dob = useRef<any>(null);
  const father = useRef<any>(null);
  const email = useRef<any>(null);
  const phone = useRef<any>(null);
  const password = useRef<any>(null);
  const repass = useRef<any>(null);
  const aadhar = useRef<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const message: any = checkValidData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/PersonalInfo", {replace:true})
        console.log(user, "USER ACCOUNT");
        updateProfile(user, {
          // displayName: username.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                // phone: phone,
                // dob: dob,
                // father: father,
                // repass: repass,
                // aadhar: aadhar,
              })
            );
            // ...
          })
          .catch((error) => {
            // An error occurred
            seterrorMessage(error.message);
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + "----" + errorMessage);
        // ..
      });
  };

  return (
    <div className="flex bg-[#001124] md:w-full md:h-full">
      <div>
        <img className=" md:m-32" src={BG_IMG} />
      </div>
      <div className=" md:mx-32 py-20">
        <div className="">
          <h1 className=" text-white font-semibold text-4xl">
            Registration form
          </h1>
        </div>

        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date Of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="DD-MM-YYYY"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Father’s/Mother’s Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Father’s/Mother’s Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              ref={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              placeholder="abc@123.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Mobile"
            >
              Mobile No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="Mobile"
              type="number"
              placeholder="9966332211"
              maxLength={10}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="9966332211"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="repass"
            >
              Re-enter Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="repass"
              type="password"
              placeholder="9966332211"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="aadhar"
            >
              Aadhar Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="aadhar"
              type="password"
              placeholder="Aadhar Number"
              maxLength={10}
            />
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-[#015FC7] text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registartion;
