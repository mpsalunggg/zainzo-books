import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from ".././Assets/loginimage.png";
import ZainzoImg from ".././Assets/zainzo-people.png";
import { setUserSession } from "../Utils/Common";

// fauliarahma05@gmail.com
// 12345678

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // event.preventDefault();
    setError(null);
    setLoading(true);
    if (email && password) {
      axios
        .post("http://people.api.zainzo.com/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          setLoading(false);
          setUserSession(res.data.token, res.data.user);
          navigate("/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 401) {
            setError(error.response.data.error);
          } else {
            setError("something went wrong. try again later");
          }
        });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="flex w-custom3 h-custom bg-white rounded-xl mx-auto my-auto shadow-md"
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
          <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
        </div>
        {error && <div className="text-red-600 text-sm">*{error}</div>}
        <button type="button" onClick={handleLogin} className="bg-redColor block w-full p-2.5 rounded-lg text-white text-center">
          Login
        </button>
        <hr></hr>
        <button className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 flex items-center justify-center">
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6" />
          <p>Sign in dengan google</p>
        </button>
        <p className="text-sm flex justify-center items-center">
          Belum punya akun?{" "}
          <Link to={"/register"} className="text-redColor">
            Daftar
          </Link>
        </p>
      </form>
      <div style={{ backgroundImage: `url('${LoginImg}')` }} className="w-custom2 bg-cover bg-center rounded-tr-xl rounded-br-xl" />
    </div>
  );
}

export default Login;
