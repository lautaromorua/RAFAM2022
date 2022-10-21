const APIurl = 'https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America/Argentina/Buenos_Aires'

const getWeatherData = async () => {
    const res = await fetch(APIurl)
    return await res.json()
}

const formatCurrentWeather = (data) => {
    const {
        current_weather,
        timezone
    } = data

    return { current_weather, timezone }
}

const formatForecastWeather = (data) => {
    let { daily, hourly } = data

    daily.time.slice(0, 4).map(el => {
        return {
            time: el.time,
            temperatureMin: el.temperature_2m_min,
            temperatureMax: el.temperature_2m_max
        }
    })


    hourly.temperature_2m.slice(0, 23).map(el => {
        return {
            temp: el.temperature_2m,
        }
    })

    return { daily, hourly }
}

const getFormatedWeather = async () => {
    const currentWeather = await getWeatherData().then(formatCurrentWeather)

    const forecastWeather = await getWeatherData().then(formatForecastWeather)

    return { ...currentWeather, ...forecastWeather };
}

export default getFormatedWeather;
