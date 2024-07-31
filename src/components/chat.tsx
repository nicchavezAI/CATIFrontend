import { useEffect, useRef } from "react";
import { useCurrentChat } from "../context/currentChatContext";
import { MessageType, SenderEnum } from "../types";
import Message from "./message";

function Chat() {
  const { addMessage, chat } = useCurrentChat();
  const idRef = useRef(0); // Para manejar el id persistente
  const lastProcessedMessageRef = useRef<string | null>(null); // Para rastrear el contenido del último mensaje procesado

  useEffect(() => {
    // Verificar que haya mensajes y que el último mensaje sea del usuario
    if (chat && chat.messages.length > 0) {
      const lastMessage = chat.messages[chat.messages.length - 1];

      // Evitar duplicados: verificar si ya se procesó el último mensaje
      if (
        lastMessage.sender === SenderEnum.User &&
        lastProcessedMessageRef.current !== lastMessage.content
      ) {
        const sendMessage = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/chatbot/answer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message: lastMessage.content }),
            });

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const newMessage: MessageType = {
              id: String(idRef.current++), // Incrementar el id
              sender: SenderEnum.Cati,
              content: data.answer,
              timestamp: new Date(),
            };

            addMessage(newMessage);
            // Actualizar el contenido del último mensaje procesado
            lastProcessedMessageRef.current = lastMessage.content;
          } catch (error) {
            console.error('Error:', error);
          }
        };

        sendMessage();
      }
    }
  }, [chat, addMessage]); // Asegúrate de incluir chat en las dependencias



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