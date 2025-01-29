"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Registration = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setEmailSent(true);
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 text-black">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Register to BeyondChats
        </h2>
        {!emailSent ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
            <div className="flex justify-center items-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline w-full mt-2"
              >
                Continue with Google
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-500">
              Verification email sent! Check your inbox.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Registration;
