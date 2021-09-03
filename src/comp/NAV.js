import React,{ Component} from 'react';
import './web.css'

class NAV extends Component {
   render(){
    return (
        <div> <div className="container"> <div className="row">
            <nav className="navbar navbar-expand-lg  bg-light">
                <a className="navbar-brand" ><img src="images\logo.webp"     /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item active">
                            <a className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">event</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link">about</a>

                        </li>   <li className="nav-item">
                            <a className="nav-link">contact</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link "  tabIndex="-1" aria-disabled="true">blog</a>
                        </li>
                    </ul>
                </div>                  <button className="btn">078xxxxxxxx </button>

    </nav> 
</div> </div>
</div>        
    )
}}

export default NAV;