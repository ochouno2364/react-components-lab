import './WeatherForecast.css'


const WeatherForecasts = ({weatherForecast}) => {
    return (
        <>

          <div className='weather'>
            <h2>Day of the Week <br></br>{weatherForecast.day}</h2>
            <img src={weatherForecast.img} alt={weatherForecast.imgAlt}/>
            <p><span>conditins: {weatherForecast.conditions} <br></br></span>current weather conditions</p>
            <p><span>time: {weatherForecast.time} <br></br></span>time of day</p>
          </div>

        </>
    )
}

export default WeatherForecasts;