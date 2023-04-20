import React from 'react';
import './App.css';
import './Components/view/aNavbar';
// sempre começa com letra maiuscula
import Cont1 from './Components/view/cont1';
import Cont2 from './Components/view/cont2';
import Cont3 from './Components/view/cont3';
import Cont4 from './Components/view/cont4';

import Teste from './Components/view/aNavbar';

function App() {
  return (
    <div className="App">
      <Teste /> {/* Renders the teste component */}
      <Cont1 />
      <Cont2 />
      <Cont3 />
      <Cont4 />
    </div>
  );
}

export default App;