"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UnauthenticatedLayout from "@/components/unauthenticated-layout";
import { EyeOffIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { motion } from "motion/react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center h-screen">
      <div className="w-full flex items-center p-4 md:p-0 justify-center h-screen bg-custom-purple">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col gap-4 items-center">
            <Image src="/logo.svg" width={107} height={31.04} alt="logo" />
            <div className="space-y-1">
              <h1 className="text-center text-white font-bold text-2xl">
                Welcome back, Ali Riaz 🙇🏾‍♀️
              </h1>
              <h2 className="text-center text-base text-custom-muted">
                Login to access your Uifry account
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-16">
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-white text-sm mb-1"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E.g Almaz@Uifry.com"
                  className="h-14 px-4 border text-custom-muted border-gray-200 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <Label
                  htmlFor="password"
                  className="block text-white text-sm mb-1"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="h-14 px-4 border text-custom-muted border-gray-200 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-custom-purple-light"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <span>Show</span>
                  )}
                </button>
                <div className="text-right mt-1">
                  <a href="#" className="text-custom-purple-light text-sm ">
                    I Forgot My Password!
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <motion.button
                type="submit"
                className="w-full h-14 bg-custom-purple-light hover:bg-custom-purple-dark hover:text-custom-muted text-custom-purple-dark font-medium rounded-md cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#6D28D9",
                  color: "#FFFFFF",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Login
              </motion.button>

              <div className="text-center">
                <a href="#" className="text-white text-sm">
                  Not Ali Riaz?{" "}
                  <span className="text-custom-purple-light">
                    Login to continue
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full hidden lg:flex flex-col items-center justify-between h-screen bg-custom-purple-dark">
        <UnauthenticatedLayout />
      </div>
    </div>
  );
}
