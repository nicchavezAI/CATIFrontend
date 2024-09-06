import React from "react";
import { Image } from "@nextui-org/react";

interface BannerTitleInterface {
    title: string;
    icon: string;
}

const BannerTittle: React.FC<BannerTitleInterface> = ({title, icon}) => {
    return(
        <div className="flex flex-col items-center">
            <Image src={icon} height={25} width={25}/>
            <h2>{title}</h2>
        </div>
    )
}

export default BannerTittle