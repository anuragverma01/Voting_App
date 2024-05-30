import React from "react";
import { Header } from "./Header";
import Image from "../Assets/Image/unsplash_LA1VawaCjjI.svg";
import { Button } from "flowbite-react";

function Home() {
  return (
    <>
      <Header />
      <div className=" w-screen h-screen flex bg-black ">
        <div>
          <img className=" md:h-[60rem] md:w-[60rem]" src={Image} />
        </div>
        <div className=" md:absolute md:right-72 md:top-72 space-y-10">
          <div>
            <span className=" md:text-4xl font-bold text-white">
              Be a part of decision
            </span>
          </div>
          <div>
            <span className="md:text-8xl md:font-extrabold text-[#015FC7]">
              Vote Today
            </span>
          </div>
          <div className="flex md:space-x-6 ">
            <Button className="bg-[#015FC7] md:px-10 md:py-2">REGISTER</Button>
            <Button className="bg-[#015FC7] md:px-10 md:py-2">READ MORE</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
