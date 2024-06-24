import React from "react";

interface ChatItemProps {
    message: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ message }) => {
    return(
        <li className="rounded-lg hover:bg-[#2F2F2F]">
            <a href="" className="flex items-center gap-2 p-2">
                <div className="truncate text-nowrap">{ message }</div>
            </a>
        </li>

    )
}

export default ChatItem;