import React from 'react';

import achar1 from '../../../image/Achar/achar1.jpg';
import achar2 from '../../../image/Achar/achar2.jpg';
import achar3 from '../../../image/Achar/achar3.png';
import Menu from '../Menu/Menu';
import './Menus.css'

const menus =[
    {id:1,name:'Mango Achar',img: achar1},
    {id:2,name:'Morich Achar',img: achar2},
    {id:3,name:'Mixed Achar',img: achar3},
]

const Menus = () => {
    return (
        <div id="menus" className='container'>
            
            <div className='section'>
            <h2 className='text-center mt-6'>My Hot Achar Menus</h2>
            <div className='row'>
                {
                   menus.map(menu => <Menu
                     key={menus.id}
                     menu = {menu}
                   ></Menu>)
                }
            </div>
            </div>
        </div>
    );
};

export default Menus;