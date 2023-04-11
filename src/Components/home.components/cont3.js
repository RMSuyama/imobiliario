import React from 'react';
import plataforma3 from '../../Assets/Vid/plataforma3.webm';

const cont3 = () => {
    return (
  
    <container style={{display: "flex", flexDirection: "column", margin: '1vw',}}>

    <h1>100 mil programadores formados
      através do nosso método exclusivo
    </h1> 


    <video src={plataforma3} controls style={{width: '50%'}} />


        <button style={{backgroundColor:'rgb(255,255,255)'}}>firula MÉTODO APRENDA A PROGRAMAR DE VERDADE</button>
  


    </container>
    );
  };
  
  export default cont3;