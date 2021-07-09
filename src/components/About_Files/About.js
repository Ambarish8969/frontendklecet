import React from 'react';
import './About.ss';


const About = () => {
    return (
        <div>
            <h1>Aboutus</h1><br></br>
            
            
            
            <p className="text">The K.L.E. Society’s K.L.E. College of Engineering and Technology has been established in the year 2008 with the sole objective of imparting quality technical education for rural youth. The College is located in the Taluka head-quarters of Chikodi of Belgaum District, about 70 km from Belgaum. The campus has a sprawling area of 16 acres at the foot of hillocks on the outskirts of the city.

                The city of Chikodi has a strong educational base and enjoys salubrious climate throughout the year. The Institute is a self-financed non-minority college recognized by AICTE, New Delhi and Government of Karnataka.

                It is affiliated to Visvesvaraya Technological University, Belagavi, the technical state University of Karnataka. The institute has State-of-the-Art infrastructure and most modern facilities.</p>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="./images/ec.jpg" alt="Jane" />
                        <div class="container">
                            <h2>KLECET</h2>
                            <h4 class="title">Eelectronic &amp;communication</h4>
                            <h5>Some text that describes me lorem ih5sum ih5sum lorem.</h5>
                            <h5>example@example.com</h5>
                            <div><button class="button">more info</button></div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="./images/cs.jpg" alt="Mike" />
                        <div class="container">
                            <h2>KLECET</h2>
                            <h4 class="title">Computer Science</h4>
                            <h5>Some text that describes me lorem ipsum ipsum lorem.</h5>
                            <h5>example@example.com</h5>
                            <div><button class="button">more info</button></div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="./images/me.jpg" alt="John" />
                        <div class="container">
                            <h2>KLECET</h2>
                            <h4 class="title">Mechanical Engineering</h4>
                            <h5>Some text that describes me lorem ipsum ipsum lorem.</h5>
                            <h5>example@example.com</h5>
                            <div><button class="button">more info</button></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src="./images/ce.jpg" alt="Jane" />
                            <div class="container">
                                <h2>KLECET</h2>
                                <h4 class="title">Civil Engineering</h4>
                                <h5>Some text that describes me lorem ih5sum ih5sum lorem.</h5>
                                <h5>example@example.com</h5>
                                <div><button class="button">more info</button></div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <img src="./images/of.jpg" alt="Jane" />
                            <div class="container">
                                <h2>KLECET</h2>
                                <h4 class="title">Administrative office</h4>
                                <h5>Some text that describes me lorem ih5sum ih5sum lorem.</h5>
                                <h5>example@example.com</h5>
                                <div><button class="button">more info</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src="./images/lib.jpg" alt="Jane" />
                            <div class="container">
                                <h2>KLECET</h2>
                                <h4 class="title">Jnanasangama library</h4>
                                <h5>Some text that describes me lorem ih5sum ih5sum lorem.</h5>
                                <h5>example@example.com</h5>
                                <div><button class="button">more info</button></div>
                            </div>
                        </div>
                    </div>
                </div>
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




    )
}

export default About;
