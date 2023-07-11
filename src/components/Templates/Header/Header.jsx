import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <ul style={{
            display: "flex",
            listStyle: "none",
            backgroundColor: "cadetblue",
            padding: "20px 0"
        }}
        >
            <li>
                <Link style={{textDecoration: "none",marginRight: "15px"}} to='/signUp'>Sign up</Link>
            </li>
            <li>
                <Link style={{textDecoration: "none"}} to="/">Sign in</Link>
            </li>
        </ul>
    );
};

export default Header;