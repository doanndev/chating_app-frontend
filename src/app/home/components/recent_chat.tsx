"use client";

import { useEffect, useState } from "react";
import ChatBox from "./chat-box";
import ChatDetail from "./chat-detail";
import { Provider, useSelector } from "react-redux";
import store from "../../../redux/store";
import { sendMessage } from "~/redux/actions";
import { UseSelector } from "react-redux";
import pusher from "../../../pusher"
import Pusher from "pusher-js";
import { RootState } from "~/redux/types";
import constants from "~/config/constant";
export default function RecentChat() {
    const [userId, setUserId] = useState(null)
    const userIdAuth = useSelector((state: RootState) => state.userIdAuth);
    const [conversations, setConversations] = useState([])
    const [conversationId, setConversationId] = useState('')
    const [haveNewMessenger, setHaveNewMessenger] = useState(false)
    const [recentChat, setRecentChat] = useState([]);
    const [otherUser, setOtherUser] = useState<OtherUser>({ userId: '', fullName: '', avatar: '' });
    const messageSentStatus = useSelector((state: { messageSent: boolean }) => state.messageSent);
    useEffect(() => {
        if (messageSentStatus) {
            fetchConversation();
            console.log('Message sent. Reload the page or perform other actions.');
        }
    }, [messageSentStatus]);
    interface ChatDetailProps {
        conversationId: string;
    }
    useEffect(() => {
        fetchConversation();
    }, [userId, haveNewMessenger]);
    useEffect(() => {
        console.log(userIdAuth);
        
    }, [ userIdAuth]);
    useEffect(() => {
        Pusher.logToConsole = true;

        const channel = pusher.subscribe(`conversation-${conversationId}`);

        // Bắt sự kiện khi có tin nhắn mới từ Pusher
        channel.bind('new-messenger', function (data: any) {
            console.log('New messenger from Pusher:', data.user_id);

            // Kiểm tra xem tin nhắn có phải của bạn không
            setHaveNewMessenger(data.user_id === userId);
            // setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            // Huỷ đăng ký kênh khi component unmount
            pusher.unsubscribe(`conversation-${conversationId}`);
        };
    }, [conversationId]);
    // useEffect(() => {fetchConversation()}, [haveNewMessenger])
    const fetchConversation = async () => {
        try {
            // Check if the token exists in localStorage
            const storedUserData = localStorage.getItem("user_data");
            if (storedUserData) {
                const user = JSON.parse(storedUserData);
                setUserId(user.userId);
                const url = `${constants.url_api}/conversations/user/${user.userId}`

                const response = await fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setConversations(data.conversations)
                const conver = data.conversations[0];
                fetchMessage(conver._id);
            }
        } catch (error) {
            console.error("Error fetching data:", (error as Error).message);
        }
    };
    const fetchMessage = async (conversationId: any) => {
        try {
            const url = `${constants.url_api}/conversations/${conversationId}`
            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setRecentChat(data.data.messages);

        } catch (error) {
            console.error("Error fetching data:", (error as Error).message);
        }
    };
    const handleOpenChat = (conversationId: any, otherUser: Object) => {
        fetchMessage(conversationId)
        setConversationId(conversationId)
        setOtherUser(otherUser as OtherUser)
    };
    const handleDefaultConversation = (otherUser: Object, conversationId: string) => {
        setOtherUser(otherUser as OtherUser)
        setConversationId(conversationId as string)

    }

    return (
        <div className=" flex-grow w-full flex flex-row overflow-auto">
            <ChatBox
                chats={conversations}
                currentId={userId}
                handleClickBox={handleOpenChat}
                handleDefaultConversation={handleDefaultConversation} />
            <ChatDetail
                chatdetail={recentChat}
                currentId={userId!}
                otherUser={otherUser}
                conversationId={conversationId}
            />
        </div>
    );
}
interface OtherUser {
    userId: string;
    fullName: string;
    avatar: string;
}

function dispatch(arg0: { type: string; }) {
    throw new Error("Function not implemented.");
}