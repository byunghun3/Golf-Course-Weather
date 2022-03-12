import React, { Component } from 'react';
import Sunny from '../assets/icons/sunny.png';
import Cloudy from '../assets/icons/cloudy.png';
import PartlyCloudy from '../assets/icons/partly-cloudy.png';
import Thunderstorm from '../assets/icons/thunderstorm.png';
import Rainy from '../assets/icons/rainy.png';
import Snowy from '../assets/icons/snowy.png';
import '../styles/scss/Icon.scss';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.renderIcons = this.renderIcons.bind(this);
    }

    renderIcons(icon) {
        switch (icon) {
            case 200:
            case 201:
            case 202:
            case 230:
            case 231:
            case 232:
            case 233:
                return <img className="Icon" src={Thunderstorm} alt="Thunderstorm" />;
            case 300:
            case 301:
            case 302:
            case 500:
            case 501:
            case 502:
            case 511:
            case 520:
            case 521:
            case 522:
                return <img className="Icon" src={Rainy} alt="Rain" />;
            case 600:
            case 601:
            case 602:
            case 610:
            case 621:
            case 622:
            case 623:
                return <img className="Icon" src={Snowy} alt="Snow" />;
            case 800:
                return <img className="Icon" src={Sunny} alt="Sunny" />;
            case 801:
            case 802:
                return <img className="Icon" src={PartlyCloudy} alt="Partly Cloudy" />;
            case 803:
            case 804:
                return <img className="Icon" src={Cloudy} alt="Cloudy" />;
            default:
                return <img className="Icon" src={Sunny} alt="Sunny" />;
        };
    }

    render() {
        return (
            <div>
                {this.renderIcons(this.props.icon)}
            </div>
        )
    }
}

export default Icon;