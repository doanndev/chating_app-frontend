"use client";

import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import "../globals.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchAuh = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="relative min-h-screen w-full bg-white">
      {/* component */}
      <div className="p-6" x-data="app">
        {/* header */}
        <header className="flex w-full justify-between">
          {/* buttons */}
          <div className="absolute right-10">
            {isLogin ? (
              <button
                onClick={handleSwitchAuh}
                type="button"
                x-show="isLoginPage"
                className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                LOGIN
              </button>
            ) : (
              <button
                onClick={handleSwitchAuh}
                type="button"
                x-show="!isLoginPage"
                className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                SIGN UP
              </button>
            )}
          </div>
        </header>
        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          {/* register content */}
          {/* login content */}
          {isLogin ? <Login /> : <Register />}

          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>
          <footer>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                FACEBOOK
              </a>
              <a
                href="#"
                className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                GOOGLE
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              By signing in to ********, you agree to our
              <a href="#" className="font-medium text-gray-500">
                Terms
              </a>{" "}
              and
              <a href="#" className="font-medium text-gray-500">
                Privacy Policy
              </a>
              .
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
