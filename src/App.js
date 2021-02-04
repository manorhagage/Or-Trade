import { useState } from 'react';

import './App.css';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import { Home } from './components/Home';
import { TopBar } from './components/TopBar';
import { OurServices } from './components/OurServices';

import { scrollToElement } from './function';


function App() {

  const [activePage, setActivePage] = useState('home');
  
  function scrollTo(element)
  {
    setActivePage(element);
    scrollToElement(element);
  }

    return (
      <div className="App">
        <TopBar activePage={activePage} scrollToElement={ scrollTo }/>
        <Home />
        <About />
        <OurServices />
        <ContactUs />
      </div>
    );
}

export default App;
