import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";

export default function StickyNavbar(content: any) {
  return (
    <nav className="bg-white p-4 fixed w-full h-14 shadow-md flex flex-row items-center ">
      <div className="flex flex-row items-center start-2.5	">
        <div className="size-10 mx-3">
          <Image
            width="50"
            height="50"
            className="w-full h-full rounded-full hover:bg-gray-800 border-2"
            src="/images/user.png"
            alt="User Image"
          />
        </div>
        <h1 className="font-bold text-2xl">{content.title}</h1>
      </div>
      <div className="basis-7/12"></div>
      <div className="flex flex-row items-center">
        <button className="size-8 hover:bg-gray-200 rounded-full mx-2">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-blue-500 hover:text-blue-600"
          />
        </button>
        <button className="size-8 hover:bg-gray-200 rounded-full mx-2">
          <FontAwesomeIcon
            icon={faVideo}
            className="text-blue-500 hover:text-blue-600 "
          />
        </button>
      </div>
    </nav>
  );
}
