import React from "react";
import BannerItem from "./bannerItem";

const Banner: React.FC = () => {
    return (
        <div className="inset-x-0  flex flex-col h-[calc(100vh-8rem)] items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">CATintelligence🤖</h1>
            <div className="grid grid-rows-3 grid-cols-3 gap-2.5">
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como configuro el Authenticator?" />
                <BannerItem text="¿Como genero un snapshot?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como configuro el Authenticator?" />
                <BannerItem text="¿Como genero un snapshot?" />
                <BannerItem text="¿Como cambio mi contraseña?" />
                <BannerItem text="¿Como configuro el Authenticator?" />
                <BannerItem text="¿Como genero un snapshot?" />
            </div>
            {/*<h1 className="text-4xl font-bold mb-4">CATi esta en Mantenimiento🚧</h1>*/}
        </div>
    );
}

export default Banner;
