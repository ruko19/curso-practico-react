import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.scss"
import iconMenu from "../assets/icons/icon_menu.svg";
import logoSale from "../assets/logos/logo_yard_sale.svg"
import iconCart from "../assets/icons/icon_shopping_cart.svg"

const Header = () => {
    return (
        <nav>
            <img src={iconMenu} className="menu" />

            <div className="navbar-left">
                <img src={logoSale} alt="logo" className="logo" />

                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={iconCart} />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header