import React from "react";
import { useNavigate } from "react-router-dom";

function Rules() {
  const naviagte = useNavigate();
  const handleProceed = () => {
    naviagte("/Panel", { replace: true });
  };

  return (
    <div className=" items-center flex flex-col my-20 ">
      <div>
        <span className=" font-bold text-2xl">
          This election is being conducted by the election commission of India.
        </span>
      </div>
      <div className=" border-[5px] flex flex-col w-1/2 p-10 border-[#015FC7]">
        <span className=" text-justify text-xl font-semibold my-5 ">
          You, as being a member of the constituency under the constituencies of
          Uttar Pradesh State Election, are allowed to vote. Please take the
          following steps in order to cast a valid vote. You are requested to
          cast vote on your own decision and not by being presserurized or
          terroized by someone. If someone threatens you for making a voting
          decsion please contact the given helpline numbers.
        </span>
        <span>Steps -</span>
        <ul className=" list-disc list-inside">
          <li>
            Stay in the frame of your camera alone and with suuficient lighting
            for the entire duration.
          </li>
          <li>
            Have Security Keys with you as you would require it to proceed.
          </li>
          <li>You are allowed to make only one vote per election.</li>
          <li>You are allowed to choose only one candidate per election.</li>
          <li>Candidates information are available on the page.</li>
          <li>
            Make sure that you are selecting your wanted candidate by confirming
            the name and symbol on the screen.
          </li>
          <li>After selecting the candidates make sure to submit the vote.</li>
          <li>
            Result will be announced after 5 days of election being completed.
          </li>
          <li>
            You can verify your vote after the election results are announced.
          </li>
        </ul>
      </div>
      <div className=" flex flex-row items-baseline space-x-5 my-10">
        <input type="checkbox" />
        <p className=" font-bold text-lg">
          I understand and will follow above steps.
        </p>
      </div>
      <div className=" space-x-5 ">
        <button
          type="submit"
          onClick={() => naviagte("/PersonalInfo", { replace: true })}
          className=" bg-[#015FC7] px-14 py-3 rounded-2xl text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleProceed}
          className=" bg-[#015FC7] px-14 py-3 rounded-2xl text-white"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Rules;
