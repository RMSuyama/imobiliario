
import metodologia from '../../Assets/Img/metodologia.webp';
import React from 'react';
import Button from '../common/buttons/button2';


const cont2 = () => {
    return (
  
        <container style={{display: "flex", flexDirection: "column", margin: '1vw',}}>

    <h1>100 mil programadores formados
      através do nosso método exclusivo
    </h1> 

    <img src={metodologia} alt="Dashboard" style={{width: '50%'}} />



    <Button>firula MÉTODO APRENDA A PROGRAMAR DE VERDADE</Button>
  


    </container>

      

    );
  };
  
  export default cont2;