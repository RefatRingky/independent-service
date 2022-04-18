import React from 'react';
import profile from '../../image/profile.jpg';
import './About.css'

const About = () => {
    return (
        <div className='container'>
             <div className='row'>
              <div className='col-md-6'>
                 <img src={profile} alt='' height="500px" width="400"></img>
              </div>
         
              <div className='col-md-6'>
               
               <h5>About Me</h5>
               <p>I am Refat Tamanna Ringky.I completed My Bsc from IUBAT.Noe I am continue my MSC in Jahangirnagar University.And I also Continue a Web Developement Course Under Programming Hero.Beacuse I want to  be a Font-end-developer.</p>
             </div>
             
             </div>
        </div>
    );
};

export default About;