"use client";
import React from "react";
import { Accordion } from "flowbite-react";

function VotingPanel() {
  return (
    <div className=" flex  justify-center my-32">
      <Accordion className=" w-[50rem] border-none items-center flex flex-col">
        <Accordion.Panel>
          <Accordion.Title >
            <div className=" flex flex-row justify-around content-between" >
              <p>Baburao</p>
            </div>
          </Accordion.Title>

          <Accordion.Content className=" bg-slate-700 w-[45rem] h-[10rem]">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default VotingPanel;
