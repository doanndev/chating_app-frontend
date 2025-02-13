"use client";

import {
  faBars,
  faBell,
  faGear,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "~/components/search_bar";
import Dropdown from "./drowndown_menu";
import Sidebar from "./sidebar";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="w-full h-20  border items-center bg-gray-100 py-2 px-6 flex justify-between">
        <FontAwesomeIcon
          icon={isSidebarOpen ? faXmark : faBars}
          className="size-10 cursor-pointer p-3 rounded-full"
          onClick={toggleSidebar}
        />
        {/* <SearchBar /> */}
        <div className="relative w-1/2 flex justify-end items-center">
          <div className="mx-20 flex items-center">
            <Dropdown />
            <FontAwesomeIcon
              icon={faGear}
              className="mx-2 size-6 text-blue-400 hover:text-blue-500 cursor-pointer active:text-blue-600"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="mx-2 size-6 text-blue-400 hover:text-blue-500 cursor-pointer active:text-blue-600"
            />
          </div>
          <button
            onClick={handleOpenModal}
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img src="/images/user.png" />
          </button>
          {showModal && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 top-14">
              <a
                href="#"
                className="block px-4 py-2 account-link hover:bg-gray-300 hover:font-bold"
              >
                Account
              </a>
              <a
                href="#"
                className="block px-4 py-2 account-link hover:bg-gray-300 hover:font-bold"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 account-link hover:bg-gray-300 hover:font-bold"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
}
