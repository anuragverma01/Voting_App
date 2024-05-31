"use client";
import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import IMG_1 from "../Assets/Image/Vintage Glasses.svg";

function VotingPanel() {
  const data = [
    {
      id: 1,
      name: "hiij",
    },
    {
      id: 2,
      name: "tygugugbh",
    },
    {
      id: 3,
      name: "stffvsygb",
    },
    {
      id: 4,
      name: "stffvsygb",
    },
    {
      id: 5,
      name: "stffvsygb",
    },
  ];
  const [isActive, setisActive] = useState(0);

  const handleClick = (index: number) => {
    setisActive(index);
  };

  return (
    <div className=" ">
      <div className=" flex  flex-col  place-items-center bg-[#001124] md:w-full md:h-full ">
        <div className="my-10">
          <p className=" font-semibold text-4xl text-white">Voting Panel</p>
        </div>
        {data.map((item, index) => (
          <Accordion
            onClick={() => handleClick(index)}
            className=" w-[50rem] border-none items-center flex flex-col"
          >
            <Accordion.Panel>
              <Accordion.Title className="border-1 bg-[#8B8B8B] my-6 h-[5rem]">
                <div className="flex flex-row w-[45rem] items-center px-10">
                  <div className="basis-1/4">
                    <input
                      className=""
                      checked={isActive === index}
                      type="radio"
                    />
                  </div>
                  <div className="basis-1/2 text-white font-semibold text-xl">
                    {item.name}
                  </div>
                  <div className="basis-1/4 text-white">Independent</div>
                  <div className="basis-1/4">
                    <img className=" w-14 h-14" src={IMG_1} />
                  </div>
                </div>
              </Accordion.Title>

              <Accordion.Content className=" bg-slate-700 w-[45rem] h-[10rem]">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ))}
        <div className=" text-white flex items-baseline space-x-4">
          <input type="checkbox" />
          <p>I have selected Baburao from independent as my candidate.</p>
        </div>
        <div className="bg-[#015FC7] p-3 px-10 rounded-2xl mt-10">
          <p className=" text-white">Submit</p>
        </div>
      </div>
    </div>
  );
}

export default VotingPanel;
