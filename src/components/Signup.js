import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import './SignupStyle.css';
import Navbar from "./Navbar";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else if (res.data === "notexist") {
                        history("/", { state: { id: email } });
                    }
                })
                .catch(e => {
                    alert("Wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Navbar />
            <div className="signup-container">
                <div className="signup">
                    <h1>Signup</h1>
                    <form action="POST">
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        <input type="submit" onClick={submit} />
                    </form>
                    <br />
                    <p>OR</p>
                    <br />
                    <Link to="/login">Login Page</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
