import { Branch } from './components/Branch';
import './ContactUs.css';
import ContactUsSvg from '../../static/contact-us-2.svg'

function ContactUs() {
    return (
        <div className='contact-us'>
            <div className='header'>
                <div className='title'>
                    <h1> Contact Us </h1>
                </div>
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
