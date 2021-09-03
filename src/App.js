import React, { Component } from 'react'  //declare the main source ,Naver forget components  
import './App.css';    //declare the style file css

import NAV from "./comp/NAV"; //declare components
import Ask from './comp/Ask'
import CardCarsoul from './comp/CardCorsoul'
import About from './comp/About'
// import Carousol from './comp/Carousol';
import Footer from './comp/Footer'



class App extends Component {
  render() {
    return (
      <div>

        {/* 2_call component again */}
        <NAV />
        <Ask />
        <CardCarsoul />
        <About />
        <Footer />

      </div>



    )
  }

}
export default App;


// repalce class =className

// another way to write react code is : function 
// import React from 'react';

// function App(){
//   return(
//     <div></div>


//   )
// }

// export default App;