import * as React from 'react';
import './Loginpage.css';
// import axios from 'axios';
// import { TextField } from "@mui/material";
import profile from"../src/Images/profile.png";
import email from "../src/Images/email.png";
import password from "../src/Images/password.png";

function Loginpage() {
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="image">
                        <div className="container-image"> 
                           <img src={profile} alt="profile" className="profile"/>

                        </div>

                    </div>
                    
                    <div>
                        <h1>Login</h1>
                        <div>
                            <img src={email} alt="email" className="email"/>
                            <input type="text" placeholder="Email" className="name"/>
                        </div>
                        <div className="second-input">
                            <img src={password} alt="password" className="email"/>
                            <input type="password" placeholder="password" className="name"/>
                        </div>
                        <div className="Login-button">
                        <button>Login </button>
                        </div>
            
                            <p className="link">
                                <a href="#">Forgot password ?</a> or<a href="#">Sign Up</a>
                            </p>
                        
                    </div>

                </div>
            </div>

        </div>
        
    )
}

export default Loginpage;