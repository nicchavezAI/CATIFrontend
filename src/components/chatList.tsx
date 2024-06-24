import React from "react";
import ChatItem from "./chatItem";


const ChatList: React.FC<{ date: string }> = ({ date }) => {
    return (
        <div>
            <h2 className="p-2 text-sm text-[#8D8D8D]">{ date }</h2>
            <ul className="text-sm">
                <ChatItem message="Como cambio mi contraseña? Se esta por vencer" />
                <ChatItem message="Como modifico mi metodo de autenticacion MFA?" />
                <ChatItem message="Mi nombre esta mal escrito, como puedo cambiarlo?" />
            </ul>
        </div>
    );
}

export default ChatList;
