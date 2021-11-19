import './App.css';
import { useState, useEffect } from 'react'
import DayWeather from './components/DayWeather';
import SearchBox from './components/SearchBox';
import Favorite from './components/Favorite';
import Details from './components/Details';
import Setings from './components/Setings';
import small from '../src/img/hot-air-balloon-2131046_1280.png';


function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Suceava");
  const [search, setSearch] = useState(false);
  const [favorite, setFavorite] = useState('');
  const [click, setClick] = useState(false);
  const [temperatureC, setTemperatureC] = useState(true);
  const [temperatureK, setTemperatureK] = useState(false);
  const [windK, setWindK] = useState(true);
  const [windM, setWindM] = useState(false);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=fff7d45bd3bf4a2fbfd135016210811&q=' + city + '&days=10&aqi=yes&alerts=yes')
      .then(res => res.json())
      .then(res => {
        setData(res)
        console.log(res);
        setClick(false);
      });
  },[click === true])

    useEffect(() =>{
      fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(res => {
        setFavorite(res);
        console.log(res);
      });
    }, [])

  const month_w = () => {
    if(data){
      var date = new Date(data.forecast.forecastday[0].date);
      var month = date.getMonth();
      return (
        months[month]
      )
    }
  }

  return (
    <div className="App">
      <DayWeather data = {data} temperatureC = {temperatureC} temperatureK = {temperatureK}/>
      <img src={small} alt='small' />
        <div className='component'>
          <SearchBox city = {city} click = {click} setClick = {setClick} search = {search} setSearch = {setSearch} setCity = {setCity}/>
          <Favorite favorite = {favorite} city = {city} setCity = {setCity} setClick = {setClick}/>
          <Details data = {data} temperatureC = {temperatureC} temperatureK = {temperatureK} windM = {windM} windK = {windK}/>
          <Setings temperatureC = {temperatureC} setTemperatureC = {setTemperatureC} temperatureK = {temperatureK} setTemperatureK = {setTemperatureK} windK = {windK} setWindK = {setWindK} windM = {windM} setWindM = {setWindM} />
        </div>
    </div>
  );
}

export default App;
