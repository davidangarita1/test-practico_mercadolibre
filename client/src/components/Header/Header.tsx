import './Header.scss'
import React from 'react';
import {Link} from "react-router-dom";

import logo from '../../assets/img/logo.png'
import {SearchBar} from "../SearchBar/SearchBar";

const Header = () => {
    return (
        <>
            <header>
                <div className={"Header"}>
                    <div className={"container"}>
                        <div className={"logo"}>
                            <Link to="/">
                                <img src={logo} alt={"Logo empresarial mercado libre"}/>
                            </Link>
                        </div>
                        <SearchBar/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;