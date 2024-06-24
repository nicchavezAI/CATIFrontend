import React from "react";

const Input: React.FC = () => {
    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 p-2 w-3/4 rounded border border-gray-800 border-solid shadow-sm bg-neutral-800">
          <input type="text" placeholder="¿En que te puedo ayudar hoy?" className="bg-transparent border-none flex-grow focus:outline-none focus:ring-0"/>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/171453bc6550c1de454938735e7ab9db3de81ab0c450b2a24bf86047b3822f50?"
            className="w-4 aspect-square fill-zinc-400"
          />
        </div>
      );
}

export default Input;
