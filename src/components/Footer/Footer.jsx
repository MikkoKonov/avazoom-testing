import React from 'react';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import classes from './Footer.module.css';
import useDeviceDetect from '../../Hooks/useDeviceDetected';

const Footer = () => {
    const { isMiniTablet, isMobile } = useDeviceDetect();
    return (
        <div className={classes.bgcolor}>
            {isMobile ? (
                <div className={classes.footerContainer}>
                    <div className={classes.linksContainer}>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Скачать APK' link='#APK'/>
                            </div>
                            <Links name='Telegram' link='https://t.me/Romas1337'/>
                        </div>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Купить премиум' link='#premium'/>
                            </div>
                            <Links name='Обзор сервера' link='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'/>
                        </div>
                    </div>
                    <div className={classes.copyright}>© Copyright AvaZoom</div>
                </div>
            ) : isMiniTablet ? (
                <div className={classes.footerContainer}>
                    <div className={classes.linkGroupWithLogo}>
                        <Logo/>
                        <div className={classes.copyright}>© Copyright AvaZoom</div>
                    </div>
                    <div className={classes.linksContainer}>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Скачать APK' link='#APK'/>
                            </div>
                            <Links name='Telegram' link='https://t.me/Romas1337'/>
                        </div>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Купить премиум' link='#premium'/>
                            </div>
                            <Links name='Обзор сервера' link='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.footerContainer}>
                    <Logo/>
                    <div className={classes.linksContainer}>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Скачать APK' link='#APK'/>
                            </div>
                            <Links name='Telegram' link='https://t.me/Romas1337'/>
                        </div>
                        <div className={classes.linkGroup}>
                            <div className={classes.linkMargin}>
                                <Links name='Купить премиум' link='#premium'/>
                            </div>
                            <Links name='Обзор сервера' link='https://youtu.be/I5-nAg_Dbxg?si=QcmKZILa05mLDFK4'/>
                        </div>
                    </div>
                    <div className={classes.copyright}>© Copyright AvaZoom</div>
                </div>
            )}
        </div>
    );
}

export default Footer;
