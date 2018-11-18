import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {CLOUD, CLOUDY, RAIN, FOG, 
DAYSUNNY} from './../../../constants/weathers';
import './style.css'
const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case RAIN:
            return "rain";
        case FOG:
            return "fog";
        case DAYSUNNY:
            return "day-sunny";
        default:
            return "earthquake";
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />) 
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType'>Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};
export default WeatherTemperature;