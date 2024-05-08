import React from 'react';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import useDeviceDetect from '../../Hooks/useDeviceDetected';
import classes from './Header.module.css';
import ButtonOutline from '../ButtonOutline/ButtonOutline';

const Header = () => {

    const { isMobile } = useDeviceDetect();

    return (
        <div className={classes.header}>
            { isMobile ? (
                <>
                    <Logo/>
                    <a href='https://t.me/Romas1337'>
                        <ButtonOutline name='Telegram' style={null}/>
                    </a>
                </>
            ) : (
                <>
                    <Logo/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Links name='Главная' link='/'/>
                        <Links link='https://t.me/Romas1337' name='Telegram'/>
                        <a href='#premium'>
                            <ButtonOutline name='Купить премиум' style={null}/>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;
