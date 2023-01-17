import React, { Component } from "react";

export default class Employment extends Component {
  render() {
    return (
      <div className="px-6 py-4 flex flex-col">
        <div className="h-screen max-h-80 ">
          <h1 className="text-base font-bold pb-6">Employment</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Company ID</span>
              <input type="text" className="outline-none col-span-2" value={"Jokopi"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Employee ID</span>
              <input type="text" className="outline-none col-span-2" value={"W023"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Department</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"finance"}>Finance</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Job Position</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"administration"}>administration</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Job Level</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"staff"}>Staff</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Status</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"contract"}>Contract</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Join Date</span>
              <input type="date" className="outline-none col-span-2" value="2013-01-01" />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">End Date</span>
              <input type="date" className="outline-none col-span-2" value="2013-03-01" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
