import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from "./adminHeader.module.scss";
import {Button} from "@mui/material";

const AdminHeader = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className={classes.navBarContainer}>
            <div>
                <ul style={{
                    display: "flex",
                    listStyle: "none",
                    padding: "20px 0"
                }}
                >
                    <li>
                        <Link style={{marginRight: "15px"}} to="/home">Home</Link>
                    </li>
                    <li>
                        <Link style={{marginRight: "15px"}} to="/home">Manage blogs</Link>
                    </li>
                    <li>
                        <Link style={{marginRight: "15px"}} to="/home">Manage posts</Link>
                    </li>
                </ul>
            </div>
            <div><Button variant="contained" onClick={logout}>Logout</Button></div>

        </div>
    );
};

export default AdminHeader;