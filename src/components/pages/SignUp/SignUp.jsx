import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showMessage,setShowMessage] = useState(false);
    const [users,serUsers] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fetchData = {
            username: userName,
            password: userPassword
        }

        try {
            const res = await axios.post('http://localhost:5050/auth/register', fetchData)
            console.log(res)
            if (res.statusText === "Created") {
                console.log("You are successfully registered")
                setUserName("");
                setUserPassword("");
                navigate("/")
            }
        } catch (e) {
            console.log(e)
            setShowMessage(true);
            setUserName("");
            setUserPassword("");
        }
    }
    const getUsers = async (e) => {

        try {
            const res = await axios.get('http://localhost:5050/users')

            serUsers(res.data)

        } catch (e) {
            console.log(e)

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={userName} onChange={
                    (e)=>{
                        setUserName(e.target.value);
                        setShowMessage(false)
                    }}/>
                <input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
                <button>Sign up</button>
                {showMessage ? < h1 style={{color: "red"}}>This password or login is already exist</h1> : null}
            </form>
            <button onClick={getUsers}>Get Users</button>
            <div>{users.map((user,i)=><p key={Math.random()}>{`${i} ${user.username}`}</p>)}</div>
        </>
    );
};

export default SignUp;