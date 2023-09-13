import React, {Fragment} from "react";
import mealImage from "../../assets/images/meals.jpg"
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>Organick</h1>
                <HeaderCartButton onClickAction={props.onClickAction}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage} alt="A table full of food" />
            </div>
        </Fragment>
    )
}

export default Header;