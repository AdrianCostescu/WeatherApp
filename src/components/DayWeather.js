import React from 'react'
import './DayWeather.css'

const DayWeather = ({data, temperatureC, temperatureK}) => {

    const day = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day_w = () => {
        if(data){
          var date = new Date(data.forecast.forecastday[0].date);
          var weekday = date.getDay();
          return (
            day[weekday]
          )
        }
      }

      const month = () => {
        if(data){
          var date = new Date(data.forecast.forecastday[0].date);
          var weekday = date.getMonth();
          return (
            months[weekday]
          )
        }
      }
      const day_m = () => {
        if(data){
          var date = new Date(data.forecast.forecastday[0].date);
          var weekday = date.getDate();
          return (
            weekday
          )
        }
      }

    return (
        <div className='weather-box'>
            {data && 
            <div className="box">
              <p className="box-date">{data.location.name}</p>
              <p className="box-2">{day_w()}, {day_m()} {month()} </p>
              {temperatureC && <p className='temp-principal'>{data.current.temp_c}°</p>}
              {temperatureK && <p className='temp-principal'>{data.current.temp_f}°</p>}
            </div>
            }
        </div>
    )
}

export default DayWeather
