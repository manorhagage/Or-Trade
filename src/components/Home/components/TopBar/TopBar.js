import './TopBar.css'
import logo from '../../../../static/logos/logo-full-clean.png';
import { NavList } from '../NavList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function TopBar({ activePage }) {
    return (
        <div className='top-bar'>
            <img className='logo' src={logo} />
            <div className='nav'>
                <NavList activePage={activePage} />
            </div>
            
            <div className='nav-mobile'>
                <FontAwesomeIcon icon={faBars} />
                <NavList activePage={activePage} />
            </div>
        </div>
    )
}

export default TopBar
