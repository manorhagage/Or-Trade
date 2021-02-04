import './TopBar.css'
import logo from '../../static/logos/logo-full-clean.png';
import { NavList } from './components/NavList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function TopBar({ activePage, scrollToElement }) {
    return (
        <div className='top-bar'>
            <img className='logo' src={logo} />
            <div className='nav'>
                <NavList activePage={activePage} scrollToElement={scrollToElement} />
            </div>
            
            <div className='nav-mobile'>
                <FontAwesomeIcon icon={faBars} />
                <NavList activePage={activePage} scrollToElement={scrollToElement} />
            </div>
        </div>
    )
}

export default TopBar
