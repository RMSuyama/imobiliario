import plataforma3 from '../../Assets/Img/30946529_1780230358952480_310735433552101376_n.jpg';
import React from 'react';
import Button from '../common/buttons/button3';



const cont3 = () => {
    return (
  
    <container id='teste' style={{display: "flex", flexDirection: "column",backgroundColor:'rgb(37,58,68)', margin: '1vw', alignItems: 'center', paddingTop:'4vw', paddingBottom:'4vw'}}>

    <h1 style={{fontSize:'55px', paddingBottom:'4vw', color:'white'}}>Tem cara de mau!</h1> 


    <img src={plataforma3} controls style={{width: '30%'}} />


      <Button >Preciso disso pra dar um 'up' no meu show!</Button>

    </container>
    );
  };
  
  export default cont3;