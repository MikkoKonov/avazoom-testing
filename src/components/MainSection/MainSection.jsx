import React from 'react';
import Button from '../Button/Button';
import classes from './MainSection.module.css'
import { Link } from 'react-router-dom';

const MainSection = () => {
    return (
        <div style={{display:'flex', maxWidth: '75vw', justifyContent: 'space-between', margin: '8rem auto 14.2rem auto', alignItems: 'center'}}>
            <div>
                <h1>AvaZoom</h1>
                <p style={{ whiteSpace: 'nowrap'}}>Лучший приватный сервер<br/>Мобильной Аватарии</p>
                <div style={{display: 'inline-flex'}}>
                    <Button id='APK' style={null} name='Скачать APK'/>
                    <Link style={{display: 'flex', alignItems: 'center', marginLeft: '1.5rem'}} to='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'>
                        <img src='/server-overview.svg'/>
                        <Button style={classes.button} name='Обзор сервера'/>
                    </Link>
                </div>
            </div>
            <div>
                <img src='/лого-1.svg'/>
            </div>
        </div>
    );
}

export default MainSection;
