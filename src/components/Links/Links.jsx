import React from 'react';
import { Link } from "react-router-dom";
import classes from './Links.module.css'

const Links = ({name, link}) => {
    return (
        <Link className={classes.link} to={link}>{name}</Link>
    );
}

export default Links;
