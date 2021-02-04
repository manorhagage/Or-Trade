import { useEffect } from 'react';

import './Home.css';

function Home() {
    
    return (
        <div className='home'>
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
