import React from "react"
import "./Home.css"
function Home() {

    return (
        <div className="home">
            <div className="left">
                <div className="circle fifth">

                    <div className="inner-circle one">
                        <img src="svg/wi-solar-eclipse.svg" />
                    </div>
                </div>
                <button className="one">FORECAST</button >
                <div className="circle sixth">

                    <div className="inner-circle two">
                        <img src="svg/wi-solar-eclipse.svg" />
                    </div>
                </div>
               
            </div>

            <div className="right">
                <button className="three">TODAY</button>
                <div className="circle seventh">

                    <div className="inner-circle three">
                        <img src="svg/wi-solar-eclipse.svg" />
                    </div>
                </div>
                <button className="four">SUN/MOON</button>
                {/* <div className="circle eighth">

                    <div className="inner-circle four">
                        <img src="svg/wi-solar-eclipse.svg" />
                    </div>
                </div> */}

            </div>



        </div>
    )

}

export default Home