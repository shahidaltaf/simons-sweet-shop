import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/images/logo.png';
import logo2x from '../assets/images/logo@2x.png';
import adminIcon from '../assets/images/icon-admin.png';
import adminIcon2x from '../assets/images/icon-admin@2x.png';
import cartIcon from '../assets/images/icon-cart.png';
import cartIcon2x from '../assets/images/icon-cart@2x.png';

const Header = ({ admin = false, cart = false }) => {
    return <div className="sss-bg-header mb-4 pt-3 pb-3 d-flex justify-content-end">
        <div className="w-50 d-flex justify-content-center align-items-center flex-column">
            <Link to="/"><img srcSet={`${logo}, ${logo2x} 2x`} src={logo} alt="Simon's Sweet Shop" /></Link>
            <h1 className="h4 mb-0">Simon's</h1>
        </div>
        <div className="w-25 pr-3 d-flex justify-content-end align-items-center">
            {
                admin && <Link to="/packs"><img srcSet={`${adminIcon}, ${adminIcon2x} 2x`} src={adminIcon} alt="Packs" /></Link>
            }
            {
                cart && <Link to="/cart"><img srcSet={`${cartIcon}, ${cartIcon2x} 2x`} src={cartIcon} alt="Cart" /></Link>
            }
        </div>
    </div>;
}

export default Header;