import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='header-icon'>
            <h1><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Gym Activities</h1>
        </div>
    );
};

export default Header;