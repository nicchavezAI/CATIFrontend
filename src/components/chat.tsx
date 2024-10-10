import { useEffect, useRef, useState } from "react";
import { useCurrentChat } from "../context/currentChatContext";
import { MessageType, SenderEnum } from "../types";
import Message from "./message";

function Chat() {
  const { addMessage, chat } = useCurrentChat();
  const idRef = useRef(0); // Para manejar el id persistente
  const lastProcessedMessageRef = useRef<string | null>(null); // Para rastrear el contenido del último mensaje 
  const typingMessageRef = useRef(null); // Referencia al mensaje de "typing"
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false); // Estado para manejar el indicador de "typing"
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
            setIsTyping(true); // Mostrar el indicador de "typing"
            console.log(isTyping)
            const response = await fetch(' http://127.0.0.1:8000/chatbot/answer', {
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
            console.log(data)
            const newMessage: MessageType = {
              id: String(idRef.current++), // Incrementar el id
              sender: SenderEnum.Cati,
              content: data.answer,
              timestamp: new Date(),
              sources: data.kbs,
            };

            addMessage(newMessage);
            // Actualizar el contenido del último mensaje procesado
            lastProcessedMessageRef.current = lastMessage.content;
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsTyping(false); // Ocultar el indicador de "typing"
          }
        };

        sendMessage();
      }
    }
  }, [chat, addMessage]); // Asegúrate de incluir chat en las dependencias

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat?.messages]);

  useEffect(() => {
    if (isTyping && typingMessageRef.current) {
      typingMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isTyping]);



  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] overflow-y-auto mx-4">
      {chat?.messages.map((message, index) => (
        <div key={index} className={message.sender === SenderEnum.User ? "self-end mr-2" : "self-start ml-2"}>
          <Message
            message={message.content}
            image={message.sender === SenderEnum.User ? './src/assets/profile.jpg' : ''}
            person={message.sender === SenderEnum.User ? 'Nicolas Chavez' : 'CATi'}
            sources={message.sources}
          />
        </div>
      ))}
      {isTyping && 
      <div  className={"self-start ml-2"} ref={typingMessageRef} >
          <Message
            message={"Typing..."}
            image={''}
            person={'CATi'}
            sources={[]}
          />
        </div>} 
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Chat;