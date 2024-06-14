import React from 'react';

interface LogoProps {
  style: string;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <div className={`${style} relative`}>
      <img src="./src/assets/Deloitte.png" alt="Logo" className='h-full w-full object-contain' />
    </div>
  );
}

export default Logo;
