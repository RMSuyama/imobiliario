import React from 'react';
import dashboardImg from '../../Assets/Img/306518788_476556120795119_4652107024227384434_n.jpg';


const Teste = () => {
  return (
    <nav>

        <navbar class="navbar"> 
        
        <section id="sect1" style={{display:'flex', flexDirection:'row', paddingTop:'1vw',paddingLeft:'2vw'}}>
        <img class="imagem" src={dashboardImg} alt="Dashboard" style={{width: '10%', borderRadius:'3vw'}}/>



            <p1 style={{paddingLeft:"1vw", paddingTop:'2vw'}}><b>GIAN</b> Bolfacaroline</p1>

            <p style={{paddingLeft:"2vw", paddingTop:'2vw'}}>Sobre</p>
            <p style={{paddingLeft:"2vw", paddingTop:'2vw'}}>Contato para freelas</p>
          
          </section>

         

        </navbar>
    </nav>
  );
};

export default Teste;