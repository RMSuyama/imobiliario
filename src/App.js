import React from 'react';
import './App.css';
import './Components/view/aNavbar';
// sempre começa com letra maiuscula
import Cont1 from './Components/view/cont1';
import Cont2 from './Components/view/cont2';
import Cont3 from './Components/view/cont3';
import Cont4 from './Components/view/cont4';
import Cont5 from './Components/view/cont5';
import Cont6 from './Components/view/cont6';
import Cont7 from './Components/view/cont7';
import Cont8 from './Components/view/cont8';
import Cont9 from './Components/view/cont9';
import Cont10 from './Components/view/cont10';
import Cont11 from './Components/view/cont11';
import Cont12 from './Components/view/cont12';
import Teste from './Components/view/aNavbar';

function App() {
  return (
    <div className="App">
      <Teste /> {/* Renders the teste component */}
      <Cont1 />
      <Cont2 />
      <Cont3 />
      <Cont4 />
      <Cont5 />
      <Cont6 />
      <Cont7 />
      <Cont8 />
      <Cont9 />
      <Cont10 />
      <Cont11 />
      <Cont12 />
    </div>
  );
}

export default App;