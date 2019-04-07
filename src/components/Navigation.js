import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

//layout/design from https://foundation.zurb.com/building-blocks/blocks/topbar-responsive.html
const Navigation = (props) => (
    <nav className="top-bar topbar-responsive">
        <div className="top-bar-title">
            <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                <button className="menu-icon" type="button" data-toggle=""></button>
            </span>
            <a className="topbar-responsive-logo" href="/#">
            <strong>Magic the Gathering (Cards)</strong></a>
        </div>
        <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
                <ul className="menu simple vertical medium-horizontal">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allcards">Cards</Link></li>
                    <li><Link to="/randomcard">Random Card</Link></li>                            
                </ul>
            </div>
        </div>
    </nav>
)

export default Navigation;