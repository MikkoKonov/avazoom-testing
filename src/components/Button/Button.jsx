import React from 'react';
import classes from './Button.module.css'

const Button = ({name, style}) => {
    return (
        <div className={style !== null ? style : classes.button}>
            {name}
        </div>
    );
}

export default Button;
