"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Registration = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit } = useForm();
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const onSubmit = (data: any) => {
    console.log(data);
    setEmailSent(true);
  };

  const handleGoogleLogin = () => {
    setEmailSent(true);
  };

  const handleKeyDown = (e: any) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  const handleInput = (e: any, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").slice(0, otp.length);
    if (/^[0-9]+$/.test(text)) {
      setOtp(text.split(""));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-black p-6 select-none">
      <motion.div
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {!emailSent ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              Register to BeyondChats
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="input input-bordered w-full p-3 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="input input-bordered w-full p-3 rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="input input-bordered w-full p-3 rounded-lg"
                required
              />
              <button
                type="submit"
                className="btn btn-outline w-full py-3 rounded-lg"
              >
                Register
              </button>
            </form>
            <p className="text-center text-gray-600 my-2">&&</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center py-3 rounded-lg "
            >
              <FcGoogle className="text-2xl mr-2" /> Continue with Google
            </button>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-left text-2xl text-bold mb-10 ">
              {" "}
              A verification email has been sent
            </h3>
            <p className="text-gray-600 my-3"> Enter the OTP below:</p>
            <form id="otp-form" className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <motion.input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(e, index)}
                  onKeyDown={handleKeyDown}
                  onPaste={handlePaste}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-2xl font-semibold text-center border rounded-lg shadow-sm outline-none focus:border-green-400"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </form>
            <div className="flex justify-end my-5">
              <Link href={"/"}>
                <button
                  className="bg-white text-center w-40 rounded-2xl h-14 relative text-black  font-semibold group"
                  type="button"
                >
                  <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[162px] z-10 duration-500">
                    <FaArrowRightLong className="text-xl" />
                  </div>
                  <p className="translate-x-2">Continue</p>
                </button>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Registration;
