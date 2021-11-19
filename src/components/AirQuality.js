import React from 'react'

const AirQuality = ({no2}) => {

    function renderComponent(){
        if (no2 <= 50){
            return (<p>No health impacts are expected when air quality is in this range</p>)
        } else if (no2 > 50 && no2 <= 100){
            return (<p>Individuals who are unusually sensitive to nitrogen dioxide should consider limiting prolonged outdoor exertion.</p>)
        } else if (no2 > 100 && no2 <= 150){
            return (
            <div>
                <p>The following groups should limit prolonged outdoor exertion:</p>
                <ul>
                    <li>People with lung disease, such as asthma </li>
                    <li>Children and older adults</li>
                </ul>
            </div>)
        } else if (no2 > 150 && no2 <= 200){
            return (
            <div>
                <p>The following groups should avoid prolonged outdoor exertion: </p>
                <ul>
                    <li>People with lung disease, such as asthma </li>
                    <li>Children and older adults</li>
                </ul>
                <p>Everyone else should limit prolonged outdoor exertion.</p>
            </div>)
        } else if (no2 > 200 && no2 <= 300){
            return (
            <div>
                <p>The following groups should avoid all outdoor exertion: </p>
                <ul>
                    <li>People with lung disease, such as asthma</li>
                    <li>Children and older adults</li>
                </ul>
                <p>Everyone else should limit outdoor exertion.</p>
            </div>)
        }
    }

    return (
        <div>
            {renderComponent()}
        </div>
    )
}

export default AirQuality
