import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
function Home() {

    return (
        <div className="home">
            <div className="left">
                <div className="circle fifth">

                    <div className="inner-circle one">
                        <img src="svg/wi-solar-eclipse.svg"/>
                    </div>
                </div>
                <button className="one">
                    <Link to="/Forecast"> FORECAST</Link>

                </button >
                <div className="circle sixth">

                    <div className="inner-circle two">

                        <img src="svg/wi-sunrise.svg"/>
                    </div>
                </div>

            </div>

            <div className="right">
                <button className="three">
                    <Link to="/Weather"> TODAY</Link>
                </button>
                <div className="circle seventh">
                    <div className="inner-circle three">
                        <img src="svg/wi-time-4.svg"/>
                    </div>
                </div>
                <button className="four">
                    <Link to="/Clock"> SUN/MOON</Link></button>
            </div>
        </div>
    )

}

export default Home