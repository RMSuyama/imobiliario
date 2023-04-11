import React from 'react';
import dashboardImg from '../../Assets/Img/dashboard-min.webp';
import Button from '../common/buttons/button2';
// import Input from '../common/input';
import '../view/cont1.css'

const Cont1 = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent:'space-between'}}>

      <div className="cont1">

        <div id="bloco1">
        <label class="label_metodo_titulo">Método</label>
        <h1 class="titulo_box_principal titulo">
            Aprenda a <br class="br_primeira_sessao" />
            Programar de<br />
            Verdade
        </h1>

        <p class="titulo_box_principal subtitulo">Crie seu primeiro projeto em até <b>10 dias.</b></p>
        <p class="titulo_box_principal subtitulo">Estude com <strong>menos aulas</strong> e <strong>mais prática.</strong></p>

 
        </div>

        <div id="bloco3" className="inline-block" style={{display: "flex", flexDirection: "row", }}>
        <Button>Criar conta grátis</Button>
          <Button> Matricule-se</Button>


        </div>
     
      </div>

      <div class="imagemCase" >

      <img class="imagem" src={dashboardImg} alt="Dashboard" />

      </div>
    </div>
  );
};

export default Cont1;
