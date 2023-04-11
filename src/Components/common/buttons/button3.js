import React from 'react';

const Button3 = ({children}) => {

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


return (
    <button
      style={{ backgroundColor: isHovered ? 'rgb(189,202,205)' : 'white', color: isHovered ? 'rgb(37,58,68)' : 'rgb(37,58,68)', marginTop:'40px' , width:'18vw', height:'fit-content', marginRight:'20px', fontSize:'18px', padding: '15px', borderRadius:'6px', display: 'inline-block', fontweight: '600',  }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};


export default Button3;
