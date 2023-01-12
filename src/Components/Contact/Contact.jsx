import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
const Contact = () => {
    return (
        <div className='contactPart'>
            <div className="wrapper">
                <span>be in touch with us:-</span>
                <div className="email">
                    <input type="email" placeholder='Enter your e-mail here...' />
                    <button>Join us</button>
                </div>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <GoogleIcon />

                </div>
            </div>

        </div>
    )
}

export default Contact
