import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from ".././Assets/loginimage.png";
import ZainzoImg from ".././Assets/zainzo-people.png";
import { getToken, setUserSession } from "../Utils/Common";

function Register() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://people.api.zainzo.com/api/registerAdmin", {
        employee_fullname: fullname,
        employee_phone_number: phoneNumber,
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        setUserSession(res.data.token.original.access_token, res.data);
        navigate("/onboarding");
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        // if (error.response.status === 401 || error.response.status === 400) {
        setError(error.response.data.error);
        // } else {
        // setError("something went wrong. try again later");
        // }
      });
    setPassword("");
    console.log(error);
  };

  return (
    <div
      className="flex w-custom3 h-custom2 bg-white rounded-xl mx-auto my-auto shadow-md"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form className="w-custom p-8 flex flex-col gap-4 justify-center">
        <div className="flex justify-center">
          <img src={ZainzoImg} className="w-28" />
        </div>
        <div>
          <label for="nama-lengkap" className="block mb-2 text-sm font-medium text-gray-900 ">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama-lengkap"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm">{error.employee_fullname && error.employee_fullname}</div>}
        </div>
        <div>
          <label for="nomor-ponsel" className="block mb-2 text-sm font-medium text-gray-900 ">
            Nomor Ponsel
          </label>
          <input
            type="text"
            id="nomor-ponsel"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm">{error.employee_phone_number ? error.employee_phone_number : error}</div>}
        </div>
        <div>
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm">{error.email ? error.email : error}</div>}
        </div>
        <div>
          <label for="Password" className="block mb-2 text-sm font-medium text-gray-900 ">
            Password
          </label>
          <input
            type="password"
            id="Password"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-600 text-sm">{error.password && error.password}</div>}
        </div>
        <button type="button" onClick={() => handleSubmit()} className="bg-redColor block w-full p-2.5 rounded-lg text-white text-center">
          Daftar
        </button>
        <hr></hr>
        <button className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 flex items-center justify-center">
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6" />
          <p>Sign up dengan google</p>
        </button>
        <p className="text-sm flex justify-center items-center">
          Sudah punya akun?{" "}
          <Link to={"/"} className="text-redColor">
            Masuk
          </Link>
        </p>
      </form>
      <div style={{ backgroundImage: `url('${LoginImg}')` }} className="w-custom2 bg-cover bg-center rounded-tr-xl rounded-br-xl" />
    </div>
  );
}

export default Register;
