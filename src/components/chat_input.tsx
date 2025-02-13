import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faImage, faPlusCircle, faSmile, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, messageSent } from '../redux/actions';
import constants from "~/config/constant";
import Picker from 'emoji-picker-react'; // Corrected import

interface ChatInputProps {
    conversationId: string;
    currentId: string;
    otherUserId: string;
    setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>;
    sendEmojiToChatInput: string;
}

const ChatInput = ({
    conversationId,
    currentId,
    otherUserId,
    setShowEmojis,
    sendEmojiToChatInput,
}: ChatInputProps) => {
    useEffect(() => {
        setMessage(message + sendEmojiToChatInput);
    }, [sendEmojiToChatInput]);

    const [message, setMessage] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [inputHeight, setInputHeight] = useState('48px');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const messageSentStatus = useSelector((state: { messageSent: boolean }) => state.messageSent);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setMessage("");
    };

    const handleAttachmentClick = () => {
        fileInputRef.current?.click();
    };

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            // setShowEmojis((prev) => !prev); 
            handlePostMessage();
        }
    };

    const handlePostMessage = async () => {
        // console.log(images);
        // const formData = new FormData();

        // if (images.length>0){

        // }
        const url = `${constants.url_api}/messages`;
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: message,
                conversation_id: conversationId,
                user_id: currentId,
                other_user_id: otherUserId
            }),
        })
            .then((res) => res.json())
            .then(async (data) => {
                await dispatch(messageSent());
                await dispatch(sendMessage(message));
                setMessage("");
            });
    };

    const addLikeToInput = () => {
        setMessage((prevMessage) => prevMessage + "😊");
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            // Filter out null values and convert to an array
            const validFiles = Array.from(selectedFiles).filter(Boolean) as File[];
            setImages((prevImages) => [...prevImages, ...validFiles]);
            if (textInputRef.current) {
                textInputRef.current.focus();
            }
        }
    };
    const removeImage = (index: number) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    return (
        <>
            {images.length > 0 && (
                <div
                    style={{ 'paddingLeft': '110px' }}
                    className="flex space-x-2 m-2">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Selected Image ${index + 1}`}
                                className="h-20 w-20 object-cover rounded-full"
                            />
                            <button
                                className="absolute top-0 right-0 p-1  text-gray-600 w-8 h-8 bg-gray-100 rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-opacity duration-300"
                                onClick={() => removeImage(index)}
                            >
                                <FontAwesomeIcon
                                    icon={faClose}

                                    className="w-4 h-4 text-gray-600 cursor-pointer justify-center"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex items-center justify-between p-3">

                <div className="flex items-center">
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    {/* Display image to the left of the input */}
                    <label
                        htmlFor="fileInput"
                        onClick={handleAttachmentClick}
                        className="text-blue-500 focus:outline-none hover:text-blue-600 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faImage} />
                    </label>
                    <button
                        type="button"
                        className="text-blue-500 focus:outline-none hover:text-blue-600"
                    >
                        <FontAwesomeIcon className="mx-3 size-5" icon={faPlusCircle} />
                    </button>

                    <div className=" relative">

                        <input
                            type="text"
                            value={message}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={textInputRef}

                            placeholder="Aa"
                            className="text-gray-700 bg-slate-100 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-gray mx-12 border h-12" // Adjusted height
                            style={{ width: '150%', height: inputHeight }} // Adjusted height

                        />
                        <button
                            type="button"
                            onClick={() => setShowEmojis((prev) => !prev)}
                            style={{ 'top': '24px', 'right': '-200px' }}
                            className="text-blue-500 focus:outline-none hover:text-blue-600 absolute transform -translate-y-1/2"
                        >
                            <FontAwesomeIcon className="mx-3 size-5" icon={faSmile} />
                        </button>

                    </div>
                </div>
                <button onClick={addLikeToInput} className="text-blue-500 focus:outline-none hover:text-blue-600">
                    <FontAwesomeIcon className="mx-3 size-5" icon={faThumbsUp} />
                </button>
            </div>
        </>
    );
};

export default ChatInput;
