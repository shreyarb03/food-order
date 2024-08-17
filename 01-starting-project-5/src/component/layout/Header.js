import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.png';
import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="An image of food!!!"/>
        </div>
    </React.Fragment>
}

export default Header;