"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "~/components/chat_input";
import MessageBubble from "~/components/messenger_box";
import { ChatSettings } from "./chat_settings";
import Picker, { PickerProps } from 'emoji-picker-react'; // Corrected import

interface OtherUser {
    userId: string;
    fullName: string;
    avatar: string;
}
export default function ChatDetail({ chatdetail, currentId, otherUser, conversationId }:
    { chatdetail: any; currentId: string; otherUser: OtherUser; conversationId: string }
) {

    const [chatContent, setChatContent] = useState([]);
    const chatContainerRef = useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [emoji, setEmojis] = useState('');
    useEffect(() => {
        // Cuộn đến cuối khi chatdetail thay đổi
        scrollToBottom();
        
    }, [chatdetail]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            (chatContainerRef.current as HTMLElement).scrollTop = (chatContainerRef.current as HTMLElement).scrollHeight;
        }
    };


    const addEmoji = (e: { unified: string }) => {
        let sym = e.unified.split("-");
        let codesArray: number[] = sym.map(el => parseInt(el, 16));
        let emoji = String.fromCodePoint(...codesArray);
        console.log(emoji);
        setEmojis(emoji)
        
        // Cập nhật giá trị của state message tại đây nếu cần thiết
    };
    return (
        <div className="h-full basis-3/4 flex ">
            <div className="h-100 basis-2/3 border flex flex-col overflow-auto">
                <header className="flex items-center border-b h-16 ">
                    <h1 className="font-bold text-xl m-5 text-gray-700">{otherUser.fullName}</h1>
                </header>
                <div className="flex-grow overflow-auto flex flex-col-reverse">
                    <div className="border-t">
                        <ChatInput
                            conversationId={conversationId}
                            currentId={currentId}
                            otherUserId={otherUser.userId}
                            setShowEmojis={setShowEmojis}
                            sendEmojiToChatInput= {emoji}
                        />
                    </div>
                    {
                        showEmojis && (
                            <div
                                style={{ top: '214px', right: '470px' }}
                                className="z-10 absolute ">
                                <Picker onEmojiClick={addEmoji} />
                            </div>
                        )
                    }
                    <div className="mx-4 my-1 items-center overflow-auto flex-grow" ref={chatContainerRef}>
                        {chatdetail.map((item: any, index: number) => {
                            return (
                                <MessageBubble
                                    key={index}
                                    message={item.content}
                                    isSender={currentId === item.user_id._id}
                                    avatar={item.user_id.avatar}
                                />

                            )
                        })}
                    </div>
                </div>
            </div>
            <ChatSettings title={otherUser.fullName} avatar={otherUser.avatar} />
        </div>
    );
}
