import React, { useState } from 'react';

const Join = ({ onJoin }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) onJoin(name);
    };

    return (
        <div className="join-screen">
            <div className="join-icon">💬</div>
            <h1 className="join-title">Welcome to Chat</h1>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
                <input
                    className="join-input"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="btn-primary">
                    Start Chatting
                </button>
            </form>
        </div>
    );
};
export default Join;