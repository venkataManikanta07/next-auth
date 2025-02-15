"use client";
import Link from "next/link";
import React from "react";

export default function SignInPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const login = async () => {
    console.log("Login method");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <hr className="border-gray-700 mb-4" />

        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Username
            </label>
            <input
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              value={user.email}
              placeholder="Enter your username"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button
            onClick={login}
            className="w-full p-2 bg-blue-600 hover:bg-blue-500 transition duration-300 rounded-md font-semibold text-white"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-sm">
            Create an account?{" "}
            <Link
              href="/signup"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
