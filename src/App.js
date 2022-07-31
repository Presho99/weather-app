
import './App.css';
import React, { useEffect , useState} from "react"
import Home from "./components/Home"
import Weather from './components/Weather';
import Forecast from './components/Forecast'
import Clock from './components/Clock'
import Navbar from './components/Navbar'

function App() {
  const [city, setCity] = useState("Nairobi")
  const [data, setData] = useState({}) 

  useEffect(()=> {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2397f2d2d31453d8a2182757222907&q=${city}&aqi=yes`)
    .then((r) => r.json())
    .then(setData)
  }, [city])

  console.log(data)
  

  
  return (
    <div className="App">
      <Navbar/>
       {/* <Home/> */}
       {/* {data.current ?<Weather data={data}/> : null} */}
       
        {/* <Forecast/> */}
        {/* <Clock/> */}

     
      
    
      </div>
   
  );
}

export default App;
