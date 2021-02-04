import '../TopBar/TopBar.css'

function NavList({ activePage }) {
    return (
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
    )
}

export default NavList
