import React from 'react'
import { Link } from "react-router-dom";
import ZainzoImg from ".././Assets/zainzo-people.png";

const jabatan = [
    {
        id: 1,
        title: 'Owner'
    },
    {
        id: 2,
        title: 'Director'
    },
    {
        id: 3,
        title: 'HRD Manager'
    },
    {
        id: 4,
        title: 'HRD Staff'
    },
    {
        id: 5,
        title: 'Finance Manager'
    },
    {
        id: 6,
        title: 'Other'
    },
]

const karyawan = [
    {
        id:1,
        jml: 'Kurang Dari 50 Karyawan'
    },
    {
        id:2,
        jml: '51 - 100 Karyawan'
    },
    {
        id:3,
        jml: '100 - 300 Karyawan'
    },
]

const industri = [
    {
        id:1,
        title: 'NGO atau Non Profit'
    },
    {
        id:2,
        title: 'Manufaktur'
    }
]

function Onboarding() {
  return (
    <div
    className="flex w-auto h-custom3 bg-white rounded-xl mx-auto my-auto shadow-md"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <form className="w-custom p-8 flex flex-col gap-4 justify-center">
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className='font-bold text-xl'>Selamat datang di Zainzo People</p>
        <p className='text-center text-sm'>Sebelum memulai, kami ingin tahu tentang perusahaan Anda</p>
      </div>
      <div>
        <label
          for="nama-perusahaan"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nama Perusahaan
        </label>
        <input
          type="text"
          id="nama-perusahaan"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          placeholder='Tulis Nama Perusahaan'
        />
      </div>
      <div>
        <label
          for="jabatan"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jabatan Anda
        </label>
        <select
          type="text"
          id="jabatan"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required>
            <option selected>Pilih Jabatan</option>
            {
                jabatan.map(val =>{
                    return <option key={val.id}>{val.title}</option>
                })
            }
        </select>
      </div>
      <div>
        <label
          for="jumlah-karyawan"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jumlah Karyawan
        </label>
        <select
          type="text"
          id="jumlah-karyawan"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required>
            <option selected>Pilih Jumlah Karyawan</option>
            {
                karyawan.map(val =>{
                    return <option key={val.id}>{val.jml}</option>
                })
            }
        </select>
      </div>
      <div>
        <label
          for="jenis-industri"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Jenis Industri
        </label>
        <select
          type="text"
          id="jenis-industri"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required>
            <option selected>Pilih Jenis Industri</option>
            {
                industri.map(val =>{
                    return <option key={val.id}>{val.title}</option>
                })
            }
        </select>
      </div>
      <Link to={'/dashboard'} className="bg-redColor block w-full p-2.5 rounded-lg text-white text-center">
        Mulai
      </Link>
    </form>
  </div>
  )
}

export default Onboarding