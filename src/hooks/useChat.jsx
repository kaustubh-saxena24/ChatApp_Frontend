import { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const SERVER_URL = 'https://chatappbackend-production-2844.up.railway.app/chat';

export const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const stompClientRef = useRef(null);

    const connect = (username) => {
        const socket = new SockJS(SERVER_URL);
        const client = Stomp.over(socket);
        
        
  

        client.connect({}, () => {
            setIsConnected(true);
            stompClientRef.current = client;

            // Subscribe to the public topic
            client.subscribe('/topic/messages', (payload) => {
                const newMessage = JSON.parse(payload.body);
                setMessages((prev) => [...prev, newMessage]);
            });
        }, (error) => {
            console.error("Connection lost:", error);
            setIsConnected(false);
        });
    };

    const sendMessage = (username, content) => {
        if (stompClientRef.current && isConnected) {
            const chatMessage = { sender: username, content };
            stompClientRef.current.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
        }
    };

    return { messages, isConnected, connect, sendMessage };
};