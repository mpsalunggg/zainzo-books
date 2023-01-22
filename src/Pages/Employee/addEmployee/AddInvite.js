import React from "react";
import IconAdd from "./IconAdd";

function AddInvite() {
  return (
    <div>
      <IconAdd active={"invite"} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold">
          Invite the employee to access Zainzo People
        </h1>
        <p className="text-gray-disabledText mb-8 text-sm text-center">
          Selangkah lagi Anda berhasil menambahkan data karyawan. Untuk
          melanjutkan prosesnya,
          <br></br>Anda bisa mengundang karyawan untuk mengakses Zainzo People.
        </p>
        <div className="w-64">
          <h1 className="text-sm font-bold">Role Access</h1>
          <select type='text' className="outline-none w-full p-2 text-sm my-2 h-10 rounded-xl border-2 border[#D1D1D1]">
            <option>Pilih Hak Akses Akun</option>
          </select>
          <p className="text-xs text-gray-disabledText">Undang untuk memberi mereka akses ke platform menggunakan fitur Employee Self Service. Anda dapat melakukannya nanti di halaman pengaturan</p>
        </div>
      </div>
    </div>
  );
}

export default AddInvite;
