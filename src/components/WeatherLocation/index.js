import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transfromWeather';
import './style.css';

const location = "Vilanova i la Geltrú"
const api_key = "d3e8761cf34bf032e2cd13962f85066d";

const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Vilanova!',
            data: null
        };
        console.log("constructor")
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            console.log(data);
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
            console.log(weather_data);
        });
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }
    
    render = () => {
        console.log("render")
        const { city, data } = this.state;
        return(
            <div className='weatherLocationCont'>
                <Location city={ city }/>
                {data ? <WeatherData data={ data } /> : 'Cargando....'}
            </div>
        );
    }
}

export default WeatherLocation;