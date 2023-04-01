import sorteionote from '../../Assets/Img/sorteio-note.webp';

const con7 = () => {
    return (

        <container style={{display: "flex", flexDirection: "column", margin: '1vw',}}>
            <div id='imagens' style={{display: "flex", flexDirection: "row", margin: '1vw',}}>
                <img src={sorteionote} alt="Dashboard" style={{width: '50%'}} />
            <div style={{display: "flex", flexDirection: "column", margin: '1vw',}}>
                <h1>Sorteio da Temporada</h1>
                <p>Todos os meses um novo sorteio, com o método Aprenda a Programar de Verdade você se mantém sempre estudando e concorrendo a prêmios.</p>

            </div>
            </div>          
            <button style={{backgroundColor:'rgb(255,255,255)'}}>firula MÉTODO APRENDA A PROGRAMAR DE VERDADE</button>
    </container>

    );
  };
  
  export default con7;