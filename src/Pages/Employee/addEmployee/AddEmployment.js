import React, {useState} from 'react'
import IconAdd from "./IconAdd";

function AddEmployment({setDone2}) {
    const [isFocused, setIsFocused] = useState("");
  return (

    <div className="px-6 py-4 flex flex-col w-full">
    <div className="h-full">
      <IconAdd active={"employee"} addDone2={setDone2} />
      <h1 className="text-lg font-bold">Employment</h1>
      <p className="text-gray-disabledText mb-8 text-sm">
        Isi semua informasi pribadi karyawan
      </p>
      <div className="grid grid-cols-2 gap-y-10 text-sm">
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "employeeid" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">EmployeeID*</span>
          <input
            type="text"
            className="outline-none col-span-2 mb-2"
            // value={''}
            placeholder="Masukkan ID"
            onFocus={() => setIsFocused("employeeid")}
            onBlur={() => setIsFocused("")}
          />
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition ${
            isFocused == "barcode" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Barcode</span>
          <input
            type="text"
            className="outline-none col-span-2 mb-2"
            // value={"Margaret"}
            placeholder="0"
            onFocus={() => setIsFocused("barcode")}
            onBlur={() => setIsFocused("")}
          />
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "employeestatus" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Employe Status*</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2"
            // value={"maragaretfebiola@gmail.com"}
            onFocus={() => setIsFocused("employeestatus")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih Status
            </option>
            </select>
        </label>
        <label>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "join-date" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Join Date</span>
          <input
            type="date"
            className="outline-none col-span-2 mb-2"
            // value={"Jakarta"}
            placeholder="Tempat Lahir"
            onFocus={() => setIsFocused("join-date")}
            onBlur={() => setIsFocused("")}
          />
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "end-date" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">End Date</span>
          <input
            type="date"
            className="outline-none col-span-2 mb-2"
            // value={"Jakarta"}
            placeholder="Tempat Lahir"
            onFocus={() => setIsFocused("end-date")}
            onBlur={() => setIsFocused("")}
          />
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "branch" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Branch</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200"
            onFocus={() => setIsFocused("branch")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "department" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Department</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("department")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "job-position" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Job Position</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("job-position")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "job-level" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Job Level</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("job-level")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "grade" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Grade</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200"
            onFocus={() => setIsFocused("grade")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "class" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Class</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("class")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "schedule" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Schedule</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("schedule")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
        <label
          className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
            isFocused == "approval" ? "border-red-500" : ""
          }`}
        >
          <span className="text-gray-disabledText">Approval Line</span>
          <select
            type="text"
            className="outline-none col-span-2 mb-2 bg-white"
            onFocus={() => setIsFocused("approval")}
            onBlur={() => setIsFocused("")}
          >
            <option disabled selected>
              Pilih
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>
  )
}

export default AddEmployment