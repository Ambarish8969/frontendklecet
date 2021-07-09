import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="header">
                <ul className="header-ul">
                    <div className="active-link-home">
                        <li><Link to={"/"} className='activehome'>Home</Link></li>
                    </div>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/branches"}>Branches</Link></li>
                    
                    <Link to={"/login"}><button className="login_button" type="submit" href>Login</button></Link>
                    <Link to={"/register"}><button className="register_button" type="submit">Register</button></Link>
                </ul>
                <div className="clgname">
                    <h1 className="clg-name-home">Welcome to KLECET Chikodi.</h1>
                </div>
                <div className="clg-image-text">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Klecet.jpg" alt="college image" className="clg-image"></img>
                </div>
                <div className="clg-vision">
                    <p><h3>Vision  </h3><h4>"To be an Institute for transformation of young minds into globally competent engineering professionals with a social responsibility for a better tomorrow."</h4></p>
                </div>
                <div className="clg-mission"><p>
                    <h3>Mission  </h3><br></br>
                    <h4>
                        <ol>
                            <li>Adopt innovative teaching & learning practices which promote proactive leadership.</li>
                            <li>Excel in academic and research endeavors by incubating a sense of life-long learning.</li>
                            <li>Enable students to gain interdisciplinary knowledge and work independently as well as in terms to meet global challenges in the field of engineering.</li>
                            <li>Encourage mutually beneficial partnerships with Alumni, Industry and Institutes.</li>
                            <li>Equip students with employable and entrepreneurship skills along with a sense of social responsibility.</li>
                        </ol>
                    </h4>
                </p>
                </div>
                <div className="footer">
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
