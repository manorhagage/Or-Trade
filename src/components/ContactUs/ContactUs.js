import { Branch } from './components/Branch';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className='contact-us'>
            <h1> Contact Us </h1>
            <div className='Branches'>
                
                <Branch />
                <Branch />

            </div>
            
        </div>
    )
}

export default ContactUs
