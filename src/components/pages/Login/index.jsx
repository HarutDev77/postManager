import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mainApi from "../../../api/axsiosConfig";
import {login} from "../../../api/user.api";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [showMessage,setShowMessage] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchData = {
            username: userName,
            password: userPassword
        }
        try {
            const res = await login(fetchData)

            if (res.data?.token) {
                localStorage.setItem('token', res.data.token);
                navigate("/Home")
            }
        } catch (e) {
            console.log(e)
            setShowMessage(true);
            setUserName("");
            setUserPassword("");
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <button>Sigh in</button>
            {showMessage ? < h1 style={{color: "red"}}>Wrong password or login</h1> : null}
        </form>
    );
};

export default Login;