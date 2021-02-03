import { useState } from 'react';

import './App.css';
import { Home } from './components/Home';

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="App">
      <Home activePage={activePage} />
    </div>
  );
}

export default App;
