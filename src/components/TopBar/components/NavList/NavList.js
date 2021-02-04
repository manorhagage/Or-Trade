import '../../TopBar.css'

function NavList({ activePage, scrollToElement }) {
    return (
        <ul>
            <li className={activePage == 'home' ? 'active' : '' } onClick={ () => scrollToElement('home') }>
                Home
            </li>
            <li className={activePage == 'about' ? 'active' : '' } onClick={ () => scrollToElement('about') } >
                About
            </li>
            <li className={activePage == 'our-services' ? 'active' : '' } onClick={ () => scrollToElement('our-services') }>
                Our Services
            </li>
            <li className={activePage == 'contact-us' ? 'active' : '' } onClick={ () => scrollToElement('contact-us') }>
                Contact Us
            </li>
        </ul>
    )
}

export default NavList
