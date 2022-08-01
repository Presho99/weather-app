import React, { useState, useEffect } from "react"
import "./Clock.css"

function Clock({data}) {
    return (
        <div className="clock" style={{ backgroundImage: `url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"` }}>
            <div className="clock-blur">
                <div className="line"></div>
                <div className="clock-one">
                    <div className="top">
                        <img src="svg/wi-sunrise.svg" />
                        <p>Sunrise</p>
                        <h3>{data.forecast.forecastday[0].astro.sunrise.slice(0,5)}</h3>
                    </div>


                    <button>Horizon</button>
                    <div className="bottom">
                        <img src="svg/wi-sunset.svg" />
                        <p>Sunset</p>
                        <h3>{data.forecast.forecastday[0].astro.sunset.slice(0,5)}</h3>

                    </div>






                </div>
                <div className="clock-two">
                    <div className="top">
                        <img src="svg/wi-moonrise.svg" />
                        <p>Moonrise</p>
                        <h3>{data.forecast.forecastday[0].astro.moonrise.slice(0,5)}</h3>

                    </div>


                    <button>Horizon</button>
                    <div className="bottom">
                        <img src="svg/wi-moonset.svg" />
                        <p>Moonset</p>
                        <h3>{data.forecast.forecastday[0].astro.moonset.slice(0,5)}</h3>

                    </div>





                </div>

            </div>

        </div>
    )
}

export default Clock