import React, { useContext, useState } from "react";
import IconAdd from "./IconAdd";
import "../../../App.css";
import { DataContext, PageContext, PermanentContext } from "../AddEmployee";

function AddPersonal({ setDone1 }) {
  const [isFocused, setIsFocused] = useState("");
  // const [permanent, setPermanent] = useState(false);
  const { setPages } = useContext(PageContext);
  const { datalist, setDataList } = useContext(DataContext);
  const { permanent, setPermanent } = useContext(PermanentContext);

  const handleChange = (event) => {
    setDataList({
      ...datalist,
      [event.target.name]: event.target.value,
    });
    // console.log(datalist);
  };

  const handleNext = () => {
    if (
      datalist.employee_fullname &&
      datalist.employee_nickname &&
      datalist.email &&
      datalist.employee_phone_number &&
      datalist.employee_birth_place &&
      datalist.employee_dob &&
      datalist.employee_gender &&
      datalist.employee_maritual_status &&
      datalist.employee_blood &&
      datalist.employee_religion &&
      // datalist.employee_id_exp &&
      datalist.employee_id_type &&
      datalist.employee_id_number &&
      datalist.employee_id_address &&
      datalist.employee_residential_addr &&
      datalist.employee_portal_code
    ) {
      setPages(2);
    } else {
      alert("Data Harus Lengkap!");
    }
    console.log("data FIX", datalist);
    console.log(permanent);
  };

  return (
    <div className="px-6 py-4 flex flex-col w-full">
      <div className="h-full">
        <IconAdd active={"personal"} addDone1={setDone1} />
        <h1 className="text-lg font-bold">Personal</h1>
        <p className="text-gray-disabledText mb-8 text-sm">
          Isi semua informasi pribadi karyawan
        </p>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "nama-lengkap" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Full Name</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              name="employee_fullname"
              value={datalist.employee_fullname}
              placeholder="Nama Lengkap"
              onFocus={() => setIsFocused("nama-lengkap")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition ${
              isFocused == "nama-panggilan" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Nick Name</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              name="employee_nickname"
              value={datalist.employee_nickname}
              placeholder="Nama Panggilan"
              onFocus={() => setIsFocused("nama-panggilan")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "email" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Email</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              name="email"
              value={datalist.email}
              placeholder="Email digunakan untuk login"
              onFocus={() => setIsFocused("email")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "nohp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Phone Number</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              name="employee_phone_number"
              value={datalist.employee_phone_number}
              placeholder="Masukkan nomor aktif"
              onFocus={() => setIsFocused("nohp")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "tempat-lahir" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Place of Birth</span>
            <input
              type="text"
              className="outline-none col-span-2 mb-2"
              name="employee_birth_place"
              value={datalist.employee_birth_place}
              placeholder="Tempat Lahir"
              onFocus={() => setIsFocused("tempat-lahir")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "tgl-lahir" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Birthdate</span>
            <input
              type="date"
              className="outline-none col-span-2 mb-2"
              name="employee_dob"
              value={datalist.employee_dob}
              placeholder="Pilih Tanggal Lahir"
              onFocus={() => setIsFocused("tgl-lahir")}
              onBlur={() => setIsFocused("")}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "gender" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Gender</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200"
              onFocus={() => setIsFocused("gender")}
              onBlur={() => setIsFocused("")}
              name="employee_gender"
              value={
                datalist.employee_gender
                // ? datalist.employee_gender
                // : "Pilih Jenis Kelamin"
              }
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Jenis Kelamin
              </option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "status" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Marital Status</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("status")}
              onBlur={() => setIsFocused("")}
              name="employee_maritual_status"
              value={
                datalist.employee_maritual_status
                // ? datalist.employee_maritual_status
                // : "Pilih Status"
              }
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Status
              </option>
              <option value={"Single"}>Single</option>
              <option value={"Married"}>Married</option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "blood-type" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Blood Type</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("blood-type")}
              onBlur={() => setIsFocused("")}
              name="employee_blood"
              value={
                datalist.employee_blood
                // ? datalist.employee_blood
                // : "Pilih Golongan Darah"
              }
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Golongan Darah
              </option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"AB"}>AB</option>
              <option value={"O"}>O</option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "religion" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Religion</span>
            <select
              type="text"
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("religion")}
              onBlur={() => setIsFocused("")}
              name="employee_religion"
              value={
                datalist.employee_religion
                // ? datalist.employee_religion
                // : "Agama"
              }
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Agama
              </option>
              <option value={"Islam"}>Islam</option>
              <option value={"Kristen"}>Kristen</option>
              <option value={"Katolik"}>Katolik</option>
              <option value={"Hindu"}>Hindu</option>
              <option value={"Budha"}>Budha</option>
              <option value={"Konghucu"}>Konghucu</option>
            </select>
          </label>
        </div>
      </div>
      <div className="">
        <h1 className="text-base font-bold pt-8 pb-6">Identity & Address</h1>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition${
              isFocused == "id-type" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Type</span>
            <select
              className="outline-none col-span-2 bg-white"
              onFocus={() => setIsFocused("id-type")}
              onBlur={() => setIsFocused("")}
              name="employee_id_type"
              value={
                datalist.employee_id_type
                // ? datalist.employee_id_type
                // : "Pilih Jenis Kartu Identitas"
              }
              onChange={(event) => handleChange(event)}
            >
              <option value={""} disabled>
                Pilih Jenis Kartu Identitas
              </option>
              <option value={"KTP"}>KTP</option>
              <option value={"Passport"}>Passport</option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "id-number" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Number</span>
            <input
              type="text"
              className="outline-none col-span-2"
              placeholder="Masukkan nomor ID"
              onFocus={() => setIsFocused("id-number")}
              onBlur={() => setIsFocused("")}
              name="employee_id_number"
              value={datalist.employee_id_number}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-8 ${
              isFocused == "id-exp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Expiration Date</span>
            <input
              type="date"
              className={`outline-none col-span-2 mb-2 bg-white ${
                permanent ? "pointer-events-none opacity-50" : ""
              }`}
              onFocus={() => setIsFocused("id-exp")}
              onBlur={() => setIsFocused("")}
              name="employee_id_exp"
              value={datalist.employee_id_exp}
              disabled={permanent}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </label>
          <div className="absolute mt-8 flex items-center mt-24">
            <input
              id="link-checkbox"
              type="checkbox"
              // name="employee_id_exp"
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
              checked={permanent}
              onChange={(event) => {
                setPermanent(event.target.checked);
                setDataList({
                  ...datalist,
                  employee_id_exp: "",
                });
                // handleChange(event)
              }}
            />
            <label htmlFor="link-checkbox" className="ml-2 text-sm">
              Permanent
            </label>
          </div>
          {/* <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-8 ${
              isFocused == "id-exp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Expiration Date</span>
            <input
              type="date"
              className="outline-none col-span-2"
              onFocus={() => setIsFocused("id-exp")}
              onBlur={() => setIsFocused("")}
              name="employee_id_type"
              value={datalist.employee_id_type}
              onChange={(event) => handleChange(event)}
            />
          </label>
          <div class="absolute mt-8 flex items-center mt-24">
            <input
              id="link-checkbox"
              type="checkbox"
              // value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="link-checkbox" className="ml-2 text-sm">
              Permanent
            </label>
          </div> */}
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-8 ${
              isFocused == "portal-code" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Portal Code</span>
            <input
              type="text"
              className="outline-none mb-2 bg-white"
              placeholder="Masukkan kode Pos"
              onFocus={() => setIsFocused("portal-code")}
              onBlur={() => setIsFocused("")}
              name="employee_portal_code"
              value={datalist.employee_portal_code}
              onChange={(event) => handleChange(event)}
              // value={"98352"}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "citizen-id" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Citizen ID Address</span>
            <input
              type="text"
              className="outline-none mb-2 bg-white"
              onFocus={() => setIsFocused("citizen-id")}
              onBlur={() => setIsFocused("")}
              name="employee_id_address"
              value={datalist.employee_id_address}
              onChange={(event) => handleChange(event)}
              placeholder="Citizen ID"
              // value={"dsd"}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "resedential" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Residential Address</span>
            <input
              type="text"
              className="outline-none mb-2"
              onFocus={() => setIsFocused("resedential")}
              onBlur={() => setIsFocused("")}
              name="employee_residential_addr"
              value={datalist.employee_residential_addr}
              onChange={(event) => handleChange(event)}
              placeholder="Resedential Address"
              // value={"sdsd"}
            />
          </label>
        </div>
      </div>
      <section className="my-8 flex gap-4 justify-end">
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

export default AddPersonal;
