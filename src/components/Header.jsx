import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useInitialState } from "../hooks/useInitialState"
import "../styles/Header.scss"
import iconMenu from "../assets/icons/icon_menu.svg";
import logoSale from "../assets/logos/logo_yard_sale.svg"
import Menu from "../components/Menu"
import iconCart from "../assets/icons/icon_shopping_cart.svg"

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useInitialState()

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
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
                        <li className="navbar-email" onClick={handleToggle}>
                            platzi@example.com</li>
                        <li className="navbar-shopping-cart">
                            <img src={iconCart} />
                            <div>{state.cart.length > 0 ? state.cart.length : null}</div>
                        </li>
                    </ul>
                </div>

                {toggle && <Menu />}

            </nav>

        </div>
    )
}

export default Header