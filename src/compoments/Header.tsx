"use client";

import { Navbar, Button } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid className=" bg-black ">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap md:text-4xl font-semibold dark:text-white text-white">
          Voting App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Button className=" md:px-10 bg-[#015FC7] rounded-lg outline-none">Login</Button>
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
