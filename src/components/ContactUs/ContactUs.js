import { Branch } from './components/Branch';
import './ContactUs.css';
import ContactUsSvg from '../../static/contact-us.svg'

function ContactUs() {
    return (
        <div className='contact-us'>
            <div className='title'>
                <h1> Contact Us </h1>
                <img className='svg' src={ContactUsSvg} />
            </div>

            <div className='Branches'>
                
                <Branch />
                <Branch />

            </div>
            
        </div>
    )
}

export default ContactUs
