import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import './LoginStyle.css';
import Navbar from "./Navbar";
import { AuthContext } from "./AuthContext";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", { email, password })
        .then(res => {
          if (res.data === "exist") {
            setIsLoggedIn(true);
            history("/", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
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
      <div className="login-container">
        <div className="login">
          <h1>Login</h1>
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

export default Login;
