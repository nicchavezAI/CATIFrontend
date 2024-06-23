import React from "react";
import ChatItem from "./chatItem";

const ChatList: React.FC = () => {
    return (
        <div>
            <h1>Today</h1>
            <ul>
                <ChatItem message="Hello" />
                <ChatItem message="Hi" />
                <ChatItem message="Hey" />
            </ul>
        </div>
    );
}

export default ChatList;
