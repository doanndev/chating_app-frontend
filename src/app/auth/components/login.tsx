"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import store from "~/redux/store";
import constants from "~/config/constant";
export default function Login() {
  const router = useRouter();
  // useEffect(() => {
  //     // Check if the token exists in localStorage
  //     const storedToken = localStorage.getItem("jwt_token_key");

  //     if (storedToken) {
  //         // Token exists, redirect to another page (e.g., home page)
  //         router.push('/home');
  //     }
  // }, []);
  const [email, setEmail] = useState("nhatvuong99@gmail.com");
  const [password, setPassword] = useState("nhatvuong99");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSignIn();
  };
  const handleSignIn = async () => {
    const url = `${constants.url_api}/login`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        localStorage.setItem("user_data", JSON.stringify(data));
        store.dispatch({ type: "SET_USER_ID", payload: data.userId });
        router.push("/home");
      });
    router.push("/home");
  };
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSignIn();
    }
  };
  return (
    <div x-show="!isLoginPage" className="space-y-4">
      <header className="mb-3 text-2xl font-bold">Log in</header>
      <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
        <input
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-3 w-full text-gray-700 border-none bg-transparent outline-none focus:outline-none"
        />
      </div>
      <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={handleKeyDown}
          className="my-3 w-full text-gray-700 border-none bg-transparent outline-none"
        />
        <a href="#" className="font-medium  text-gray-400 hover:text-gray-500">
          FORGOT?
        </a>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
      >
        LOG IN
      </button>
    </div>
  );
}
