import React from 'react'
import '../components/forecastStyle.scss'

const Forecast = ({ daily: { time, temperature_2m_min, temperature_2m_max } }) => {
    return (
        <div>
            <div>
                {time.map((item, index) => (
                    <div key={{ index }} className='divForecast'>
                        <div className='forecastMinMax'>
                            <h4>{`${item.toLocaleString()}`}</h4>
                            <h4>Min: {`${temperature_2m_min[index]}`}°C</h4>
                            <h4>Max: {`${temperature_2m_max[index]}`}°C</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Forecast
