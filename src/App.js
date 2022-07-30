
import './App.css';
import React, { useEffect , useState} from "react"
import Home from "./components/Home"
import Weather from './components/Weather';
import Forecast from './components/Forecast'

function App() {
  const [city, setCity] = useState("Kisumu")
  const [data, setData] = useState({}) 

  useEffect(()=> {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2397f2d2d31453d8a2182757222907&q=${city}&aqi=yes`)
    .then((r) => r.json())
    .then(setData)
  }, [city])

  console.log(data)
  

  
  return (
    <div className="App">
       {/* <Home/> */}
       {/* {data.current ?<Weather data={data}/> : null} */}
       
        <Forecast/>

     
      
    
      </div>
   
  );
}

export default App;
