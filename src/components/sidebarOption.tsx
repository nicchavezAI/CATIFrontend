import React from "react";

interface SidebarOptionProps {
    icon: string;
    title: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({icon, title}) => {
    return (
        <div>
            <img src={icon} alt="icon" />
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarOption;