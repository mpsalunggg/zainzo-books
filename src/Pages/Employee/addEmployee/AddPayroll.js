import React, { useContext, useState } from "react";
import { DataContext, PageContext } from "../AddEmployee";
import IconAdd from "./IconAdd";

function AddPayroll(setDone3) {
  const [isFocused, setIsFocused] = useState("");
  const { setPages } = useContext(PageContext);
  const { datalist, setDataList } = useContext(DataContext);
  const handleChange = (event) => {
    setDataList({
      ...datalist,
      [event.target.name]: event.target.value,
    });
    // console.log(datalist);
  };

  const handleNext = () => {
    if (
      datalist.payroll_basic_salary &&
      datalist.payroll_salary_type &&
      datalist.payroll_prorate &&
      datalist.payroll_bank_name &&
      datalist.payroll_account_name &&
      datalist.payroll_npwp &&
      datalist.payroll_tax_method &&
      datalist.payroll_ptkp_status &&
      datalist.payroll_tax_salary
    ) {
      setPages(4);
    } else {
      alert("Data Harus Lengkap!");
    }
    console.log("Data FIX", datalist)
  };

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
              name={"payroll_basic_salary"}
              value={datalist.payroll_basic_salary}
              onChange={(event) => handleChange(event)}
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
              name={"payroll_salary_type"}
              value={datalist.payroll_salary_type}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Salary Type
              </option>
              <option value={"Monthly"}>Monthly</option>
              <option value={"Daily"}>Daily</option>
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
              disabled
            >
              <option disabled>
                -
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
              name={"payroll_prorate"}
              value={datalist.payroll_prorate}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Prorate
              </option>
              <option value={"Base on working day"}>Base on working day</option>
              <option value={"Base on calender day"}>
                Base on calender day
              </option>
              <option value={"Base on calender day"}>
                Base on calender day
              </option>
              <option value={"Custom by working day"}>
                Base on calender day
              </option>
              <option value={"Custom by calender day"}>
                Base on calender day
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
              name={"payroll_bank_name"}
              value={datalist.payroll_bank_name}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Bank
              </option>
              <option value={"Bank Aceh Syariah"}>Bank Aceh Syariah</option>
              <option value={"Bank Aladin Syariah"}>Bank Aladin Syariah</option>
              <option value={"Bank Allo Indonesia"}>Bank Allo Indonesia</option>
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
              name={"payroll_account_number"}
              value={datalist.payroll_account_number}
              onChange={(event) => handleChange(event)}
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
              name={"payroll_account_name"}
              value={datalist.payroll_account_name}
              onChange={(event) => handleChange(event)}
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
              type="text"
              className="outline-none col-span-2 mb-2"
              // value={''}
              placeholder="00.000.000.0-000.000"
              onFocus={() => setIsFocused("npwp")}
              onBlur={() => setIsFocused("")}
              name={"payroll_npwp"}
              value={datalist.payroll_npwp}
              onChange={(event) => handleChange(event)}
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
              name={"payroll_ptkp_status"}
              value={datalist.payroll_ptkp_status}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih PTKP Status
              </option>
              <option value={"TK/0"}>TK/0</option>
              <option value={"TK/1"}>TK/1</option>
              <option value={"TK/2"}>TK/2</option>
              <option value={"TK/3"}>TK/3</option>
              <option value={"K/0"}>K/0</option>
              <option value={"K/1"}>K/1</option>
              <option value={"K/2"}>K/2</option>
              <option value={"K/3"}>K/3</option>
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
              name={"payroll_tax_method"}
              value={datalist.payroll_tax_method}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Tax Method
              </option>
              <option value={"Gross"}>Gross</option>
              <option value={"Gross Up"}>Gross Up</option>
              <option value={"Netto"}>Netto</option>
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
              name={"payroll_tax_salary"}
              value={datalist.payroll_tax_salary}
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Tax Salary
              </option>
              <option value={"Taxable"}>Taxable</option>
              <option value={"Non-Taxable"}>Non-Taxable</option>
            </select>
          </label>
        </div>
      </div>
      <section className="my-8 flex gap-4 justify-end">
        <button
          className="w-24 h-8 border-2 border-gray-500 rounded-full text-sm text-gray-500"
          onClick={() => setPages(2)}
        >
          Cancel
        </button>
        <button
          className="w-24 h-8 bg-redColor rounded-full text-sm text-white"
          onClick={handleNext}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default AddPayroll;
