import "./register.scss"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export default function Register() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const navigate = useNavigate();

const handleRegister = async(e) => {
    e.preventDefault();
    try {
        await axios.post("auth/register", { email,username, password });
        navigate("/login");
    } catch (err) {
        console.log(err)
    }
}

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Sky_Cinema_-_Logo_2020.svg" 
                    alt=""
                />
                <div>
                <Link to="/login">
                    <button type="button" className="loginButton">
                        Sign In
                    </button>
                </Link>
                </div>
            </div>
        </div>       
        <div className="container">
        <form>
          <h1>Sign up</h1>
          <input 
            type="username" 
            placeholder="User name" 
            onChange={(e) => setUsername(e.target.value)}
          />
            <input 
            type="email" 
            placeholder="Email or phone number" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password"   
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className="registerButton" 
            onClick={handleRegister} 
          
          >Register </button>
           <Link to="/login">
            <span>
              <b>Login now.</b>
            </span>
           </Link>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
        
    </div>
  )
}
