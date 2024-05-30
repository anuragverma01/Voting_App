import React from "react";
import BG_IMG from "../Assets/Image/Figure.svg";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
function Registartion() {
  return (
    <div className="flex bg-[#001124] w-full h-full">
      <div>
        <img className=" md:m-32" src={BG_IMG} />
      </div>
      <div className=" md:mx-32 md:my-32">
        <div className="  md:my-10">
          <h1 className=" text-white font-semibold text-4xl">
            Registration form
          </h1>
        </div>
        <form className="flex max-w-md flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" className=" text-white" />
            </div>
            <TextInput
              id="name"
              type="name"
              placeholder="YOUR NAME"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" className=" text-white" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="YOUR EMAIL-ID"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="mobile"
                value="Mobile No."
                className=" text-white"
              />
            </div>
            <TextInput
              id="mobile"
              type="number"
              maxLength={10}
              placeholder="MOBILE NUMBER"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
                className=" text-white"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="re-password"
                value="Re-enter Password"
                className=" text-white"
              />
            </div>
            <TextInput
              id="re-password"
              type="password"
              placeholder="Re-enter Password"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="aadhar"
                value="Aadhar Number"
                className=" text-white"
              />
            </div>
            <TextInput
              id="aadhar"
              type="number"
              placeholder="XXXXXXXXXXXXXXXXX"
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex text-white">
              I agree with the&nbsp;
              {/* <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500"> */}
              terms and conditions
              {/* </Link> */}
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </div>
  );
}

export default Registartion;
