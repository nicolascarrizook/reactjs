import { Link } from '@mui/material'
import React, { Fragment } from 'react'
import { CartWidget } from './CartWidget'

import './navBar.css'

export const NavBar = () => {
    return (
        <Fragment>
                <nav className="nav__container">
                    <div className="nav__logo">
                        <Link href="/"> <img src="assets/logo.png" alt="logo" className="img" /></Link>
                    </div>
                    <div className="nav__links">
                        <Link href="#" underline="none" className="links__item"> Inicio </Link>
                        <Link href="#" underline="none" className="links__item"> La Pastelería</Link>
                        <Link href="#" underline="none" className="links__item"> Productos </Link>
                        <Link href="#" underline="none" className="links__item"> Talleres </Link>
                        <Link href="#" underline="none" className="links__item"> Contacto </Link>
                        <Link href="#" underline="none" className="links__item"> <CartWidget/> </Link>
                    </div>
                </nav>
        </Fragment>
    )
}
