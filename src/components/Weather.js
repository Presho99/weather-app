import React, { useState, useEffect } from "react"
import "./Weather.css"

// const forecastStyle = {
//     filter: "blur(12)",
//   opacity: 0.7,
//   backgroundImage: `url("https://images.pexels.com/photos/11724626/pexels-photo-11724626.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"`,
// }

function Weather({ data }) {
    const [searchCity, setSearchCity] = useState("")
    const [autoCity, setAutoCity] = useState([])
    const date = Date(data.current.last_updated_epoch).slice(0, 21)
    let background = "sunny.webp"
    const text = data.current.condition.text.toLowerCase()
    background = text.includes("rain") || text.includes("drizzle") || text.includes("storm") || text.includes("shower")
        ? "rainy.jpeg" :
        text.includes("fog") || text.includes("mist") ? "fog.webp" :
        text.includes("cloud") || text.includes("overcast") ? "cloudy.webp" :
            "snow.jpeg"

    function handleSearch(e) {
        setSearchCity(e.target.value)
    }

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/search.json?key=f2397f2d2d31453d8a2182757222907&q=${searchCity}`)
            .then((r) => r.json())
            .then(setAutoCity)
    }, [searchCity])

    return (
        <div className="forecast" style={{ backgroundImage: `url(weather-img/${background})` }} >
            <div className="forecast-blur">
                <div className="forecast-container">
                    <div className="image">
                        <img src={"weather-img/" + background} />
                    </div>
                    <div className="weather-content">
                        <div className="degrees">
                            <h1>{data.current.temp_c}&deg;</h1>
                        </div>

                        <div className="city-date">
                            <h2>{data.location.name}</h2>
                            <p>{date}</p>
                        </div>

                        <div className="icon">
                            <img src={"svg/wi-" + data.current.condition.code + "-" + data.current.is_day + ".svg"} />

                        </div>

                    </div>
                    <aside>
                        <form action="" autoComplete="off">
                            <input id="input" type="text" value={searchCity} onChange={handleSearch} placeholder="Enter city" />
                        </form>

                        <div className="weather-details">

                            <button className="details">
                                <p>Description</p>
                                <p>{data.current.condition.text}</p>
                            </button>
                            <button className="details">
                                <p>Wind Speed</p>
                                <p>{data.current.wind_kph}km/hr</p>
                            </button>
                            <button className="details">
                                <p>Humidity</p>
                                <p>{data.current.humidity}%</p>
                            </button>
                            <button className="details">
                                <p>Visibility</p>
                                <p>{data.current.vis_km}km</p>
                            </button>
                            <button className="details">
                                <p>Precipitation</p>
                                <p>{ data.current.precip_mm}mm</p>
                            </button>
                            <button className="details">
                                <p>Wind Direction</p>
                                <p>{data.current.wind_dir}</p>
                            </button>
                        </div>
                    </aside>

                </div>
            </div>





        </div>
    )

}

export default Weather