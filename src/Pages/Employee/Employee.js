import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Utils/Common";
import UserPhoto from "../../Assets/userphoto.svg";

function Employee() {
  const [dataList, setDataList] = useState([]);

  function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // useEffect(()=>{
  //   axios.get("https://people.api.zainzo.com/api/admin/department", {
  //     headers: {
  //       Authorization: `Bearer ${getToken()}`,
  //     },
  //   })
  //   // .then(res => console.log(res))
  // },[])

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/employee", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setDataList(res.data.employee);
        console.log(res);
      })
    .catch(err => console.log(err.message))
  }, []);
  // console.log(dataList)
  let navigate = useNavigate();
  // console.log(dataList[0].department_name.department_name)
  // dataList.forEach(item => {
  //   console.log(item.department_name)
  // })
  // console.log(getToken())
  return (
    <div className="flex flex-col items-center mt-2 mx-auto">
      <div className="container h-screen overflow-auto mx-auto flex flex-col">
        <div className="mb-7 flex">
          <h1 className="text-xl font-medium mr-auto self-center">Employee</h1>
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
        <div className="container h-screen max-h-96 items-start self-center drop-shadow-xl bg-white rounded-xl px-6 py-3 overflow-auto flex scrollbar-hide">
          <div className="max-w-xl">
            <table className="w-auto">
              <thead className="">
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
                  <th className="font-semibold px-6 whitespace-nowrap">Phone Number</th>
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
                        navigate(`/employee-detail/${item.employee_id}`);
                      }}
                      key={item.employee_id}
                    >
                      <td>
                        <input id={item.employee_id} type="checkbox" className="relative appearance-none w-3 h-3 border border-solid border-black rounded accent-blue-500" />
                      </td>
                      <td>
                        <img src={UserPhoto} className="rounded-full w-6 h-6 m-auto" alt="foto" />
                      </td>
                      <td className="p-3 whitespace-nowrap">{item.employee_relation.employee_fullname}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_kode}</td>
                      <td className="whitespace-nowrap">{!item.department_name ? "-" : item.department_name.department_name}</td>
                      <td className="whitespace-nowrap">{!item.jobposition_name ? "-" : item.jobposition_name.job_position_name}</td>
                      <td className="whitespace-nowrap">{!item.joblevel_name ? "-" : item.joblevel_name.job_level_name}</td>
                      <td className="whitespace-nowrap">{!item.jobstatus_name ? "-" : item.jobstatus_name.job_status_name}</td>
                      <td className="whitespace-nowrap">{!item.employment_joindate ? "-" : item.employment_joindate}</td>
                      <td className="whitespace-nowrap">{!item.employment_enddate ? "-" : item.employment_enddate}</td>
                      <td className="whitespace-nowrap">-</td>
                      <td className="whitespace-nowrap">{item.employee_relation.email}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_dob}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_birth_place}</td>
                      <td className="whitespace-nowrap">{calculateAge(item.employee_relation.employee_dob)}</td>
                      <td className="whitespace-nowrap truncate">{item.employee_relation.employee_residential_addr}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_phone_number}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_gender}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_maritual_status}</td>
                      <td className="whitespace-nowrap">{item.employee_relation.employee_religion}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
