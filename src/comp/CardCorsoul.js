import React, { Component } from "react"
import './web.css'
class CardCarsoul extends Component {
    render() {
        return (
            <section className="cardCarsoul">
                <div className="container"><div className="row">
                    <div className="texts"><h5>Check Our Best Promotional Tour</h5>
                        <h3>Upcoming Events</h3>
        </div>
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active ">
                    <div className="card  d-block " >
                        <img src="images\card.jpg" className="card-img-top"  />
                        <div className="card-body">
                            <p className="card-text"> Turkey <br /> <span>140$</span></p>
                        </div>
                    </div>
                    <div className="card  d-block " >
                        <img src="images\card1.jpg" className="card-img-top"  />
                        <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>140$</span></p>
                        </div>
                    </div>
                    <div className="card  d-block " >
                        <img src="images\cardss.jpg" className="card-img-top"  />
                        <div className="card-body">
                            <p className="card-text"> Turkey <br /> <span>140$</span></p>
                        </div>
                    </div>
                </div>

                            <div className="carousel-item ">
                                <div className="card  d-block " >
                                    <img src="images\card.jpg" className="card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>140$</span></p>
                                    </div>
                                </div>

                                <div className="card  d-block " >
                                    <img src="images\card1.jpg" className="card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>140$</span></p>
                                    </div>
                                </div>

                                <div className="card  d-block" >
                                    <img src="images\cardss.jpg" className=" card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>40$_100$</span></p>
                                    </div>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="card  d-block " >
                                    <img src="images\card.jpg" className="card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>30$_90$</span></p>
                                    </div>
                                </div>

                                <div className="card  d-block" >
                                    <img src="images\card1.jpg" className="card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>30$_90$</span></p>
                                    </div>
                                </div>

                                <div className="card d-block " >
                                    <img src="images\cardss.jpg" className="card-img-top"  />
                                    <div className="card-body">
                                        <p className="card-text"> Turkey <br /> <span>30$_90$</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon " aria-hidden=" true "></span>
                            {/* <span className="sr-only">Previous</span> */}
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon " aria-hidden=" true"></span>
                            {/* <span className="sr-only">Next</span> */}
                        </a></div></div>
                </div></section>
        )
    }

}


export default CardCarsoul;