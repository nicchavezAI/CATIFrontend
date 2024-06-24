import React from 'react';

interface SidebarItemProps {
    Icon: React.ElementType;
    label: string;
}

const SidebarOption: React.FC<SidebarItemProps> = ({ Icon, label }) => {
    return (
        <div className="flex items-center justify-start space-x-2 pl-1 text-sm">
            <Icon className="h-4 w-4" />
            <a href="" className='hover:underline hover:underline-offset-1'>{label}</a>
        </div>
    );
};


export default SidebarOption;
