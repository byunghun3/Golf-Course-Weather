import React, { Component } from 'react';
import FrostIcon from '../assets/icons/frost.png';
import '../styles/scss/Frost.scss';

class Frost extends Component {
    constructor(props) {
        super(props);
        this.renderFrost = this.renderFrost.bind(this);
    }

    renderFrost(icon, minTemp) {
        if (icon === 800 && minTemp >= 40) {
            return 0;
        } else if (icon !== 800 && minTemp >= 40) {
            return 0;
        } else if (icon === 800 && minTemp < 40 && minTemp >= 32) {
            return 20;
        } else if (icon === 800 && minTemp < 32) {
            return 30;
        } else if (icon === 801 && minTemp < 40 && minTemp >= 32) {
            return 40;
        } else if (icon === 801 && minTemp < 32) {
            return 60;
        } else if (icon === 802 && minTemp < 40 && minTemp >= 32) {
            return 50;
        } else if (icon === 802 && minTemp < 32) {
            return 60;
        } else if (icon !== (800 || 801 || 802) && minTemp < 40 && minTemp >= 32) {
            return 50;
        } else if (icon !== (800 || 801 || 802) && minTemp < 32) {
            return 80;
        }
        else { return "Frost Delay"; }
    }

    render() {
        return (
            <div className="Frost">
                <img className="Frost-icon" src={FrostIcon} alt="Frost" />
                <span className="Frost-percent">{this.renderFrost(this.props.icon, this.props.minTemp)}%</span>
            </div>
        )
    }
}

export default Frost;
