import React from 'react';
import Logo from './logo';
import { Avatar } from "@nextui-org/avatar";

const Header: React.FC = () => {
    return(
        <header className='relative flex flex-wrap items-center h-auto bg-zinc-900 w-full p-2'>
            <div className='flex space-x-4 items-center h-16 text-2xl ml-2'>
                <Logo style='h-1/2'/>
                <h1 className='font-bold'>|</h1>
                <h1 className='font-bold'>CATi</h1>
            </div>
            <div className='ml-auto flex items-center mr-2'>
                <Avatar src="./src/assets/profile.jpg" name='Nicolas Chavez' size='md'/>
            </div>
        </header>
    )
}

export default Header;
