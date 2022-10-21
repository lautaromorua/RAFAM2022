import React, { useState, useEffect } from 'react'
import ShowWeather from './ShowWeather'
import getFormatedWeather from 'hooks/weatherService'


const WeatherComponent = () => {

    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        const fetchWeather = async () => {
            await getFormatedWeather().then(data => {
                setLoading(false)
                setWeather(data)
                console.log(data)
            }).catch(error => {
                setWeather(null)
                setError(error)
            })
        }
        fetchWeather()
    }, [])

    return (

        <div>
            {loading && (
                <div>
                    <p>Recuperando datos..</p>
                </div>
            )}
            {error && (
                <div>
                    <p>No se han podido recuperar los datos</p>
                </div>
            )}
            {weather && (
                <div>
                    <ShowWeather weather={weather} />
                </div>
            )}
        </div>
    )
}

export default WeatherComponent
