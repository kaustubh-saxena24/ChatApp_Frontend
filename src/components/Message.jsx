import React from 'react';

const Message = ({ msg, isMyMessage }) => {
    return (
        <div className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'} mb-2`}>
            <div 
                className={`max-w-[70%] rounded-lg p-3 ${
                    isMyMessage 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 border rounded-bl-none'
                }`}
            >
                <div className="text-xs opacity-75 mb-1">{msg.sender}</div>
                <div>{msg.content}</div>
            </div>
        </div>
    );
};

export default Message;