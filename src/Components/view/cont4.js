import React from 'react';
import Button from '../common/buttons/button3';
import foto1 from '../../Assets/Img/69803238_2105424809766520_1549878561138534247_n.jpg';
import foto2 from '../../Assets/Img/60486226_599420147229615_1738070137263133519_n.jpg';
import foto3 from '../../Assets/Img/51515117_338353980139141_644457698764110241_n.jpg';
import foto4 from '../../Assets/Img/336501437_696183238905590_9207665283378462286_n.jpg';


const Cont4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '10vw', alignItems:'center', justifyContent:'space-between'}}>

         <div>
          <div  id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
              <div className="carousel-item active" >
                <img src={foto1} style={{width:'40vw', height:'50vw'}} className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={foto2} style={{width:'50vw', height:'50vw'}} className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={foto3} style={{width:'50vw', height:'40vw'}} className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={foto4} style={{width:'40vw', height:'50vw'}} className="d-block" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '1vw', alignItems:'center', justifyContent:'center',}}>
        <div>
          <h1>Agora é sério</h1>
          <Button>Contrata ele, por favor. Se ele não tocar ele não me paga..</Button>

        </div>
       
      </div>

    </div>
  );
};

export default Cont4;
