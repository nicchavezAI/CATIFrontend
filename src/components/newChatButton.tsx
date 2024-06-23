import React from "react";

const NewChatButton: React.FC = () => {
    return(
        <>
        <button className="flex space-x-2 justify-start items-center pl-2 py-2 w-auto amx-2 h-auto my-2 border rounded-md border-[#444654]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
          <p>New chat</p>
        </button>
        </>
    )
}

export default NewChatButton;