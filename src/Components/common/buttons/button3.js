import React from 'react';

const Button3 = ({children}) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


return (
    <button
      style={{ backgroundColor: isHovered ? '253a44' : '54666f', color: isHovered ? 'rgb(37,58,68)' : 'white', marginTop:'40px' , width:'fit-content', height:'fit-content', }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};


export default Button3;
