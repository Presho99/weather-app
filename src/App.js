
import './App.css';
import React, { useEffect , useState} from "react"
import Home from "./components/Home"
import Weather from './components/Weather';
import Forecast from './components/Forecast'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [city, setCity] = useState("Nairobi")
  const [data, setData] = useState({})  

  useEffect(()=> {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b4bb0f58f9a64179ac1103527221807&q=${city}&aqi=yes`)
    .then((r) => r.json())
    .then(setData)
  }, [city])

  console.log(data)

  function handleOnAutoClick(place){
    setCity(place)

  }
  
  return (
  
       <div className="App">
         <BrowserRouter>
                       
         <Switch>
             <Route exact path={"/"}>

               <Home/>
             </Route>
             <Route exact path={"/Weather"}>
               <div style={{
                 position: "relative",
                 justifyContent: "center"}}>
                 <Navbar onAutoClick={handleOnAutoClick}/>
                 {data.current ?<Weather data={data}/> : null}
               </div>
               
             </Route>
             <Route exact path={"/Forecast"}>
             <div >
                 <Navbar onAutoClick={handleOnAutoClick}/>
                 {data.forecast ?<Forecast data={data}/> : null}
               </div>
             </Route>
             <Route exact path={"/Clock"}>
             <div >
                 <Navbar onAutoClick={handleOnAutoClick}/>
                {data.forecast ? <Clock data={data}/> : null}
               </div>
             </Route>

           </Switch>
         </BrowserRouter>
      </div>
  );
}

export default App;
