import React, {useState} from "react"
import "./Forecast.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faThermometer, faWind, faEye, faStar } from "@fortawesome/free-solid-svg-icons"

function Forecast({ data }) {
    
    const forecast = data.forecast.forecastday[0].hour
    let hour = parseInt(data.current.last_updated.slice(data.current.last_updated.length - 5).slice(0,2))
    hour = hour < 20 ? hour : 20

    const [isActive, setIsActive] = useState(faThermometer)
    const [activeIcons, setActiveIcon] = useState([faThermometer, faDroplet, faEye, faWind])
    
    return (
        <div className="prediction" style={{ backgroundImage: `url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"` }}>
            <div className="prediction-blur">

                {/* prediction main */}
                <div className="prediction-main">
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />

                    </div>

                    <h2>{data.location.name}</h2>
                    <h1>{isActive === faDroplet ? data.current.humidity + "%":
                              isActive === faThermometer ? data.current.temp_c  + "°":
                              isActive === faWind ? data.current.wind_kph + "kph": 
                              data.current.vis_km + "km"}</h1>
                    <div className="icon">
                        <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} 
                        style={{filter: `${data.current.is_day ? "invert(92%) sepia(41%) saturate(1655%) hue-rotate(333deg) brightness(100%) contrast(99%)": " invert(44%) sepia(40%) saturate(1429%) hue-rotate(184deg) brightness(88%) contrast(88%)"}`}}/>
                    </div>

                    <div className="main-details">
                        {activeIcons.filter(icon => icon !== isActive ).map((icon, index) => {
                            
                            return(
                                <div style={{display: "flex", }}><div className="">
                                <p>{icon === faDroplet ? "Humidity" :
                                icon === faThermometer ? "Temperature" :
                                icon === faWind ? "Wind Speed": 
                                "Visibility" }</p>
                                <h3>{icon === faDroplet ? data.current.humidity + "%":
                                icon === faThermometer ? data.current.temp_c  + "°":
                                icon === faWind ? data.current.wind_kph + "km/hr": 
                                data.current.vis_km + "km"}</h3>
                                
                             
                            </div> {index < 2 ? <div className="first-line"></div>: null}</div>)
                              
                        })}
                      

                        {/* <div className="humidity">
                            <p>Humidity</p>
                            <h3>{data.current.humidity} %</h3>
                        </div>
                        <div className="first-line"></div>
                        <div className="air">
                            <p>Wind Speed</p>
                            <h3>{data.current.wind_kph} km/hr</h3>
                        </div>
                        <div className="second-line"></div>
                        <div className="wind">
                            <p>Visibility</p>
                            <h3>{data.current.vis_km} km</h3>
                        </div> */}
                    </div>
                    <div className="main-navbar">
                        {activeIcons.map((icon)=>  {
                            function handleActiveClick(){
                                setIsActive(icon)
                            }
                            return(
                             <FontAwesomeIcon icon={icon} className={icon === isActive ? 'navbar-icon active' : 'navbar-icon'} onClick={handleActiveClick} />
                            )

                        }
                           
                        )}
                        
                        {/* <FontAwesomeIcon icon={faDroplet} className={isActive ? 'navbar-icon active' : 'navbar-icon'} onClick={handleActiveClick} />
                        <FontAwesomeIcon icon={faWind} className={isActive ? 'navbar-icon active' : 'navbar-icon'} onClick={handleActiveClick} />
                        <FontAwesomeIcon icon={faEye} className={isActive ? 'navbar-icon active' : 'navbar-icon'} onClick={handleActiveClick} /> */}
                    </div>
                </div>
                {/* prediction side */}
                <div className="prediction-side">
                    {forecast.slice(hour, hour+4).map((box) => {
                        return(
                            <div className="prediction-side-box one">
                            <h2>{box.time.slice(-5)}</h2>
                            <p>{Date(box.time_epoch).slice(0,10)}</p>
                            <div className="icon">
                                <img src={"svg/wi-" + box.condition.code + "-" + box.is_day + ".svg"} 
                                style={{filter: `${box.is_day ? "invert(92%) sepia(41%) saturate(1655%) hue-rotate(333deg) brightness(100%) contrast(99%)": " invert(44%) sepia(40%) saturate(1429%) hue-rotate(184deg) brightness(88%) contrast(88%)"}`}}/>
                            </div>
                            <div className="shadow"></div>
                            <div className="prediction-side-details">
                                <p>{box.temp_c}° C</p>
                                <p>{box.condition.text}</p>
                            </div>
                        </div>

                        )
                    })}
                   
                    {/* <div className="prediction-side-box two">
                        <h2>Monday</h2>
                        <p>24th July</p>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                        </div>
                        <div className="shadow"></div>
                        <div className="prediction-side-details">
                            <p>28°C</p>
                            <p>Sunny</p>
                        </div>
                    </div>
                    <div className="prediction-side-box three">
                        <h2>Monday</h2>
                        <p>24th July</p>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                        </div>
                        <div className="shadow"></div>
                        <div className="prediction-side-details">
                            <p>28°C</p>
                            <p>Sunny</p>
                        </div>
                    </div>
                    <div className="prediction-side-box four">
                        <h2>Monday</h2>
                        <p>24th July</p>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                        </div>
                        <div className="shadow"></div>
                        <div className="prediction-side-details">
                            <p>28°C</p>
                            <p>Sunny</p>
                        </div>
                    </div> */}
                </div>

                <div className="prediction-side-bottom">
                    <div className="side-bottom-city one">


                        <h2>Bei jing</h2>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} 
                            style={{filter: `${data.current.is_day ? "invert(92%) sepia(41%) saturate(1655%) hue-rotate(333deg) brightness(100%) contrast(99%)": " invert(44%) sepia(40%) saturate(1429%) hue-rotate(184deg) brightness(88%) contrast(88%)"}`}}/>
                        </div>
                        <h3>28°C</h3>


                    </div>
                    <div className="side-bottom-city two">


                        <h2>Bei jing</h2>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                        </div>
                        <h3>28°C</h3>


                    </div>
                    <div className="side-bottom-city three">


                        <h2>Bei jing</h2>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                        </div>
                        <h3>28°C</h3>


                    </div>
                </div>

            </div>

        </div>
    )

}
export default Forecast