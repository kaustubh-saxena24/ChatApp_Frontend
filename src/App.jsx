import React, { useState } from 'react';
import { useChat } from './hooks/useChat';
import Join from './components/Join';
import ChatWindow from './components/ChatWindow';

const App = () => {
    const [username, setUsername] = useState('');
    
    // Using our custom hook!
    const { messages, isConnected, connect, sendMessage } = useChat();

    const handleJoin = (name) => {
        setUsername(name);
        connect(name);
    };

    const handleSend = (content) => {
        sendMessage(username, content);
    };

    if (!isConnected) {
        return <Join onJoin={handleJoin} />;
    }

    return (
     <div className="app-container"> {/* 👈 ADD THIS WRAPPER */}
        {!isConnected ? (
            <Join onJoin={handleJoin} />
        ) : (
            <ChatWindow 
                username={username} 
                messages={messages} 
                onSend={handleSend} 
            />
        )}
    </div>
    );
};

export default App;