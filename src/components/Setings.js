import React from 'react'
import './Setings.css'
const Setings = ({temperatureC, setTemperatureC, temperatureK, setTemperatureK, windM, setWindM, windK, setWindK}) => {

    const clickTempCHandler = () => {
        setTemperatureC(true)
        setTemperatureK(false)
    }

    const clickTempKHandler = () => {
        setTemperatureK(true)
        setTemperatureC(false)
    }

    const clickWindKHandler = () => {
        setWindK(true)
        setWindM(false)
    }

    const clickWindMHandler = () => {
        setWindM(true)
        setWindK(false)
    }

    return (
    <div>
        <div className='fav-pp'>
            <p>Settings</p>
        </div>

        <div className='fav' >
            <div className='details'>
                <p className='details-p'>Temperature</p>
                <p onClick={clickTempCHandler}>°C</p>
                <p onClick={clickTempKHandler}>°F</p>
            </div>
            <div className='details'>
                <p className='details-p'>Speed unit</p>
                <p onClick={clickWindKHandler}>km/h</p>
                <p onClick={clickWindMHandler}>mph</p>
            </div>
        </div>
    </div>
    )
}

export default Setings
