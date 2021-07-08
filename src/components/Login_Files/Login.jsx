import React from 'react';
import "./Login.css";

function Login() {
    
    return (
        <>
            <div id="login-page">
                <h1 className="clg-name-login">KLE COLLEGE OF ENGINEERING AND TECHNOLOGY, CHIKODI</h1>
                <div className="login-card-middle">
                    <div className="login-card">
                        <form action="">
                            <h3>LOGIN</h3>
                            <input type="email" placeholder="Email" required className="mailid" /> <br /><br />
                            <input type="text" placeholder="USN" className="usnid" required /><br /><br />
                            <input type="password" placeholder="Password" required className="passwordid" /> <br /> <br />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            <h1>hii</h1>
            <h2>hii bro</h2>
            <h1>Successfully done</h1>
        </>
    );
}

export default Login;