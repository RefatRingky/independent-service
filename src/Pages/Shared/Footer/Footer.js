import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footer text-center mt-8'>
            <p><small>Copywrite @ {year} Refat Tamanna Ringky</small></p>
        </div>
    );
};

export default Footer;