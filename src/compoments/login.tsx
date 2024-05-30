"use client";
import React from "react";
import Login_Img from "../Assets/Image/login 1.svg";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function login() {
  return (
    <div className="flex bg-[#001124] w-full h-full">
      <div>
        <img src={Login_Img} className=" md:m-48" />
      </div>
      <div className=" md:my-56">
        <div className="md:my-10" >
          <span className="text-white font-semibold text-4xl">LOGIN</span>
        </div>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" className=" text-white" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" className=" text-white"/>
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            {/* <Checkbox id="remember" /> */}
            <Label className=" text-white" htmlFor="remember">
              Not a user?{" "}
            </Label>
            <Label className=" text-[#499FFE]" htmlFor="remember">
              Register Now
            </Label>
          </div>
          <Button type="submit">LOGIN </Button>
        </form>
      </div>
    </div>
  );
}

export default login;
