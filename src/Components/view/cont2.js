import React from 'react';
import metodologiaVideo from '../../Assets/Vid/teclado-de-computador-3188.mp4'; // Importe o vídeo MP4
import Button from '../common/buttons/button2';
import './cont2.css';

const cont2 = () => {
  return (
    <div className="container">
      <h1 class="titulo_box_principaltitulo">
            Serviços
          </h1>

      <video src={metodologiaVideo} alt="Metodologia" className="video" autoPlay muted loop style={{ width: '60%', height: 'auto', borderRadius:'2vw', marginTop:'1vw' }}/>

      <div id='agrupamento'>

        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <ul className="list-group" style={{flex: 1}}>
              <li className="list-group-item">Regularização imobiliária, Usucapião e Contratos</li>
              <li className="list-group-item">Divórcios, Partilhas e inventários</li>
              <li className="list-group-item">Adequação à LGPD</li>
              <li className="list-group-item">Defesa em ações Trabalhista</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="inline-block">

                <Button>Quero mais informações sobre os serviços</Button>

      </div>
    </div>
  );
};

export default cont2;
