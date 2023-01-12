import React from 'react'
import Img from '../Footer/Pay.jpg'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categoris</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Kids</span>
                    <span>Shoes</span>
                    <span>Accesories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQs</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <div className="about">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, pariatur excepturi doloribus et at eaque inventore nulla incidunt rerum labore nisi deserunt maiores impedit numquam omnis. Aliquid totam quae nemo.</p>
                    </div>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <div className="contact">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, iusto? Assumenda eaque sed explicabo, rerum necessitatibus doloremque temporibus possimus ullam enim quibusdam labore sint, laboriosam, adipisci at nam tempore reprehenderit.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <span className='logo'>Fancy Store</span>
                    <span className='copyright'>@all Copyright Reserve</span>
                </div>
                <div className='payMethodImg'>
                    <span>
                        <img className='pic' src={Img} alt="" />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Footer;