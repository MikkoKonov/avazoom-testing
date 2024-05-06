import React from 'react';
import classes from './Logo.module.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <div className={classes.logo}>
                AvaZoom
            </div>
        </Link>
    );
}

export default Logo;
