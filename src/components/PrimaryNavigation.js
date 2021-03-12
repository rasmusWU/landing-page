// src/components/PrimaryNavigation.js

import './PrimaryNavigation.scss';

function PrimaryNavigation() {
    return (
        <nav className="primaryNavigation">
            <a href="/" className="primaryNavigation__">SaaS Company</a>
            <ul className="primaryNavigation__menu">
                <li className="primaryNavigation__menuItem">
                    <a className="primaryNavigation__menuLink" href="/">Home</a>
                </li>
                <li className="primaryNavigation__menuItem">
                    <a className="primaryNavigation__menuLink" href="/about">About</a>
                </li>
                <li className="primaryNavigation__menuItem">
                    <a className="primaryNavigation__menuLink" href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default PrimaryNavigation;