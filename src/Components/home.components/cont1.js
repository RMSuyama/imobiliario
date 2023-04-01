import React from 'react';
import dashboardImg from '../../Assets/Img/dashboard-min.webp';

const Cont1 = () => {
  return (
    <container style={{display: "flex", flexDirection: "row", margin: '1vw',}}>

      <div className="cont1">
        <div id="bloco1">
          <h2>MÉTODO</h2>
          <h1>Aprenda a</h1>
          <h1>Programar de</h1>
          <h1>Verdade</h1>
          <p>Crie seu primeiro projeto em até <b>10 dias.</b></p>
          <p>Estude com <b>menos aulas</b> e <b>mais prática.</b></p>
        </div>

        <div id="bloco3" className="inline-block" style={{display: "flex", flexDirection: "row"}}>
          <button>Criar conta</button>
          <button> Matricule-se</button>
        </div>
     
      </div>

      <div>

      <img src={dashboardImg} alt="Dashboard" />

      </div>
    </container>
  );
};

export default Cont1;
