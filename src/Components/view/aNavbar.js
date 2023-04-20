import React from 'react';
import dashboardImg from '../../Assets/Img/3.png';
import '../view/aNavbar.css';
import SocialMedia from '../common/socialMedia';

const Teste = () => {
  return (
    <nav>
      <navbar className="navbar"> 
        <img id="imagem" src={dashboardImg} alt="Dashboard" />

        <div id="sect1" className="navbar-items">
          <a href="/"><b>PÁGINA INICIAL</b></a>
          <a href="/servicos">SERVIÇOS</a>
          <a href="/contato">CONTATO</a>
          <a href="/contato">SOBRE</a>
        </div>
        <SocialMedia></SocialMedia>
      </navbar>
    </nav>
  );
};

export default Teste;
