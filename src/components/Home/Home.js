import { useEffect } from 'react';

import './Home.css';
import logo from '../../static/logos/logo-full-clean.png'
import { insertStyleToIframe } from './index'

function Home({activePage}) {

    useEffect(() => {
        insertStyleToIframe();
    }, []);
    
    return (
        <div className='home'>
            <div className='top-bar'>
                <img className='logo' src={logo} />
                <div className='nav'>
                    <ul>
                        <li className={activePage == 'Home' ? 'active' : '' }>
                            Home
                        </li>
                        <li className={activePage == 'About' ? 'active' : '' }>
                            About
                        </li>
                        <li className={activePage == 'Our Services' ? 'active' : '' }>
                            Our Services
                        </li>
                        <li className={activePage == 'Contact Us' ? 'active' : '' }>
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
            <div className='content'>
                <div className='welcome-msg'>
                    <h1>OR Trade</h1>
                    <h1>Finance And Currency</h1>
                    <p>
                        We are providing finence and currency Services with the most powerful and reliable tools on the market.
                        We are providing finence and currency Services with the most powerful and reliable tools on the market.
                        We are providing finence and currency Services with the most powerful and reliable tools on the market.
                        We are providing finence and currency Services with the most powerful and reliable tools on the market.
                    </p>
                </div>
                <iframe id='currency' className='currency-table' src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&cols=bid,ask,changePerc,time&pairs=1,1492,1528,64,65,1899,63" ></iframe>
            </div>
        </div>
    )
}

export default Home
