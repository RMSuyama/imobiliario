import exercicios from '../../Assets/Img/exercicios.webp';
import exercicio from '../../Assets/Img/exercicio.webp';
import React from 'react';

const cont5 = () => {
    return (
  <container style={{display: "flex", flexDirection: "column", margin: '1vw',}}>
            <h1>Escreva Códigos e ganhe recompensas</h1>
            <p>+10.000 exercícios gamificados, valendo pontos, moedas, certificados e um lugar no ranking dos alunos!
</p>

            <div id='imagens' style={{display: "flex", flexDirection: "row", margin: '1vw',}}>
            <img src={exercicios} alt="Dashboard" style={{width: '50%'}} />
            <img src={exercicio} alt="Dashboard" style={{width: '50%'}} />
            </div>
            
            <button style={{backgroundColor:'rgb(255,255,255)'}}>firula MÉTODO APRENDA A PROGRAMAR DE VERDADE</button>

    
        </container>
        
        );
  };
  
  export default cont5;