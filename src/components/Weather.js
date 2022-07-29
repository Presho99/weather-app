import React from "react"
import "./Weather.css"

// const forecastStyle = {
//     filter: "blur(12)",
//   opacity: 0.7,
//   backgroundImage: `url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"`,
// }

function Weather(){
    return(
        <div className="forecast" style={{backgroundImage:`url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"`}} >
            <div className="forecast-blur">
            <div className="forecast-container">
                  <div className="image">
                      <img src="https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"/>
                  </div>
                  <div className="weather-content">
                      <div className="degrees">
                          <h1>16°</h1>
                          </div>

                          <div className="city-date">
                              <h2>London</h2>
                              <p>16:09 Monday 9/9/19</p>
                          </div>

                          <div className="icon">
                              <img src="svg/wi-solar-eclipse.svg"/>
                              
                          </div>

                  </div>
              <aside>
                <form action="" autoComplete="on">
                    <input id ="input" type="text" placeholder="Enter city"/> 
                </form>
                <div className="cities">
                    <button className="cities-button">Manchester</button>
                    <button className="cities-button">New York</button>
                    <button className="cities-button last">Carlifonia</button>
                </div>
                <div className="weather-details">
                    <h3>Weather Details</h3>
                    <button className="details">
                        <p>Humidity</p>
                        <p>88mmHg</p>
                    </button>
                    <button className="details">
                        <p>Air Quality</p>
                        <p>82%</p>
                    </button>
                    <button className="details">
                        <p>Wind</p>
                        <p>76</p>
                    </button>
                </div>
            </aside>

              </div>
            </div>
              
              

        

        </div>
    )

}

export default Weather