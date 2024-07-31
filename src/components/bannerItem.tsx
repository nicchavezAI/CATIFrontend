import React from "react";

const BannerItem: React.FC<{text: string}> = ({ text }) => {
    return(
        <div className="bg-[#17C964] p-3 w-60 h-auto justify-center items-center rounded-md">
            <h3 className="text-sm">{ text }</h3>
        </div>
    )
}

export default BannerItem;
