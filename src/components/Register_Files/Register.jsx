import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
    <div className="clg-name-h1">
        <div className="register-card-page">
            <div className="register-card">
                <h2 className="register-head">Register</h2>
                <input type="text" placeholder="First Name" className="fn" required />
                <input type="text" placeholder="Last Name" className="ln" required /><br /><br />
                <input type="tel" placeholder="Phone Number" className="pn" required /><br /><br />
                <input type="date" placeholder="Passed-out Year" className="py" required /><br /><br />
                <input type="text" placeholder="USN" className="usn" required /><br /><br />
                <input type="email" placeholder="Email" className="email" required /><br /><br />
                <button className="register-button" type="submit" >Register</button>
                <p>Already Member?</p>
                <Link to={"/login"}><button className="login-button" >Login</button></Link>
            </div>
        </div>
    </div>
    
    )
}

export default Register;
