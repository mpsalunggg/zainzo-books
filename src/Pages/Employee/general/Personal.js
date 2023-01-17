import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    return (
      <div className="px-6 py-4 flex flex-col">
        <div className="h-screen max-h-80 ">
          <h1 className="text-base font-bold pb-6">Employment</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Full Name</span>
              <input type="text" className="outline-none col-span-2" value={"Margaret Febiola"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Nick Name</span>
              <input type="text" className="outline-none col-span-2" value={"Margaret"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Email</span>
              <input type="text" className="outline-none col-span-2" value={"maragaretfebiola@gmail.com"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Phone Number</span>
              <input type="text" className="outline-none col-span-2" value={"085706611112"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Place of Birth</span>
              <input type="text" className="outline-none col-span-2" value={"Jakarta"} />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Birthdate</span>
              <input type="date" className="outline-none col-span-2" value="1994-12-31" />
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Gender</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Marital Status</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"single"}>Single</option>
                <option value={"married"}>Married</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Blood Type</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"a"}>A</option>
                <option value={"b"}>B</option>
                <option value={"ab"}>AB</option>
                <option value={"o"}>O</option>
              </select>
            </label>
            <label className="grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Religion</span>
              <select type="text" className="outline-none col-span-2 bg-white">
                <option value={"islam"}>Islam</option>
                <option value={"kristen"}>Kristen</option>
                <option value={"katolik"}>Katolik</option>
                <option value={"hindu"}>Hindu</option>
                <option value={"budha"}>Budha</option>
                <option value={"konghucu"}>Konghucu</option>
              </select>
            </label>
          </div>
          <div></div>
        </div>
        <div className="">
          <h1 className="text-base font-bold pt-8 pb-6">Identity & Address</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">ID Type</span>
              <input type="text" className="outline-none" value={"sdsd"} />
            </label>
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">ID Number</span>
              <input type="text" className="outline-none" value={"sds"} />
            </label>
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">ID Expiration Date</span>
              <input type="date" className="outline-none" value="2030-01-13" />
            </label>
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Portal Code</span>
              <input type="text" className="outline-none" value={"98352"} />
            </label>
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Citizen ID Address</span>
              <input type="text" className="outline-none" value={"dsd"} />
            </label>
            <label className="grid grid-cols-2 border border-x-0 border-t-0 border-b-1 mr-24  border-gray-divider">
              <span className="text-gray-disabledText">Residential Address</span>
              <input type="text" className="outline-none" value={"sdsd"} />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
