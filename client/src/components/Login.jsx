import React from "react";
import { Link } from "react-router-dom";

function Login() {
    const cookieData=(name,value)=>{
        document.cookie=`${name}={${value}};path="/"`;
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="login " onSubmit={(e) =>e.preventDefault()}>
                
                <br/>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter your name..." onChange={(e)=>cookieData("name",e.target.value)} className="name"/>
                <label htmlFor="email"  >Email:</label>
                <input type="email" placeholder="Enter your email..." onChange={(e)=>cookieData("email",e.target.value)} className="email"/>
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Enter your password..." onChange={(e)=>cookieData("password",e.target.value)} className="password"/>
                < Link to="/"><button type="submit" className="loginbtn">Login</button></Link>
            </form>
        </div>
    );
}

export default Login