import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import Edit from '../../assets/icons/edit.png';
import Delete from '../../assets/icons/close.svg';
import './Course.scss';

class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            courseName: this.props.courseName
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    showForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.edit(this.props.id, this.state.courseName);
        this.setState({
            isEditing: false
        });
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }
    
    render() {
        return (
            <div className="Course">
                <span className="Course-list">
                {this.state.isEditing ? 
                <form className="Course-name-form" onSubmit={this.handleEdit}>
                    <input className="Course-input-bar" name="courseName" value={this.state.courseName} placeholder="Course Name" onChange={this.handleChange} autoFocus /> 
                    <button className="Course-name-btn">
                        SAVE
                    </button>
                </form> 
                :
                <div className="Course-info">
                    <div className="Course-name">{this.props.courseName}<br/></div>
                    <div className="Course-loc">{this.props.city}, {this.props.state}<br/></div>
                    <div className="Course-btn">
                        <img className="Course-btn-edit" src={Edit} alt="Edit" onClick={this.showForm}/>
                        <img className="Course-btn-dlt" src={Delete} alt="Delete" onClick={this.handleRemove}/>
                    </div>
                </div> 
               }
                </span>
                <span className="Course-weather-row">
                    <WeatherCard day={this.props.dayZero} date={this.props.dateZero} icon={this.props.iconZero} maxTemp={this.props.maxTempZero} minTemp={this.props.minTempZero} rain={this.props.rainZero} frost={this.props.frostZero} />
                    <WeatherCard day={this.props.dayOne} date={this.props.dateOne} icon={this.props.iconOne} maxTemp={this.props.maxTempOne} minTemp={this.props.minTempOne} rain={this.props.rainOne} frost={this.props.frostOne} />
                    <WeatherCard day={this.props.dayTwo} date={this.props.dateTwo} icon={this.props.iconTwo} maxTemp={this.props.maxTempTwo} minTemp={this.props.minTempTwo} rain={this.props.rainTwo} frost={this.props.frostTwo} />
                    <WeatherCard day={this.props.dayThree} date={this.props.dateThree} icon={this.props.iconThree} maxTemp={this.props.maxTempThree} minTemp={this.props.minTempThree} rain={this.props.rainThree} frost={this.props.frostThree} />
                    <WeatherCard day={this.props.dayFour} date={this.props.dateFour} icon={this.props.iconFour} maxTemp={this.props.maxTempFour} minTemp={this.props.minTempFour} rain={this.props.rainFour} frost={this.props.frostFour} />
                    <WeatherCard day={this.props.dayFive} date={this.props.dateFive} icon={this.props.iconFive} maxTemp={this.props.maxTempFive} minTemp={this.props.minTempFive} rain={this.props.rainFive} frost={this.props.frostFive} />
                    <WeatherCard day={this.props.daySix} date={this.props.dateSix} icon={this.props.iconSix} maxTemp={this.props.maxTempSix} minTemp={this.props.minTempSix} rain={this.props.rainSix} frost={this.props.frostSix} />
                    <WeatherCard day={this.props.daySeven} date={this.props.dateSeven} icon={this.props.iconSeven} maxTemp={this.props.maxTempSeven} minTemp={this.props.minTempSeven} rain={this.props.rainSeven} frost={this.props.frostSeven} />
                </span>
            </div>
        )
    }
}

export default Course;