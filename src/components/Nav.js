import React from 'react';
import { Link } from 'react-router-dom';

function nav() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Playlist</li>
                    </Link>
                    <Link to="/about">
                        <li>About me</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default nav;
