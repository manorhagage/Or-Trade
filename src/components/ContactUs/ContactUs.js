import { Branch } from './components/Branch';
import './ContactUs.css';
import ContactUsSvg from '../../static/contact-us-2.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function ContactUs() {;
    return (
        <div className='contact-us'>
            <div className='header'>
                <div className='title'>
                    <h1> Contact Us </h1>
                    <FontAwesomeIcon icon={faPhone} />
                    <FontAwesomeIcon icon={faMailBulk} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <div className='opening-hours'>
                        <h2>Opening hours:</h2>
                        <p> Sunday - Thursday : 09:00 - 17:00 </p>
                        <p> Friday : 09:00 - 13:00 </p>
                        <p> Saturday and holidays : Closed </p>
                    </div>
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
