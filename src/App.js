import { useState } from 'react';

import './App.css';
import { Home } from './components/Home';
import OurServices from './components/OurServices/OurServices';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="App">
      <Home activePage={activePage} />
      <OurServices />
    </div>
  );
}

export default App;
