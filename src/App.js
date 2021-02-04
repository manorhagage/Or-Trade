import { useState } from 'react';

import './App.css';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home';
import { OurServices } from './components/OurServices';

import { scrolToElement } from './function'

function App() {
	const [activePage, setActivePage] = useState('home');
    
    function navClickEvent(value)
    {
        setActivePage(value);

        scrolToElement('.' + value);
    } 

    return (
      <div className="App">
        <Home activePage={activePage} navClickEvent={navClickEvent}/>
        <About />
        <OurServices />
        <ContactUs />
      </div>
    );
}

export default App;
