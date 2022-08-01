
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
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2397f2d2d31453d8a2182757222907&q=${city}&aqi=yes`)
    .then((r) => r.json())
    .then(setData)
  }, [city])

  console.log(data)
  

  
  return (
  
       <div className="App">
         <BrowserRouter>
            {/* <Navbar/> */}
            
         <Switch>
             <Route exact path={"/"}>

               <Home/>
             </Route>
             <Route exact path={"/Weather"}>
               <div style={{
                 position: "relative",
                 justifyContent: "center"}}>
                 <Navbar />
                 {data.current ?<Weather data={data}/> : null}
               </div>
               
             </Route>
             <Route exact path={"/Forecast"}>
             <div >
                 <Navbar />
                 <Forecast/>
               </div>
             </Route>
             <Route exact path={"/Clock"}>
             <div >
                 <Navbar />
                <Clock/>
               </div>
             </Route>

           </Switch>
         </BrowserRouter>
           
       
      
    
      </div>

    
   
   
  );
}

export default App;
