"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";  
import { Navbar, Button } from "flowbite-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../util/firebase";
import { addUser, removeUser } from "../Redux/slice/userSlice";
import { useDispatch } from "react-redux";

export function Header() {
  const naviagte = useNavigate();
  const handleLogin = () => {
    naviagte("/Login");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            // displayName: displayName,
            // photoURL: photoURL,
          })
        );
        naviagte("/PersonalInfo");
        // ...
      } else {
        // User is signed out
        // ...
        // dispatch(removeUser());
        // naviagte("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Navbar fluid className=" bg-black w-screen ">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap md:text-4xl font-semibold dark:text-white text-white">
          Voting App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Button
          onClick={handleLogin}
          className=" md:px-10 bg-[#015FC7] rounded-lg outline-none"
        >
          Login
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className=" md:text-2xl text-white" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="md:text-2xl text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
