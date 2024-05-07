import React from 'react';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '75vw', margin: '1.5rem auto'}}>
            <Logo/>
            <div style={{marginLeft: '1.5rem'}}>
                <Links name='Главная' link='/'/>
                <Links name='Скачать APK' link='#APK'/>
                <Links name='Telegram' link='https://t.me/Romas1337'/>
                <Links name='Купить премиум' link='#premium'/>
                <Links name='Обзор сервера' link='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'/>
            </div>
            <div className={classes.copyright}>© Copyright AvaZoom</div>
        </div>
    );
}

export default Footer;
