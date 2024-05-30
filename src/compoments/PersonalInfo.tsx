import React from "react";
import { HeaderTwo } from "./Header2";
import Personal_Img from "../Assets/Image/Group 6.svg";

function PersonalInfo() {
  return (
    <>
      <HeaderTwo />
      <div className="md:flex md:px-48 bg-[#001124] md:h-screen py-32">
        <div className=" m-24">
          <img src={Personal_Img} />
        </div>
        <div className=" space-y-4 ">
          <div>
            <p className=" font-medium text-lg text-[#015FC7]">Name</p>
            <p className="text-white text-xl font-bold">Jhon Doe</p>
          </div>

          <div>
            <p className=" font-medium text-lg text-[#015FC7]">
              Father’s/Mother’s Name:
            </p>
            <p className="text-white text-xl font-bold">Papa John Doe</p>
          </div>
          <div className="flex space-x-80">
            <div>
              <p className=" font-medium text-lg text-[#015FC7]">Age</p>
              <p className="text-white text-xl font-bold">18</p>
            </div>
            <div>
              <p className=" font-medium text-lg text-[#015FC7]">Mobile</p>
              <p className="text-white text-xl font-bold">9650912628</p>
            </div>
          </div>
          <div>
            <p className=" font-medium text-lg text-[#015FC7]">Email</p>
            <p className="text-white text-xl font-bold">
              JhonDeoe@1234gmail.com
            </p>
          </div>
          <div>
            <p className=" font-medium text-lg text-[#015FC7]">Aadhar Number</p>
            <p className="text-white text-xl font-bold">123456789XX</p>
          </div>

          <div>
            <p className=" font-medium text-lg text-[#015FC7]">Address</p>
            <p className="text-white text-xl font-bold">
              XYZ, Street No. 92, Gurgaon, Uttar Pardesh, 100021
            </p>
          </div>
          <div className="flex space-x-80 ">
            <div>
              <p className=" font-medium text-lg text-[#015FC7]">Eligible :</p>
              <p className="text-white text-xl font-bold">True</p>
            </div>
            <div>
              <p className=" font-medium text-lg text-[#015FC7]">Verified</p>
              <p className="text-white text-xl font-bold">True</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
