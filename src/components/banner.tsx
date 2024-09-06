import React from "react";
import BannerItem from "./bannerItem";
import BannerTittle from "./bannerTitle";

const Banner: React.FC = () => {
    return (
        <div className="inset-x-0  flex flex-col h-[calc(100vh-8rem)] items-center justify-center">
            <div className="flex text-4xl font-bold mb-4">
            <h1>CAT</h1><h1 className="text-[#43B02A]">i</h1><h1>ntelligence</h1>
            </div>
            <div className="grid grid-rows-1 grid-cols-3 w-3/4 mt-1 mb-2">
                <BannerTittle title="Como?" icon="./src/assets/sun.png" />
                <BannerTittle title="Funcionalidades" icon="./src/assets/lightning.png" />
                <BannerTittle title="Limitaciones" icon="./src/assets/caution.png" />
            </div>
            <div className="grid grid-rows-4 grid-cols-3 gap-2.5">
                <BannerItem text='"¿Como cambio mi contraseña?"' />
                <BannerItem text="Resuelve tus Incidentes en solo unos minutos." />
                <BannerItem text="Debe especificar el problema." />

                <BannerItem text='"¿Como puedo reconfigurar mi metodo MFA?"' />
                <BannerItem text='La solucion esta a solo un "prompt" de distancia.' />
                <BannerItem text="Conocmiento limitado solo a errores conocidos." />

                <BannerItem text='"¿Como me conecto a la VPN de la firma?"'/>
                <BannerItem text="Entrenado para resolver inconvenientes tecnicos" />
                <BannerItem text="Algunos incidentes no pueden ser resueltos aqui." />
            </div>
            {/*<h1 className="text-4xl font-bold mb-4">CATi esta en Mantenimiento🚧</h1>*/}
        </div>
    );
}

export default Banner;
