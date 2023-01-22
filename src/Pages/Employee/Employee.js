import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import Ellipse from "../../Assets/Ellipse3.svg";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";

function Employee() {
  const [dataList, setDataList] = useState([
    {
      data: {
        id: 1,
        photo: "../Ellipse3.svg",
        name: "Muhammad Iqbal Zaky",
        employeeId: "HT0211",
        department: "Finance",
        jobPosition: "Staff Finance",
        jobLevel: "Staff",
        status: "Internship",
        joinDate: "1 Jan 2022",
        endDate: "1 Jan 2023",
        resignDate: "1 Jan 2023",
        email: "muhammad45289002@gmail.com",
        birthDate: "31 Dec 1994",
        placeOfBirth: "Jakarta",
        age: 21,
        address: "JL. Kertajaya No.10",
        phoneNumber: "08560662341",
        gender: "Male",
        maritalStatus: "Single",
        religion: "Islam",
      },
    },
    {
      data: {
        id: 2,
        photo: "Ellipse",
        name: "Margaret Febiola",
        employeeId: "HWS74",
        department: "Human Resources",
        jobPosition: "Junior Recruiter",
        jobLevel: "Staff",
        status: "Contract",
        joinDate: "4 Jan 2020",
        endDate: "-",
        resignDate: "-",
        email: "margaretfebiola@gmail.com",
        birthDate: "23 Jun 1999",
        placeOfBirth: "Semarang",
        age: 39,
        address: "Semiolong Rt.1 Rw.2",
        phoneNumber: "084563883213",
        gender: "Female",
        maritalStatus: "Married",
        religion: "Chatolic",
      },
    },
  ]);

  let navigate = useNavigate();

  return (
    <div className="">
      <Navbar />
      <div className="ml-24 p-8 bg-gray-main min-h-screen">
        <div className="mb-7 flex flex-row">
          <h1 className="text-xl mr-auto font-normal">Employee</h1>
          <button
            className="border border-gray-500 text-gray-500 rounded-full drop-shadow-2xl px-3 text-sm mr-2"
            onClick={() => {
              navigate("/employee-detail");
            }}
          >
            Export
          </button>
          <button
            className="bg-red-main rounded-full text-white text-sm px-4 py-2 flex flex-row items-center justify-items-center"
            onClick={() => {
              navigate("/add-employee");
            }}
          >
            <IoAddOutline color="#white" className="w-4 h-4 mr-2" />
            Add Employee
          </button>
        </div>
        <div className="container h-screen max-h-96 drop-shadow-md bg-white rounded-xl px-6 py-3 overflow-auto">
          <table className="table-auto">
            <thead>
              <tr className="text-center my-10 py-10">
                <th>
                  <input type="checkbox" className="relative appearance-none w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                </th>
                <th className="font-semibold p-3 whitespace-nowrap">Photo</th>
                <th className="font-semibold px-6 whitespace-nowrap">Name</th>
                <th className="font-semibold px-6 whitespace-nowrap">Employee ID</th>
                <th className="font-semibold px-6 whitespace-nowrap">Department</th>
                <th className="font-semibold px-6 whitespace-nowrap">Job Position</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Job Level</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Status</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Join Date</th>
                <th className="font-semibold px-6 whitespace-nowrap ">End Date</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Resign Date</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Email</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Birth Date</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Place Of Birth</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Age</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Address</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Phone Number</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Gender</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Marital Status</th>
                <th className="font-semibold px-6 whitespace-nowrap ">Religion</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((item) => {
                return (
                  <tr
                    className="text-center divide-y drop-shadow-md cursor-pointer truncate"
                    onClick={() => {
                      navigate("/employee-detail");
                    }}
                  >
                    <td>
                      <input id={item.data.id} type="checkbox" className="relative appearance-none w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                    </td>
                    <td>
                      <img src={Ellipse} className="rounded-full w-6 h-6 m-auto" alt="foto" />
                    </td>
                    <td className="p-3 whitespace-nowrap">{item.data.name}</td>
                    <td className="whitespace-nowrap">{item.data.employeeId}</td>
                    <td className="whitespace-nowrap">{item.data.department}</td>
                    <td className="whitespace-nowrap">{item.data.jobPosition}</td>
                    <td className="whitespace-nowrap">{item.data.jobLevel}</td>
                    <td className="whitespace-nowrap">{item.data.status}</td>
                    <td className="whitespace-nowrap">{item.data.joinDate}</td>
                    <td className="whitespace-nowrap">{item.data.endDate}</td>
                    <td className="whitespace-nowrap">{item.data.resignDate}</td>
                    <td className="whitespace-nowrap">{item.data.email}</td>
                    <td className="whitespace-nowrap">{item.data.birthDate}</td>
                    <td className="whitespace-nowrap">{item.data.placeOfBirth}</td>
                    <td className="whitespace-nowrap">{item.data.age}</td>
                    <td className="whitespace-nowrap truncate">{item.data.address}</td>
                    <td className="whitespace-nowrap">{item.data.phoneNumber}</td>
                    <td className="whitespace-nowrap">{item.data.gender}</td>
                    <td className="whitespace-nowrap">{item.data.maritalStatus}</td>
                    <td className="whitespace-nowrap">{item.data.religion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee;
