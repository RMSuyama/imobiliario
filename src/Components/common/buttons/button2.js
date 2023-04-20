import React from 'react';

const Button = ({children}) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


return (
    <button
      style={{ backgroundColor: isHovered ? 'white' : 'rgb(37,58,68)', color: isHovered ? 'rgb(37,58,68)' : 'white', marginTop:'10px' , width:'18vw', height:'fit-content', marginRight:'20px', marginBottom:'2vw', fontSize:'18px', padding: '15px', borderRadius:'6px', }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};


export default Button;

