import React from "react"
import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"


function Navbar(){
    return(
        <div className="navbar">
            <form>
                <input className="navbar-input" type="text" placeholder="Enter city"/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </form>

        </div>
    )
}

export default Navbar