import convert from 'convert-units';
import { DAYSUNNY } from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWeatherState = weather => {
    return DAYSUNNY;
}

const getWind = windkh =>{
    return convert(windkh).from('m/s').to('km/h');
}

const transformWeather = weather_data => {
    const { humidity, temp} = weather_data.main;
    const speed = getWind(weather_data.wind);
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp);

    const data = {
        humidity: humidity,
        temperature: temperature,
        weatherState: weatherState,
        wind: `${speed} m/s`,
    }
    
    return data;
}

export default transformWeather;