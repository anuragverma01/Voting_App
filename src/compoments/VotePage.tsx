"use client";

import React from "react";
import { HeaderTwo } from "./Header2";

function VotePage() {
  return (
    <>
      <HeaderTwo />
      <div className=" bg-[#001124] w-full h-screen place-items-center flex flex-col ">
        <div>
          <p className=" text-white text-2xl font-semibold py-10">
            Upcoming Elections
          </p>
        </div>
        <div className=" flex bg-white w-1/2 h-16 justify-between px-6 rounded-lg py-4">
          <p className=" font-bold text-lg">UP state election:</p>
          <p className=" font-bold text-lg">02-04-2022</p>
        </div>
          <div>
            <p className=" text-white text-2xl font-semibold my-12">
              Other Elections
            </p>
          </div>
          <div className=" flex bg-white w-1/2 h-16 justify-between px-6 rounded-lg py-4 my-6">
            <p className=" font-bold text-lg">Manipur state Election: </p>
            <p className=" font-bold text-lg">04-04-2022</p>
          </div>
          <div className=" flex bg-white w-1/2 h-16 justify-between px-6 rounded-lg py-4 my-6">
            <p className=" font-bold text-lg">Chhatishgarh state Election: </p>
            <p className=" font-bold text-lg">12-04-2022</p>
          </div>
          <div className=" flex bg-white w-1/2 h-16 justify-between px-6 rounded-lg py-4 my-6">
            <p className=" font-bold text-lg">Bangluru state Election: </p>
            <p className=" font-bold text-lg">20-04-2022 </p>
          </div>
          <div className=" flex bg-white w-1/2 h-16 justify-between px-6 rounded-lg py-4 my-6">
            <p className=" font-bold text-lg">Gurgaon Municipal Corporation </p>
            <p className=" font-bold text-lg">26-04-2022</p>
          </div>
      </div>
    </>
  );
}

export default VotePage;
