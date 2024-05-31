import React, { useState } from "react";
import IMG_1 from "../Assets/Image/Vintage Glasses.svg";
function Panel() {
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
    <div className=" w-screen h-screen bg-[#001124]">
      <div  className="flex justify-center">
        <div>
          <p className=" text-white font-bold py-10 text-3xl">Voting Panel</p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className=" items-center flex flex-col">
          <div 
                onClick={() => handleClick(index)}
          
          className="flex flex-row w-[45rem] items-center px-10 border-2 bg-[#8B8B8B] rounded-3xl mt-10">
            <div className="basis-1/4">
              <input
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
          {isActive === index ? (
            <div className="">
              <p className="mb-2 text-gray-500 dark:text-gray-400 w-[40rem] bg-zinc-600 rounded-br-2xl rounded-bl-2xl px-6 py-12 ">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </div>
          ) : null}
        </div>
      ))}
      <div className="flex flex-col place-items-center mt-10 space-y-6">
        <div className=" flex items-baseline space-x-6">
          <input type="checkbox" />
          <p className=" text-white">
            I have selected Baburao from independent as my candidate.
          </p>
        </div>
        <div>
          <button className=" bg-[#015FC7] px-14 py-3 rounded-2xl text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
