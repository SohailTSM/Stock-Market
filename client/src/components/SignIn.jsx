import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { viewAtom } from "../store/atoms";

function SignIn() {
  const [view, setView] = useRecoilState(viewAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setView('home')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href=""
            className="text-blue-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setView("signup");
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
