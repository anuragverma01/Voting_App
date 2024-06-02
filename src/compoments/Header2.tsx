"use client";

import { Navbar, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";

export function HeaderTwo() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Rules", { replace: true });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/",{replace:true});
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // navigate("error");
      });
  };
  return (
    <Navbar fluid className=" bg-[rgb(0,17,36)] ">
      <div className="flex md:order-2 space-x-5 ">
        <Button
          onClick={handleLogin}
          className=" md:px-10 bg-[#015FC7] rounded-lg outline-none"
        >
          Vote
        </Button>
        <Button
          onClick={handleSignOut}
          className=" md:px-10 bg-[#015FC7] rounded-lg outline-none"
        >
          Logout
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => navigate("/PersonalInfo")}
          className=" md:text-2xl text-white"
        >
          Personal Info
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/ElectionPage")}
          className="md:text-2xl text-white"
        >
          Elections
        </Navbar.Link>

        <Navbar.Link className="md:text-2xl text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
