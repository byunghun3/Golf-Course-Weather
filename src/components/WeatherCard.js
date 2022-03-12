import React, { Component } from 'react';
import Icon from './Icon';
import Frost from './Frost';
import Raindrop from '../assets/icons/raindrop.png';
import '../styles/scss/WeatherCard.scss';

class WeatherCard extends Component {
    render() {
        return (
            <div className="WeatherCard">
                <div className="WeatherCard-day">
                    {this.props.day}
                </div>
                <div>{this.props.date}</div>
                <div className="WeatherCard-icon">
                    <Icon icon={this.props.icon} />
                </div>
                <div className="WeatherCard-temp">
                    <span>{this.props.maxTemp}°</span>
                    <span>{this.props.minTemp}°</span>
                </div>
                <div className="WeatherCard-raindrop">
                    <img className="icon" src={Raindrop} alt="Rain" />
                    <span className="pop">{this.props.rain}%</span>
                </div>
                <div className="WeatherCard-frost">
                    <Frost icon={this.props.icon} minTemp={this.props.minTemp} />
                </div>
            </div>
        )
    }
}

export default WeatherCard;
