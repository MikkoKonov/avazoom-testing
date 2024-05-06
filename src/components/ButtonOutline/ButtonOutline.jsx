import React from 'react';
import classes from './ButtonOutline.module.css'

const ButtonOutline = ({ name, style }) => {
    return (
        <div className={classes.border}>
            <div className={classes.bg}>
                <div className={style !== null ? style : classes.button}>{name}</div>
            </div>
        </div>
    );
}

export default ButtonOutline;
