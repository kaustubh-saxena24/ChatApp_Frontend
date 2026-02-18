import React, { useState, useEffect, useRef } from 'react';

const ChatWindow = ({ username, messages, onSend }) => {
    const [text, setText] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="status-dot"></div>
                <h2>Live Chat</h2>
            </div>

            <div className="message-list">
                {messages.map((msg, index) => {
                    const isMe = msg.sender === username;
                    return (
                        <div key={index} className={`message-row ${isMe ? 'me' : 'them'}`}>
                            {!isMe && <span className="sender-name">{msg.sender}</span>}
                            <div className="message-bubble">
                                {msg.content}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            <form className="input-area" onSubmit={handleSend}>
                <input
                    className="chat-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit" className="send-btn">
                    ➤
                </button>
            </form>
        </div>
    );
};
export default ChatWindow;