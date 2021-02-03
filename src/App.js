import { useState } from 'react';

import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { OurServices } from './components/OurServices';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="App">
      <Home activePage={activePage} />
      <About />
      <OurServices />
    </div>
  );
}

export default App;
