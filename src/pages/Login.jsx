import React from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.svg";

const Login = () => {

  return (
    <div className="flex items-center h-screen bg-pure-white justify-between">
      <div className="w-[365px] h-[365px] ml-[119px] rounded-full bg-pure-white p-[60px] flex justify-center">
        <img src={logo} alt="Logo" className="w-[208px] h-[245px] " />
      </div>
      <div>
        <div className=" w-[448px] h-[40px]  border-l-8 border-l-coral bg-pure-white flex items-center justify-center">
          <h1 className=" w-[448px] text-left px-[33px] font-gibson uppercase text-25 font-600 leading-55 text-dark-gray">
            Bienvenido
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
