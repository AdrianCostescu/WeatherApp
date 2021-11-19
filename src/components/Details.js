import React from 'react'
import Feels from './Feels'
import AirQuality from './AirQuality'
import { useState } from 'react'
import './Details.css'

const Details = ({data, temperatureC, temperatureK, windM, windK}) => {

const [info, setInfo] = useState(false);
  const [infoFeels, setInfoFeels] = useState(false);

    const infoHendler = () => {
        if(info === false){
          setInfo(true)
        }else{
          setInfo(false)
        }
      }
    
      const infoHendlerFeels = () => {
        if(infoFeels === false){
          setInfoFeels(true)
        }else{
          setInfoFeels(false)
        }
      }

    return (
        <div>
            <div className='fav-pp'>
              <p>Weather details</p>
            </div>

          <div className='fav' >

            <div className='details'>
              <p className='details-p'>Condition</p>
              {data && <p>{data.current.condition.text}</p>}
            </div>

            <div className='details'>
              <p className='details-p'>Humidity</p>
              {data && <p>{data.current.humidity}%</p>}
            </div>
            <div className='details'>
              <p className='details-p'>Wind</p>
              {data && 
              <div>
                {windM && <p>{data.current.wind_mph} mph</p>}
                {windK && <p>{data.current.wind_kph} km/h</p>}
              </div>
              }
            </div>
            <div className='details' onMouseEnter={infoHendlerFeels} onMouseLeave={infoHendlerFeels}>
              <p className='details-p'>Feels like</p>
              {data &&
                <div>
                  {temperatureC && <p>{data.current.feelslike_c}°C</p>}
                  {temperatureK && <p>{data.current.feelslike_f}°F</p>}
                </div>
               }
            </div>
            <div className='details' onMouseEnter={infoHendler} onMouseLeave={infoHendler}>
              <p className='details-p'>Air qualiti</p>
              {data && <p>{data.current.air_quality.no2.toFixed(2)} no2</p>}
            </div>
          </div>

          {info && <div className='fav' >
            <AirQuality no2 = {data.current.air_quality.no2} />
          </div>}

          {infoFeels && <div className='fav' >
            <Feels temp_c = {data.current.temp_c}/>
          </div>}
        </div>
    )
}

export default Details
