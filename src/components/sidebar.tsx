import * as React from "react";
import NewChatButton from "./newChatButton";
import ChatList from "./chatList";

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-[#18181B] flex flex-col h-screen text-base p-4 z-10 shadow-sm w-1/4 ">
      <NewChatButton />
      <div>
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
      <div>

      </div>
    </nav>
  );
};

export default Sidebar;