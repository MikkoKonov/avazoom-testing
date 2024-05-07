import React from 'react';
import classes from './Button.module.css';

const Button = ({ name, style, onClick }) => {
    return (
        <div className={style !== null ? style : classes.button} onClick={onClick}>
            {name}
        </div>
    );
}

export default Button;
