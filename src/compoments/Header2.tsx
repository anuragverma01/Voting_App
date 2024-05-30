"use client";

import { Navbar, Button } from "flowbite-react";

export function HeaderTwo() {
  return (
    <Navbar fluid className=" bg-[rgb(0,17,36)] ">
      <div className="flex md:order-2 ">
        <Button className=" md:px-10 bg-[#015FC7] rounded-lg outline-none">
          Vote
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active className=" md:text-2xl text-white" href="#">
          Personal Info
        </Navbar.Link>
        <Navbar.Link className="md:text-2xl text-white" href="#">
          Elections
        </Navbar.Link>

        <Navbar.Link className="md:text-2xl text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
