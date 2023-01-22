import React, { useState } from "react";
import IconAdd from "./IconAdd";

function AddPayroll(setDone3) {
  const [isFocused, setIsFocused] = useState("");
  return (
    <div className="px-6 py-4 flex flex-col w-full">
      <div className="h-full">
        <IconAdd active={"payroll"} addDone3={setDone3} />
        <h1 className="text-lg font-bold">Salary</h1>
        <p className="text-gray-disabledText mb-8 text-sm">
          Masukkan informasi gaji karyawan
        </p>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "employeeid" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Basic Salary*</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan Gaji Pokok"
              onFocus={() => setIsFocused("employeeid")}
              onBlur={() => setIsFocused("")}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition ${
              isFocused == "barcode" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Salary Type</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={"Margaret"}
              placeholder="0"
              onFocus={() => setIsFocused("barcode")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih
              </option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "employeestatus" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Payment Schedule</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={"maragaretfebiola@gmail.com"}
              placeholder="Pilih Status"
              onFocus={() => setIsFocused("employeestatus")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih Jadwal
              </option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "join-date" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Prorate Setting</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={"Jakarta"}
              placeholder="Tempat Lahir"
              onFocus={() => setIsFocused("join-date")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih
              </option>
            </select>
          </label>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-bold">Bank Account</h1>
        <p className="text-gray-disabledText mb-8 text-sm">
          Rekening karyawan digunakan untuk penggajian
        </p>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "bank-name" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Bank Name</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan ID"
              onFocus={() => setIsFocused("bank-name")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih
              </option>
            </select>
          </label>
          <label></label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition ${
              isFocused == "account-number" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Account Number</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              // value={"Margaret"}
              placeholder=""
              onFocus={() => setIsFocused("account-number")}
              onBlur={() => setIsFocused("")}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "account-holder" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Account Holder Name</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder=""
              onFocus={() => setIsFocused("account-holder")}
              onBlur={() => setIsFocused("")}
            />
          </label>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-bold">Tax Configuration</h1>
        <p className="text-gray-disabledText mb-8 text-sm">
        Pilih jenis penghitungan pajak yang relevan dengan perusahaan Anda
        </p>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "npwp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">NPWP</span>
            <input
            type='text'
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="00.000.000.0-000.000"
              onFocus={() => setIsFocused("npwp")}
              onBlur={() => setIsFocused("")}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "ptkp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">PTKP Status*</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan ID"
              onFocus={() => setIsFocused("ptkp")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih Status
              </option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "tax-method" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Tax Method</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan ID"
              onFocus={() => setIsFocused("tax-method")}
              onBlur={() => setIsFocused("")}
            >
              <option disabled selected>
                Pilih
              </option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "tax-salary" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Tax Salary</span>
            <select
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="Masukkan ID"
              onFocus={() => setIsFocused("tax-salary")}
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
  );
}

export default AddPayroll;
