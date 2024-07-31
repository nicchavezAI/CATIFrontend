import { useEffect, useState } from "react";
import { useCurrentChat } from "../context/currentChatContext";
import { MessageType, SenderEnum } from "../types";
import Message from "./message";

function Chat() {
  const { addMessage, chat } = useCurrentChat();
  const [pendingMessage, setPendingMessage] = useState<MessageType | null>(null); // Permitir null

  let id = 0;

  useEffect(() => {
    console.log("Executed");

    if (pendingMessage) {
      const sendMessage = async () => {
        try {
          const response = await fetch('https://cfwg79k4-8000.brs.devtunnels.ms/chatbot/answer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: pendingMessage.content }), // Usar pendingMessage
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          const newMessage: MessageType = {
            id: String(id++), // Puedes cambiar esto para que sea único
            sender: SenderEnum.Cati,
            content: data.answer,
            timestamp: new Date(Date.now()),
          };

          addMessage(newMessage);
          setPendingMessage(null); // Restablecer el mensaje pendiente después de enviar
        } catch (error) {
          console.error('Error:', error);
        }
      };

      sendMessage();
    }
    
  }, [pendingMessage, addMessage]); // Asegúrate de incluir pendingMessage en las dependencias



  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] overflow-y-auto">
      {chat?.messages.map((message, index) => (
        <div key={index} className={message.sender === SenderEnum.User ? "self-end mr-2" : "self-start ml-2"}>
          <Message
            message={message.content}
            image={message.sender === SenderEnum.User ? './src/assets/profile.jpg' : ''}
            person={message.sender === SenderEnum.User ? 'Nicolas Chavez' : 'CATi'}
          />
        </div>
      ))}
    </div>
  );
}

export default Chat;