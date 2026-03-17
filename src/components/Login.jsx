import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/logo.svg';


const Login = ({ setLoading }) => {
  const navigate = useNavigate();

  const [registrationStatus, setRegistrationStatus] = useState("login");
  const isLogin = registrationStatus === "login";

  const changePage = (value) => setRegistrationStatus(value);

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ stop refresh

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000);

    
  };
  return (
    <>
    <div className={`bg-gradient-to-r from-[#f6f6fe] to-blue-200 w-screen h-screen flex items-center justify-center flex-col px-4 ${isLogin ? 'active' : ''}`}>
        
        <img src={Logo} className='py-2' alt="" />
        <div className='relative min-w-full lg:min-w-[850px] min-h-[550px] shadow-xl bg-white rounded-3xl p- overflow-hidden flex justify-center items-center'>
            {/* Login */}
            <div className={`flex items-center justify-center flex-col border border-red-300 `}> 
                <form action="" className={`absolute translate-y-40 lg:translate-y-0 group-active:right-1/2 right-0  w-full lg:w-1/2 h-full bg-white flex flex-col items-center text-[#333] p-[40px] z-2 transition-all ease-in-out duration-600 ${isLogin ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                    <h1 className='font-bold'>Login</h1>
                    <div className="relative mt-[30px]">
                        <input type="text" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='Username' required/>
                        <i className="bx bxs-user absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]"></i>
                    </div>

                    <div className="relative my-[30px]">
                        <input type="password" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='Password' required/>
                        <i className="bx bxs-lock-alt absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]"></i>
                    </div>
                    <div className="-mt-[15px] mb-[15px]">
                        <a href="" className="#333">Forgot Password?</a>
                    </div>
                    <button type='submit' onClick={handleLogin} className="w-full h-[48px] bg-[#4865db] text-white rounded-2xl shadow-md cursor-pointer text-[16px] font-semibold">Login</button>
                </form>
            </div>

            {/* Registration */}
            <div className={`flex items-center justify-center flex-col`}>
                 <form action="" className={`absolute translate-y-20 lg:translate-y-0 left-0 w-full lg:w-1/2 h-full bg-white flex flex-col items-center text-[#333] p-[40px] z-1 transition-all ease-in-out duration-600 ${!isLogin ? 'translate-x-0 opacity-100' : ' translate-x-full opacity-0'}`}>
                    <h1 className='font-bold'>Registration</h1>
                    <div className="relative mt-[30px]">
                        <input type="text" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='Username' required/>
                        <i class='bx bxs-user absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]'></i>
                    </div>

                    <div className="relative mt-[30px]">
                        <input type="email" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='johndoe@gmail.com' required/>
                        <i class='bx bxs-envelope absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]' ></i>
                    </div>

                    <div className="relative mt-[30px]">
                        <input type="password" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='Password' required/>
                        <i class='bx bxs-lock-alt absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]' ></i>
                    </div>
                    <div className="relative my-[30px]">
                        <input type="password" className='w-full bg-[#eee] rounded-md border-0 py-[13px] pr-[50px] pl-[20px] outline-0 text-[16px] text-[#333] font-semibold' placeholder='Confirm Password' required/>
                        <i class='bx bxs-lock-alt absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]' ></i>
                    </div>
                    <button type='submit' className="w-full h-[48px] bg-[#4865db] text-white rounded-2xl shadow-md cursor-pointer text-[16px] font-semibold">Register</button>
                </form>
            </div>

            {/* Toggle Box */}
            <div className={`relative lg:absolute w-[100%] h-[50vh] lg:h-full before:content-[''] before:absolute before:top-0 before:-translate-y-[120px] lg:before:top-0 lg:before:translate-y-0 before:left-0 lg:before:-left-[250%] before:w-full lg:before:w-[300%] before:h-[40%] lg:before:h-full before:bg-[#4865db] before:rounded-full before:z-2 transition-all duration-500 ease-in-out ${isLogin ? 'before:top-0 lg:before:left-[-250%]' : 'before:top-0 lg:before:left-1/2'}`}>
            {/* Toggle Box left */}
            <div className={`relative lg:absolute w-1/2 h-full text-white flex flex-col items-center -translate-y-50 translate-x-20 md:translate-y-0 md:translate-x-0 justify-center z-2 transition-all duration-600 ease-in-out ${isLogin  ? 'left-0' : 'hidden pointer-events-none'} px-4`}>
                <h1 className='font-bold -m-[10px]'>Hello, Welcome!</h1>
                <p className='text-[14.5px] m-[15px]'>Don't have an account?</p>
                <button id='registration' onClick={() => changePage("register")} className="w-full h-[48px] bg-[#4865db] hover:border-blue-900 hover:border text-white rounded-2xl cursor-pointer text-[16px] font-semibold ">Register</button>
            </div>

            {/* Toggle Box right */}
            <div className={`relative lg:absolute w-1/2 h-full text-white flex flex-col items-center justify-center z-2 transition-all duration-600 ease-in-out  ${!isLogin  ? 'right-0' : 'hidden pointer-events-none'} px-4`}>
                <h1 className='font-bold -m-[10px]'>Welcome Back</h1>
                <p className='text-[14.5px] m-[15px]'>Already have an account?</p>
                <button id='login' onClick={() => changePage("login")} className="w-full h-[48px] bg-[#4865db] hover:border-blue-900 hover:border text-white rounded-2xl cursor-pointer text-[16px] font-semibold">Login</button>
            </div>
            </div>

        </div>
        {/* <button onClick={handleLogin}>Login</button> */}
    </div> 
    </>
  )
}


export default Login
