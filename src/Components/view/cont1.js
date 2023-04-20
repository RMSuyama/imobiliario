import React from 'react';
import dashboardImg from '../../Assets/Img/WhatsApp Image 2023-01-13 at 22.22.10.jpeg';
import Button from '../common/buttons/button2';
// import Input from '../common/input';
import '../view/cont1.css'

const Cont1 = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent:'space-between',}}>

      <div className="cont1">

        <div id="bloco1">
          {/* <label class="label_metodo_titulo" style={{paddingTop:'1vw'}}>Rafael Suyama</label> */}
          <h1 class="titulo_box_principal titulo">
            Rafael<br class="br_primeira_sessao" />
            Suyama<br />
          </h1>

          {/* <p class="titulo_box_principal subtitulo">Atuação em todo o<b> Vale do Ribeira.</b></p> */}
          <p class="titulo_box_principal subtitulo">Elaboração e análise de contratos imobiliários, incluindo contratos de compra e venda, contratos de locação e outros tipos de acordos relacionados a propriedades imobiliárias.</p>
        </div>

        <div id="bloco3" className="inline-block" style={{display: "flex", flexDirection: "row", justifyContent: "left", paddingLeft:"2vw"}}>
          {/* Adicionei a propriedade de justifyContent com valor 'center' */}
          <Button>Quero falar com um advogado</Button>
        </div>
     
      </div>

      <div class="imagemCase" >
        <img class="imagem" style={{borderRadius:'15vw'}} src={dashboardImg} alt="Dashboard" />
      </div>
    </div>
  );
};

export default Cont1;
