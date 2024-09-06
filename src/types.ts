// types.ts

export enum SenderEnum {
    User = 'user',
    Cati = 'cati'
  }

// Define el tipo para un mensaje en el chat
export interface MessageType {
    id: string;             // Identificador único del mensaje
    sender: SenderEnum;         // Nombre del remitente del mensaje
    content: string;        // Contenido del mensaje
    timestamp: Date;
    sources: string[];        // Fecha y hora en que se envió el mensaje
  }
  
// Define el tipo para un chat, que incluye una lista de mensajes y otros detalles
export interface ChatType {
    id: string;             // Identificador único del chat
    userId: string;// Lista de participantes en el chat
    messages: MessageType[];    // Lista de mensajes en el chat
    lastMessageAt: Date;    // Fecha y hora del último mensaje enviado      // Indica si el chat es de grupo o individual
}
  