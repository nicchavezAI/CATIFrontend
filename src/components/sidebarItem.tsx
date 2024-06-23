import React from 'react';

interface SidebarItemProps {
    Icon: React.ElementType;
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, label }) => {
    return (
        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <Icon className="h-6 w-6" />
            <span className="text-lg">{label}</span>
        </div>
    );
};

export default SidebarItem;
