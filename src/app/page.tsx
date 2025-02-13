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
    <div className="bg-white size-full border flex flex-col">
      <nav className="basis-1/12 flex items-center">
        <div className="justify-start ml-10 ">
          <Image src={"/images/logo.png"} alt="logo" width={48} height={48} />
        </div>
        <div className="ml-auto mr-10">
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                href="#"
                className="font-bold hover:underline hover:cursor-pointer"
              >
                Features
              </a>
            </li>
            <li>
              <a className="font-bold hover:underline hover:cursor-pointer">
                Desktop app
              </a>
            </li>
            <li>
              <a className="font-bold hover:underline hover:cursor-pointer ">
                Privacy and safety
              </a>
            </li>
            <li>
              <a className="font-bold hover:underline hover:cursor-pointer">
                For developers
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="basis-11/12 flex flex-row">
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <h1 className="my-20 text-2xl font-bold text-blue-500">
            Let's Start !
          </h1>
          <div
            onClick={handleClick}
            className="rounded-full w-60 h-20 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer active:bg-blue-700 flex items-center justify-center"
          >
            <h1 className="text-2xl font-bold text-white">Sign In</h1>
          </div>
        </div>
        <div className="basis-1/2  flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src={"/images/landing_img.png"}
            alt="landing img"
          />
        </div>
      </div>
    </div>
  );
}
