
import metodologia from '../../Assets/Img/10860111_883390038346866_1115125647_n.jpg';
import React from 'react';
import Button from '../common/buttons/button2';


const cont2 = () => {
    return (
  
        <container style={{display: "flex", flexDirection: "column", margin: '2vw', alignItems:'center', }}>

    <h1 style={{ fontSize:'45px', padding: '3vw 3vw 0 3vw'}}>Apaixonado desde criança por música.</h1>
    <h2 style={{ fontSize:'20px', paddingLeft: '3vw', padding:'0 3vw 3vw 3vw'}}>
    Verdadeiro amante do mais puro suco da boa e velha música, ou musiquee em francês, ou music em inglês, chanson em italiano...
    </h2> 

    <img src={metodologia} alt="Dashboard" style={{width: '35%', }} />



    <Button>Freelancer de qualidade</Button>
  


    </container>

      

    );
  };
  
  export default cont2;