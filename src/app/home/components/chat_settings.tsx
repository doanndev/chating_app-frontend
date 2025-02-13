import { faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Button from "~/components/constant_button";

export function ChatSettings(props: any) {
    
    return (
        <div className="flex-grow  flex flex-col items-center">
            {props.title && (
                <div className="w-full h-72  flex flex-col items-center justify-center">
                    <div className="size-28 rounded-full mb-4">
                        <img
                            src={props.avatar}
                            alt="Avatar"
                            className="size-28 rounded-full"
                        />
                    </div>
                    <h1 className="font-bold text-gray-600 text-2xl my-2">{props.title}</h1>
                    <div className="flex flex-row px-3">
                        <Button content="Call" />
                        <Button content="Call Video" />
                    </div>
                </div>
            )}
            <div className="flex-grow w-full">
                {props.title && (
                    <ul className=" w-full my-10">
                        <li className="w-full h-16 flex border-b items-center">
                            <h1 className="font-medium text-gray-500 text-xl p-2 ">
                                Search in Converstation
                            </h1>
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="text-gray-500 absolute right-2 size-5 hover:text-gray-600 active:text-gray-700 cursor-pointer"
                            />
                        </li>
                        <li className="w-full h-16 flex border-b items-center">
                            <h1 className="font-medium text-gray-500 text-xl p-2 ">
                                Change Color
                            </h1>
                            <div className="flex flex-row absolute right-2">
                                <div className="mx-1 size-5 border bg-white rounded-full" />
                                <div className="mx-1 size-5 border bg-blue-500 rounded-full" />
                                <div className="mx-1 size-5 border bg-orange-500 rounded-full" />
                                <div className="mx-1 size-5 border bg-black rounded-full" />
                            </div>
                        </li>
                        <li className="w-full h-16 flex border-b items-center">
                            <h1 className="font-medium text-gray-500 text-xl p-2">
                                Change Emoji
                            </h1>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                className="text-gray-500 absolute right-2 size-5 hover:text-gray-600 active:text-gray-700 cursor-pointer"
                            />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
