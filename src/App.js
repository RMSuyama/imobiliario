import logo from './logo.png';
import React from 'react';
import './App.css';
import './Components/home.components/aNavbar.css';
// sempre começa com letra maiuscula
import Cont1 from './Components/home.components/cont1';
import Cont2 from './Components/home.components/cont2';
import Cont3 from './Components/home.components/cont3';
import Cont4 from './Components/home.components/cont4';
import Cont5 from './Components/home.components/cont5';
import Cont6 from './Components/home.components/cont6';
import Cont7 from './Components/home.components/cont7';
import Cont8 from './Components/home.components/cont8';
import Cont9 from './Components/home.components/cont9';
import Cont10 from './Components/home.components/cont10';
import Cont11 from './Components/home.components/cont11';
import Cont12 from './Components/home.components/cont12';
import Teste from './Components/home.components/aNavbar';

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
      <img src={logo} className="as" alt="logo" />
    </div>
  );
}

export default App;