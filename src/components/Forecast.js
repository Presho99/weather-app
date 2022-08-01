import React from "react"
import "./Forecast.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faThermometer, faWind, faEye, faStar } from "@fortawesome/free-solid-svg-icons"

function Forecast({ data }) {
    return (
        <div className="prediction" style={{ backgroundImage: `url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"` }}>
            <div className="prediction-blur">

                {/* prediction main */}
                <div className="prediction-main">
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />

                    </div>

                    <h2>{data.location.name}</h2>
                    <h1>{data.current.temp_c}&deg;</h1>
                    <div className="icon">
                        <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
                    </div>

                    <div className="main-details">
                        <div className="temperature">
                            <p>Temperature</p>
                            <h3>{data.current.temp_c}</h3>
                        </div>

                        <div className="humidity">
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
                        </div>
                    </div>
                    <div className="main-navbar">
                        <FontAwesomeIcon icon={faThermometer} className="navbar-icon"/>
                        <FontAwesomeIcon icon={faDroplet} className="navbar-icon"/>
                        <FontAwesomeIcon icon={faWind} className="navbar-icon"/>
                        <FontAwesomeIcon icon={faEye} className="navbar-icon"/>
                    </div>
                </div>
                {/* prediction side */}
                <div className="prediction-side">
                    <div className="prediction-side-box one">
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
                    <div className="prediction-side-box two">
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
                    </div>
                </div>

                <div className="prediction-side-bottom">
                    <div className="side-bottom-city one">


                        <h2>Bei jing</h2>
                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />
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