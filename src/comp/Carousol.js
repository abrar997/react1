import React, { Component } from 'react'
import './web.css'

class Carousol extends Component {
    render() {
        return (
            <div>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
  <img src="images/img.jpg" className="d-block w-100" />     </div>
    <div claclassNamess="carousel-item">
                            <img src="C:\Users\Bilal\Desktop\first\public\images\giffff.gif" className="d-block w-100" />     </div>
    <div className="carousel-item">
  <img src="images/giffff.gif" className="d-block w-100" />     </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span clclassNameass="sr-only">Next</span>
  </a>
</div>
</div>
        )
    }
}


export default Carousol;


