import plataforma3 from '../../Assets/Vid/encontro-2340.mp4';
import React from 'react';
import Button from '../common/buttons/button3';
import '../view/cont3.css'
const Cont3 = () => {
  return (
    <container
      id='teste'
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(37,58,68)',
        alignItems: 'center',
        paddingTop: '4vw',
        paddingBottom: '4vw',
        margin: '0 auto', // Centraliza o container na tela
        maxWidth: 'auto', // Define a largura máxima do container
        padding: '0 1rem' // Adiciona um espaçamento nas laterais do container
      }}
    >
      <h4 style={{ fontSize: '55px', color: 'white' }}>Sobre o nosso trabalho</h4>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h2 id='texto' style={{ fontSize: '20px', color: 'white', textAlign: 'justify', margin:'0vw 8vw 0 3vw', }}>
          Somos uma equipe de advogados com experiência em direito imobiliário e estamos aqui para oferecer uma consultoria jurídica completa e diferenciada para suas transações imobiliárias. Com foco no mercado imobiliário, estamos comprometidos em fornecer um serviço de alta qualidade para proteger seus interesses e garantir o sucesso de suas transações. Você pode contar com um atendimento <strong>personalizado</strong>, <strong>dedicado</strong> e <strong>ágil</strong>. 
        </h2>
        <video src={plataforma3} alt="Metodologia" className="video" autoPlay muted loop style={{ width: '50%', height: 'auto', borderRadius:'40vw'}}/>      </div>
      <h2 id='texto' style={{ fontSize: '20px', color: 'white', textAlign: 'justify', margin:'1vw 8vw 1vw 3vw',paddingBottom:'4vw' }}>Agende uma consulta agora mesmo e descubra como podemos ajudá-lo a alcançar seus objetivos com confiança e segurança!</h2>
      <div className="inline-block">
   
      {/* <Button style={{ marginTop: '2rem' }}>Quero ajuda de alguém que conhece a área!</Button> */}
      </div>
    </container>
  );
};

export default Cont3;
