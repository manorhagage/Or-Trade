import './TopBar.css'
import logo from '../../../../static/logos/logo-full-clean.png';

function TopBar({ activePage }) {
    return (
        <div className='top-bar'>
            <img className='logo' src={logo} />
            <div className='nav'>
                <ul>
                    <li className={activePage == 'home' ? 'active' : '' } >
                        Home
                    </li>
                    <li className={activePage == 'about' ? 'active' : '' }>
                        About
                    </li>
                    <li className={activePage == 'our-services' ? 'active' : '' }>
                        Our Services
                    </li>
                    <li className={activePage == 'contact-us' ? 'active' : '' }>
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar
