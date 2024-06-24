import React from "react";
import BannerItem from "./bannerItem";

const Banner: React.FC = () => {
    return (
        <div className="absolute inset-x-0 top-1/4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">CATintelligence</h1>
            <div className="grid grid-rows-3 grid-cols-3 gap-2.5">
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
            </div>
        </div>
    );
}

export default Banner;
