import React from "react";
import { Avatar } from "@nextui-org/avatar";
import * as marked from 'marked';

interface MessageProps {
    message: string;
    image: string;
    person: string;
}

const Message: React.FC<MessageProps> = ({ message, image, person }) => {
    const markup = { __html: marked.parse(message) };
    return (
        <div className=" flex flex-row space-x-2 items-start">
            <Avatar src={image} name={person} className="mt-2" size='md'/>
            <div className="w-3/4 p-3 my-2 bg-gray-800 text-white rounded-lg relative self-start" dangerouslySetInnerHTML={markup} />
        </div>
    );
}

export default Message;
