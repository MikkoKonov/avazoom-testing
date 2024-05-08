import React from 'react';
import Button from '../Button/Button';
import classes from './MainSection.module.css'
import { Link } from 'react-router-dom';
import useDeviceDetect from '../../Hooks/useDeviceDetected';

const MainSection = () => {
    const { isMobile } = useDeviceDetect();
    return (
        <div className={classes.mainsection}>
            { isMobile ? (
                <>
                    <div>
                        <div className={classes.logoContainer}>
                            <img className={classes.logo} src='/лого-1.svg'/>
                        </div>
                        <h1>AvaZoom</h1>
                        <p className={classes.description}>Лучший приватный сервер<br/>Мобильной Аватарии</p>
                        <div className={classes.buttonContainer}>
                            <Button id='APK' style={null} name='Скачать APK'/>
                            <Link className={classes.linkButton} to='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'>
                                <img src='/server-overview.svg'/>
                                <Button style={classes.button} name='Обзор сервера'/>
                            </Link>
                        </div>
                    </div>
            </>
            ) : (
                <>
                    <div>
                        <h1>AvaZoom</h1>
                        <p className={classes.description}>Лучший приватный сервер<br/>Мобильной Аватарии</p>
                        <div className={classes.buttonContainer}>
                            <Button id='APK' style={null} name='Скачать APK'/>
                            <Link className={classes.linkButton} to='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'>
                                <img src='/server-overview.svg'/>
                                <Button style={classes.button} name='Обзор сервера'/>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.logoContainer}>
                        <img className={classes.logo} src='/лого-1.svg'/>
                    </div>
            </>
            )}
        </div>
    );
}

export default MainSection;
