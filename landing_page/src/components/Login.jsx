import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-red-600 p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-lg mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 text-black rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 text-black rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white text-lg font-bold rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
