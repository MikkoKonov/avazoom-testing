import React from 'react';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import classes from './Header.module.css'
import ButtonOutline from '../ButtonOutline/ButtonOutline';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:'flex', maxWidth: '75vw', justifyContent: 'space-between', margin: '1.5rem auto', alignItems: 'center'}}>
            <Logo/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Links name='Главная' link='/'/>
                <Links link='https://t.me/Romas1337' name='Telegram'/>
                <a href='#premium'>
                    <ButtonOutline name='Купить премиум' style={null}/>
                </a>
            </div>
        </div>
    );
}

export default Header;
