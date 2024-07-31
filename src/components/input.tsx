import { useState } from "react";
import { useCurrentChat } from "../context/currentChatContext";
import { MessageType, SenderEnum } from "../types";


function Input() {

  const [inputValue, setInputValue] = useState("");

  const {addMessage} = useCurrentChat();

  let id = 100

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage: MessageType = {
      id: String(id++),
      sender:SenderEnum.User,
      content: inputValue,
      timestamp: new Date(Date.now())
    }
    addMessage(newMessage);
    setInputValue("")
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <form onSubmit={handleSubmit} className="transform flex items-center space-x-2 p-2 w-3/4 mt rounded border border-gray-800 border-solid shadow-sm bg-neutral-800">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="¿En qué te puedo ayudar hoy?"
          className="bg-transparent border-none flex-grow focus:outline-none focus:ring-0"
        />
        <button type="submit">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/171453bc6550c1de454938735e7ab9db3de81ab0c450b2a24bf86047b3822f50?"
            className="w-4 aspect-square fill-zinc-400"
          />
        </button>
      </form>
    </div>
  );
}

export default Input;
