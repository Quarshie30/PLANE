import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">PLANE NEWS</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/world">About Us</a></li>
                    <li><a href="/politics">News</a></li>
                    <li><a href="/business">Entertainment</a></li>
                    <li><a href="/tech">Health</a></li>
                    <li><a href="/science">Sports</a></li>
                    <li><a href="/health">Environment</a></li>
                    <li><a href="/health">Resources</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
