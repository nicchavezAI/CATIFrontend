import React, { ReactNode, createContext, useState, useContext } from 'react';
import { MessageType, ChatType } from '../types';

// Define el tipo del contexto
interface CurrentChatContextType {
    chat: ChatType | undefined;
    setChat: React.Dispatch<React.SetStateAction<ChatType | undefined>>;
    addMessage: (message: MessageType) => void;
}

// Crea el contexto con un valor inicial
export const CurrentChatContext = createContext<CurrentChatContextType | undefined>(undefined);

interface CurrentChatContextProviderProps {
    children: ReactNode;
}

export const CurrentChatContextProvider: React.FC<CurrentChatContextProviderProps> = ({ children }) => {
    const [chat, setChat] = useState<ChatType | undefined>(undefined);

    function addMessage(message: MessageType) {
        if (chat === undefined) {
            const newChat: ChatType = {
                id: '1',
                userId: '1',
                messages: [message],
                lastMessageAt: new Date(),
            };
            setChat(newChat);
        } else {
            // Evita la mutación directa del estado
            setChat({
                ...chat,
                messages: [...chat.messages, message],
            });
        }
    }

    return (
        <CurrentChatContext.Provider value={{ chat, setChat, addMessage }}>
            {children}
        </CurrentChatContext.Provider>
    );
};

// Hook para usar el contexto en otros componentes
export function useCurrentChat() {
    const context = useContext(CurrentChatContext);
    if (context === undefined) {
        throw new Error('useCurrentChat must be used within a CurrentChatContextProvider');
    }
    return context;
}