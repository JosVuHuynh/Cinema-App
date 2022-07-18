import "./register.scss"
import { Link } from "react-router-dom"
export default function Register() {
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
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form className="input">
                <input type="email" placeholder="email address" />
                <input type="password" placeholder="password" />
                <button className="registerButton">
                Start
                </button>
            </form>
        </div>
        
    </div>
  )
}
