"use client"
"@ts-nocheck"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth");
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen flex flex-col text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="ml-10">
          {/* <Image src="/images/logo.png" alt="logo" width={48} height={48} /> */}
          <h1 className="text-xl font-bold text-white">Chat App</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:underline">Features</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Desktop App</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Privacy & Safety</a>
          </li>
          <li>
            <a href="#" className="hover:underline">For Developers</a>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-center px-10">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4">Connect Instantly, Chat Effortlessly</h1>
          <p className="text-lg text-gray-200 mb-6">Experience seamless communication with our modern chat platform. Join now and stay connected with friends and colleagues.</p>
          <button
            onClick={handleClick}
            className="mt-4 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <Image
            width={500}
            height={500}
            src="/images/landing_img.png"
            alt="Chatting Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}