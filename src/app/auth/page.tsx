"use client";

import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import "../globals.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="text-black flex min-h-screen items-center justify-center flex-col bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Chat App</h1>
      {/* Chat App UI Container */}
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-700">{isLogin ? "Welcome back!" : "Join us!"}</h2>
          <button
            onClick={handleSwitchAuth}
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
          >
            {isLogin ? "SIGN UP" : "LOGIN"}
          </button>
        </div>

        {/* Chat Bubble Container */}
        <div className="mt-4 space-y-4 h-auto overflow-y-auto p-2 border rounded-md bg-gray-50">
          <div className="flex justify-start">
            <div className="rounded-lg bg-blue-400 p-3 max-w-xs">Hello! How can I help you?</div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-lg bg-green-300 p-3 max-w-xs">Hi! I need some assistance.</div>
          </div>
        </div>
        {/* Auth Content */}
        <div className="mt-4">{isLogin ? <Login /> : <Register />}</div>
      </div>
    </main>
  );
}
