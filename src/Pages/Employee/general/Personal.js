import axios from "axios";
import React, { useState, useEffect } from "react";
import { getToken } from "../../../Utils/Common";
import EditPersonal from "../editEmployee/EditPersonal";


function Personal({ id }) {
  const [datalist, setData] = useState([]);
  const [edit, setEdit] = useState(true);
  

  useEffect(() => {
    // console.log(id);
    axios
      .get(`http://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => setData(res.data.data[0]))
      .catch((err) => console.log(err.message));
  }, [id]);
  // console.log(datalist);
  return (
    <>{
      edit ? 
      <div className="px-6 py-4 flex flex-col w-full">
        <div className="h-auto">
          <h1 className="text-lg font-bold mb-5">Personal</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Full Name</span>
              <p className="outline-none col-span-2 mb-2">
                {datalist.employee_fullname}
              </p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Nick Name</span>
              <p className="outline-none col-span-2 mb-2">
                {datalist.employee_nickname}
              </p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Email</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.email ? "KOSONG" : datalist.email
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Phone Number</span>
              <p className="outline-none col-span-2 mb-2">{`${datalist.employee_phone_number}`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Place of Birth</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_birth_place
                  ? "Kosong"
                  : datalist.employee_birth_place
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Birthdate</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_dob ? "Kosong" : datalist.employee_dob
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Gender</span>
              <p className="outline-none col-span-2 mb-2">{`${
                datalist.employee_gender == null ? 'Kosong' : datalist.employee_gender
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Marital Status</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_maritual_status
                  ? "Kosong"
                  : datalist.employee_maritual_status
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Blood Type</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_blood ? "Kosong" : datalist.employee_blood
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Religion</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_religion
                  ? "Kosong"
                  : datalist.employee_religion
              }`}</p>
            </label>
          </div>
        </div>
        <div className="">
          <h1 className="text-base font-bold pt-8 pb-6">Identity & Address</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">ID Type</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_id_type
                  ? "Kosong"
                  : datalist.employee_id_type
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">ID Number</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_id_number
                  ? "Kosong"
                  : datalist.employee_id_number
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">ID Expiration Date</span>
              <p className="outline-none col-span-2 mb-2">{!datalist.employee_exp_date ? "Kosong" : datalist.employee_exp_date}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Portal Code</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_portal_code
                  ? "Kosong"
                  : datalist.employee_portal_code
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">Citizen ID Address</span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_id_address
                  ? "Kosong"
                  : datalist.employee_id_address
              }`}</p>
            </label>
            <label
              className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}
            >
              <span className="text-gray-disabledText">
                Residential Address
              </span>
              <p className="outline-none col-span-2 mb-2">{`${
                !datalist.employee_residential_addr
                  ? "Kosong"
                  : datalist.employee_residential_addr
              }`}</p>
            </label>
          </div>
          
        </div>

      </div> : <EditPersonal id={id}/>
    }
      <div className="flex justify-end pr-24">
        {
          edit? 
        <button
          className="w-24 h-[38px] border-[2px] border-[#717171] rounded-full text-sm text-[#717171]"
          onClick={() => setEdit(false)}
        >
          Edit
        </button> : <></>
        }
      </div>
    </>
  );
}

export default Personal;
