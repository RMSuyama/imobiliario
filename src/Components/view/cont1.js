import React from 'react';
import dashboardImg from '../../Assets/Img/23734938_152869982131901_4430415699634028544_n.jpg';
import Button from '../common/buttons/button2';
// import Input from '../common/input';
import '../view/cont1.css'

const Cont1 = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent:'space-between'}}>

      <div className="cont1">

        <div id="bloco1">
        <label class="label_metodo_titulo" style={{paddingTop:'1vw'}}>Giancarlo Bolfarini</label>
        <h1 class="titulo_box_principal titulo">
            El mejor <br class="br_primeira_sessao" />
            batedero<br />
            de Buenos Aires
        </h1>

        <p class="titulo_box_principal subtitulo">Mestre das artes ocultas <b>dos baticumduns.</b></p>
        <p class="titulo_box_principal subtitulo">Baterista de grandes bandas como a grande banda de reggae<strong> Mangata </strong> e pequenas bandinhas de garagem como <strong>Angra e Avenged Seventfold.</strong></p>

 
        </div>

        <div id="bloco3" className="inline-block" style={{display: "flex", flexDirection: "row", }}>
        <Button>Quero contratar ele</Button>
        <Button>Quero comprar pacote do onlyfans dele</Button>


        </div>
     
      </div>

      <div class="imagemCase" >

      <img class="imagem" src={dashboardImg} alt="Dashboard" />

      </div>
    </div>
  );
};

export default Cont1;
