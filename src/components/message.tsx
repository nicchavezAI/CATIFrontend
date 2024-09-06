import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {Link} from "@nextui-org/link";
import * as marked from 'marked';

interface MessageProps {
    message: string;
    image: string;
    person: string;
    sources: string[];
}

const Message: React.FC<MessageProps> = ({ message, image, person, sources }) => {
    const markup = { __html: marked.parse(message)};
    
    return (
        <div className=" flex flex-row space-x-2 items-start">
            <Avatar src={image} name={person} className="mt-2" size='md'/>
            <div className="max-w-3xl break-words p-3 my-2 bg-gray-800 text-white rounded-lg relative self-start overflow-hidden" style={{ whiteSpace: 'pre-line' }}>
                <div dangerouslySetInnerHTML={{ __html: message.toString() }} />
                {person === 'unavailable for now :(' ? //No esta disponible por ahora :(
                <div className="flex mt-2">
                    <p className="font-bold mr-1">Si tienes dudas consulta:</p> 
                    {sources?.map((kb) => (
                        <p>
                            
                            <Link href={`https://deloitteame.service-now.com/kb_view.do?sysparm_article=${kb}`} target="_blank">{kb}</Link>/ 
                        </p>
                    ))}
                </div> : null}
                
            </div>
        </div>
    );
}

export default Message;
