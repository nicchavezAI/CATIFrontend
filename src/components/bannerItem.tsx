import React from "react";

const BannerItem: React.FC<{text: string}> = ({ text }) => {
    return(
        <div className="bg-[#17C964] p-2 w-60 h-auto rounded-md">
            <h3>{ text }</h3>
        </div>
    )
}

export default BannerItem;
