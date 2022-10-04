import React, {useState, useEffect} from "react"
import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"


function Navbar({onAutoClick}){
    const [searchCity, setSearchCity] = useState("")
    const [autoCity, setAutoCity] = useState([])

    function handleSearch(e) {
        setSearchCity(e.target.value) 
    }
    console.log(autoCity)
    
    useEffect(() => {
        if(searchCity.length > 2) {
            fetch(`http://api.weatherapi.com/v1/search.json?key=b4bb0f58f9a64179ac1103527221807&q=${searchCity}`)
            .then((r) => r.json())
            .then(setAutoCity)
            .catch(console.log)
        }else{
            setAutoCity([])
        }
    }, [searchCity])

  

    return(
        <div className="navbar">
            <form>
                <input className="navbar-input" type="text" placeholder="Search city..." onChange={handleSearch} value={searchCity}/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </form>
            <div style={{position:"absolute", backgroundColor: "#111111", color: "#dedede", top: "50px", left: "24px", width:"305px", }}>
                {autoCity.map((city) => {
                    function handleOnAutoClick(){
                        onAutoClick(city.name)
                        setSearchCity("")
                        setAutoCity([])
                    }
                 return(
                     <div name={city.name} key={city.name} onClick={handleOnAutoClick} style={{display: "flex", justifyContent:"space-between", padding:"0px 10px", borderBottom: "1px solid #dedede", cursor:"pointer"}}>
                         
                         <p style={{margin: "7px "}}>{city.name}</p>
                         <em style={{margin: "5px "}}>{city.region}</em>
                     </div>
                 )
                })}
            </div>

        </div>
    )
}

export default Navbar