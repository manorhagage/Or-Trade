import { useState } from 'react';

import './App.css';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home';
import { OurServices } from './components/OurServices';

function App() {
    const [activePage, setActivePage] = useState('Home');

    return (
      <div className="App">
        <Home activePage={activePage} />
        <About />
        <OurServices />
        <ContactUs />
      </div>
    );
}

export default App;
