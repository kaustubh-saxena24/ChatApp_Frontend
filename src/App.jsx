import React, { useState } from 'react';
import { useChat } from './hooks/useChat';
import Join from './components/Join';
import ChatWindow from './components/ChatWindow';

const App = () => {
    const [username, setUsername] = useState('');
    
    
    const { messages, isConnected, connect, sendMessage } = useChat();

    const handleJoin = (name) => {
        setUsername(name);
        connect(name);
    };

    const handleSend = (content) => {
        sendMessage(username, content);
    };

    return (
        // The app-container wrapper must be here so the CSS applies to the whole app!
        <div className="app-container">
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