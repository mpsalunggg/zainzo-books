import React, { useState } from "react";
import IconAdd from "./IconAdd";
import "../../../App.css";

function AddPersonal({ setDone1 }) {
  const [isFocused, setIsFocused] = useState("");

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
              // value={''}
              placeholder="Nama Lengkap"
              onFocus={() => setIsFocused("nama-lengkap")}
              onBlur={() => setIsFocused("")}
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
              // value={"Margaret"}
              placeholder="Nama Panggilan"
              onFocus={() => setIsFocused("nama-panggilan")}
              onBlur={() => setIsFocused("")}
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
              // value={"maragaretfebiola@gmail.com"}
              placeholder="Email digunakan untuk login"
              onFocus={() => setIsFocused("email")}
              onBlur={() => setIsFocused("")}
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
              // value={"085706611112"}
              placeholder="Masukkan nomor aktif"
              onFocus={() => setIsFocused("nohp")}
              onBlur={() => setIsFocused("")}
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
              // value={"Jakarta"}
              placeholder="Tempat Lahir"
              onFocus={() => setIsFocused("tempat-lahir")}
              onBlur={() => setIsFocused("")}
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
              // value="1994-12-31"
              placeholder="Pilih Tanggal Lahir"
              onFocus={() => setIsFocused("tgl-lahir")}
              onBlur={() => setIsFocused("")}
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
            >
              <option disabled selected>
                Pilih Jenis Kelamin
              </option>
              <option>Male</option>
              <option>Female</option>
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
            >
              <option disabled selected>
                Pilih Status
              </option>
              <option>Single</option>
              <option>Married</option>
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
            >
              <option disabled selected>
                Pilih Golongan Darah
              </option>
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
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
            >
              <option disabled selected>
                Agama
              </option>
              <option>Islam</option>
              <option>Kristen</option>
              <option>Katolik</option>
              <option>Hindu</option>
              <option>Budha</option>
              <option>Konghucu</option>
            </select>
          </label>
        </div>
      </div>
      <div className="">
        <h1 className="text-base font-bold pt-8 pb-6">Identity & Address</h1>
        <div className="grid grid-cols-2 gap-y-10 text-sm">
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-4 ${
              isFocused == "id-type" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Type</span>
            <select
              className="outline-none col-span-2 mb-2 bg-white"
              onFocus={() => setIsFocused("id-type")}
              onBlur={() => setIsFocused("")}
            >
              <option>Pilih Jenis Kartu Identitas</option>
            </select>
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-4 ${
              isFocused == "id-number" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Number</span>
            <input
              type="text"
              className="outline-none mb-2"
              placeholder="Masukkan nomor ID"
              onFocus={() => setIsFocused("id-number")}
              onBlur={() => setIsFocused("")}
            />
          </label>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "id-exp" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">ID Expiration Date</span>
            <input
              type="date"
              className="outline-none col-span-2 mb-2"
              onFocus={() => setIsFocused("id-exp")}
              onBlur={() => setIsFocused("")}
            />
          </label>
          <div class="absolute mt-8 flex items-center mt-2">
            <input
              id="link-checkbox"
              type="checkbox"
              // value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="link-checkbox" className="ml-2 text-sm">
              Permanent
            </label>
          </div>
          <label
            className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition ${
              isFocused == "portal-code" ? "border-red-500" : ""
            }`}
          >
            <span className="text-gray-disabledText">Portal Code</span>
            <input
              type="text"
              className="outline-none mb-2"
              placeholder="Masukkan kode Pos"
              onFocus={() => setIsFocused("portal-code")}
              onBlur={() => setIsFocused("")}
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
              className="outline-none mb-2"
              onFocus={() => setIsFocused("citizen-id")}
              onBlur={() => setIsFocused("")}
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
              // value={"sdsd"}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default AddPersonal;
