import React from 'react';
import Logo from './logo';

const Navbar: React.FC = () => {
    return(
        <nav className='mx-4 relative flex flex-wrap space-x-8 py-4'>
            <div className='flex space-x-4 items-center'>
                <Logo style='h-20 w-40'/>
                <h1 className='font-bold text-3xl'>|</h1>
                <h1 className='font-bold text-3xl'>CATi</h1>
            </div>
            <div className='absolute flex space-x-2 right-4 top-4'>
                
            </div>
        </nav>
    )
}

export default Navbar;