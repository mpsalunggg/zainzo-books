import React from "react";
import { act } from "react-dom/test-utils";
import DoneIcon from "../../../Assets/icon-addEmployee/done.png";

function IconAdd({ active, addDone1, addDone2 }) {
  return (
    <>
      <div className="flex justify-center my-6">
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 ${
              active == "personal"
                ? "bg-redColor text-white"
                : "bg-white border-2 border-[#D10234] text-gray-500"
            } rounded-full flex items-center justify-center`}
          >
            {addDone1 == 1 ? (
              <h1>1</h1>
            ) : (
              <img src={DoneIcon} className="w-5" />
            )}
          </div>
          <p className="text-sm">Personal</p>
        </div>
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 ${
              active == "employee"
                ? "bg-redColor text-white"
                : active == "personal"
                ? "bg-white border-2 border-gray-500 text-gray-500"
                : "bg-white border-2 border-[#D10234] text-gray-500"
            } rounded-full flex items-center justify-center`}
          >
            {addDone2 == 2 ? (
              <h1>2</h1>
            ) : active == "personal" ? (
              <h1>2</h1>
            ) : (
              <img src={DoneIcon} className="w-5" />
            )}
          </div>
          <p className="text-sm">Employment</p>
        </div>
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 ${
              active == "payroll"
                ? "bg-redColor text-white"
                : active == "employee"
                ? "bg-white border-2 border-gray-500 text-gray-500"
                : active == "personal"
                ? "bg-white border-2 border-gray-500 text-gray-500"
                : "bg-white border-2 border-[#D10234] text-gray-500"
            } rounded-full flex items-center justify-center`}
          >
            {active == "invite" ? (
              <img src={DoneIcon} className="w-5" />
            ) : active == "employee" ? (
              <h1>3</h1>
            ) : active == "personal" ? (
              <h1>3</h1>
            ) : (
              <h1>3</h1>
            )}
          </div>
          <p className="text-sm">Payroll</p>
        </div>
        <div className="w-28 flex items-center flex-col gap-1 z-10">
          <div
            className={`w-12 h-12 ${
              active == "invite"
                ? "bg-redColor text-white"
                : "bg-white border-2 border-gray-500 text-gray-500"
            } rounded-full flex items-center justify-center`}
          >
            4
          </div>
          <p className="text-sm">Invite Employee</p>
        </div>
      </div>
      <div className="absolute left-0 right-0 mx-auto my-0 flex justify-center items-center gap-9 top-[4.6rem]">
        <span
          className={`sticky w-20 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-[#D10234]"
              : active == "payroll"
              ? "border-[#D10234]"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}
        ></span>
        <span className={`sticky w-20 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-gray-500"
              : active == "payroll"
              ? "border-[#D10234]"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}></span>
        <span className={`sticky w-20 border-[1.6px] ${
            active == "personal"
              ? "border-gray-500"
              : active == "employee"
              ? "border-gray-500"
              : active == "payroll"
              ? "border-gray-500"
              : active == "invite"
              ? "border-[#D10234]"
              : ''
          }`}></span>
      </div>
    </>
  );
}

export default IconAdd;
