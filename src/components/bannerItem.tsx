import React from "react";

const BannerItem: React.FC<{text: string}> = ({ text }) => {
    return(
        <div className="bg-[#43B02A] flex p-2 w-60 h-12 overflow-hidden justify-center items-center rounded-sm">
            <h3 className="text-sm">{ text }</h3>
        </div>
    )
}

export default BannerItem;
