import React from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <div className="w-full h-screen bg-pure-white">
      <svg
        className="h-screen relative z-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 50"
      >
        <path
          fill="#fa5a3f"
          fillOpacity={1}
          d="M0 0 0 60 54 60C51 49 46 40 43 29Q38 14 50 6 56 2 59 0L0 0"
        ></path>
        <path
          fill="#fe6148"
          fillOpacity={1}
          d="M44.9 0 54 0C49 3 42 4 37.5 6Q25 10 22.5 19 19 34 26 49C28 53 28 56 30 60L45.4 60C44 51 42 43 38 34Q33 20 34.2 14 36 10 37.5 6C39 4 42 1 45 0M44.9 0 54 0C49 3 42 4 37.5 6Q25 10 22.5 19 19 34 26 49C28 53 28 56 30 60L45.4 60C44 51 42 43 38 34Q33 20 35 15 36 10 37.5 6C39 4 42 1 45 0M44.9 0 54 0C49 3 41 5 37.5 6Q25 10 22.5 19 19 34 26 49C28 53 28 56 30 60L45.4 60C44 51 42 43 38 34Q33 20 35 15 36 10 37.5 6C39 4 42 1 45 0"
        ></path>
        <path
          fill="#ff6752"
          fillOpacity={1}
          d="M54 0C49 2 43 4 37.5 6Q31 17 36 29 39 35 46 60L54 60C51 49 46 40 43 29Q38 14 50 6 56 2 59 0L0 0"
        ></path>
      </svg>
      <div className=" w-full absolute top-1/4 right-4 z-10 flex justify-between">
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
    </div>
  );
};

export default Login;
