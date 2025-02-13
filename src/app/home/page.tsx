'use client'
import { useEffect } from "react";
import ChatDetail from "./components/chat-detail";
import RecentChat from "./components/recent_chat";
import { useRouter } from 'next/navigation';
import { Provider } from "react-redux";
import store from '../../redux/store'; // Adjust the path based on your actual project structure

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        // Check if the token exists in localStorage
        const currentUser = localStorage.getItem("user_data");
        if (!currentUser) {
            // Token exists, redirect to another page (e.g., home page)
            router.push('/auth');
        }
    }, []);
    return (

        <Provider store={store}>
            <RecentChat>
            </RecentChat>
        </Provider>
    );
}
