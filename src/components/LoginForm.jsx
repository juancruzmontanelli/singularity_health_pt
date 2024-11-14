import { useState } from "react";
import { useAuth } from '../context/AuthContext'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading, error } = useAuth()

  const isFormValid = email.includes("@") && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) login(email, password);
  }

  return (
    <form className="mr-[193px]" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-[448px] h-[48px] mb-[13px] mt-[40px] px-[29px] py-[11px] shadow-input font-open-sans uppercase text-[18px] leading-[13px] font-400 text-soft-gray"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[448px] h-[48px] mb-[37px] px-[29px] py-[11px] shadow-input font-open-sans uppercase text-[18px] leading-[13px] font-400 text-soft-gray"
      />
      <br />
      <h5 className=" text-end text-soft-gray font-open-sans text-[14px] leading-[13px] mb-[40px] ">
        ¿Olvidaste tu contraseña?
      </h5>
      <div className="flex flex-col justify-center items-center" type="submit" disabled={!isFormValid || loading} >
        <button className="mb-[32px] bg-azure-blue shadow-button w-[239px] h-[75px] rounded-[38px] text-off-white font-open-sans font-700 text-[20px] leading-[27px] ">
          INICIAR SESIÓN
        </button>
         {error && <p>{error}</p>}
        <h4 className=" font-open-sans text-[14px] leading-[13px] text-soft-gray font-400">
          AÚN NO TENGO CUENTA <a className="text-deep-blue">REGISTRARSE</a>
        </h4>
      </div>
    </form>
  );
};

export default LoginForm;
