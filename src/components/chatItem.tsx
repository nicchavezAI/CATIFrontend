import React from "react";

interface ChatItemProps {
    message: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ message }) => {
    return(
        <li>
            <p>{ message }</p>
        </li>

    )
}

export default ChatItem;