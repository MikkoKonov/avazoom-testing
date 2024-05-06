import React from 'react';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import classes from './Header.module.css'
import ButtonOutline from '../ButtonOutline/ButtonOutline';

const Header = () => {
    return (
        <div style={{display:'flex', maxWidth: '64vw', justifyContent: 'space-between', margin: '1.5rem auto', alignItems: 'center'}}>
            <Logo/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Links name='Главная' link='/'/>
                <Links link='https://t.me/Romas1337' name='Telegram'/>
                <ButtonOutline name='Купить премиум' style={null}/>
            </div>
        </div>
    );
}

export default Header;
