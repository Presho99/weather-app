import React from "react"
import "./Home.css"
function Home() {

    return(
        <div className="home">
            <div className="left">
            <div className="circle fifth">
                
                <div className="inner-circle one">
                <img src="svg/wi-solar-eclipse.svg"/>
                </div>
            </div>
            <button className="one">Weather</button >
            <div className="circle sixth">
                
                <div className="inner-circle two">
                <img src="svg/wi-solar-eclipse.svg"/>
                </div>
            </div>
            <button className="two">Weather</button>
            </div>

            <div className="right">
            <button className="three">Weather</button>
            <div className="circle seventh">
                
                <div className="inner-circle three">
                <img src="svg/wi-solar-eclipse.svg"/>
                </div>
            </div>
            <button className="four">Forecast</button>
            <div className="circle eighth">
               
                <div className="inner-circle four">
                <img src="svg/wi-solar-eclipse.svg"/>
                </div>
            </div>
            
            </div>
            
           
          
        </div>
    )

}

export default Home