import React, { Component } from 'react';
import './web.css'

class About extends Component {
    render() {
        return (
            <section className="About">
                <div className="container"><div className="row">
                    <div className="images col-lg-7">
                        <img src="images\backg.png" />
                    </div>

                    <div className="textss col-lg-5">
                        <h5>About Us
                        </h5>
                        <h1>
                            Get ready for real time adventure</h1>
                        <p>
                            Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                        </p>

                        <div className="btn">book your destination</div>
                    </div>


                </div></div>
            </section>


        )
    }

}


export default About;