import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Course from './Course';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import GolfLogo from '../assets/icons/golf.png';
import GolfBall from '../assets/icons/golf-ball.png';
import '../styles/scss/CourseWeather.scss';

const API = {
    url: "https://api.weatherbit.io/v2.0/forecast/daily?",
    key: "77ea14a12fa9443bb471a358400bbfc3"
}

class CourseWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            stateCode: "",
            courses: JSON.parse(localStorage.getItem("courses") || "[]"),
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveCourseName = this.saveCourseName.bind(this);
        this.removeCourse = this.removeCourse.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getWeather();
        setTimeout(() => {
            this.setState({
                city: "",
                stateCode: "",
                isLoading: false
            });
        }, 500);
    }

    saveCourseName(id, updatedCourseName) {
        const updatedCourses = this.state.courses.map(el => el.id === id ? { ...el, courseName: updatedCourseName } : el);

        this.setState({
            courses: updatedCourses
        });

        localStorage.setItem("courses", JSON.stringify(updatedCourses));
    }

    removeCourse(id) {
        this.setState({
            courses: this.state.courses.filter(el => el.id !== id)
        });
        localStorage.setItem("courses", JSON.stringify(this.state.courses.filter(el => el.id !== id)));
    }

    getDay(datetime) {
        let date = new Date(datetime);
        return date.toLocaleDateString("en-US", { weekday: "short", timezone: "EST" });
    }

    getDate(datetime) {
        let date = new Date(datetime);
        return date.toLocaleDateString("en-US", { month: "numeric", day: "numeric", timezone: "EST" });
    }

    async getWeather() {
        try {
            const response = await Axios.get(`${API.url}city=${this.state.city},${this.state.stateCode}&units=I&days=8&key=${API.key}`)
            console.log(response.data);

            if (this.state.courses.some(el => (el.city === response.data.city_name && el.state === response.data.state_code))) {
                alert("This city has already been saved!");
                return null
            };

            let newCourses = [...this.state.courses];

            newCourses.push({
                id: uuidv4(),
                city: response.data.city_name,
                state: response.data.state_code,
                info: response.data.data
            });

            // setTimeout(() => {
            this.setState({
                courses: newCourses,
                isLoading: true
            });
            // }, 500);

            localStorage.setItem("courses", JSON.stringify(newCourses));

        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                alert("Please search valid city and state")
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                alert("Response not returned")
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                alert("Request error")
                console.log('Error', error.message);
            }
            console.log(error);
        }
    };

    render() {
        const t = "T00:00:00"

        const courses = this.state.courses.map(el => {
            return <Course key={el.id} id={el.id} courseName={el.courseName} city={el.city} state={el.state} remove={this.removeCourse} edit={this.saveCourseName}
                dayZero={this.getDay(`${el.info[0].datetime}${t}`)} dateZero={this.getDate(`${el.info[0].datetime}${t}`)} iconZero={el.info[0].weather.code} maxTempZero={Math.round(el.info[0].max_temp)} minTempZero={Math.round(el.info[0].min_temp)} rainZero={el.info[0].pop} frostZero={el.info[0].pop}
                dayOne={this.getDay(`${el.info[1].datetime}${t}`)} dateOne={this.getDate(`${el.info[1].datetime}${t}`)} iconOne={el.info[1].weather.code} maxTempOne={Math.round(el.info[1].max_temp)} minTempOne={Math.round(el.info[1].min_temp)} rainOne={el.info[1].pop} frostOne={el.info[0].pop}
                dayTwo={this.getDay(`${el.info[2].datetime}${t}`)} dateTwo={this.getDate(`${el.info[2].datetime}${t}`)} iconTwo={el.info[2].weather.code} maxTempTwo={Math.round(el.info[2].max_temp)} minTempTwo={Math.round(el.info[2].min_temp)} rainTwo={el.info[2].pop} frostTwo={el.info[0].pop}
                dayThree={this.getDay(`${el.info[3].datetime}${t}`)} dateThree={this.getDate(`${el.info[3].datetime}${t}`)} iconThree={el.info[3].weather.code} maxTempThree={Math.round(el.info[3].max_temp)} minTempThree={Math.round(el.info[3].min_temp)} rainThree={el.info[3].pop} frostThree={el.info[0].pop}
                dayFour={this.getDay(`${el.info[4].datetime}${t}`)} dateFour={this.getDate(`${el.info[4].datetime}${t}`)} iconFour={el.info[4].weather.code} maxTempFour={Math.round(el.info[4].max_temp)} minTempFour={Math.round(el.info[4].min_temp)} rainFour={el.info[4].pop} frostFour={el.info[0].pop}
                dayFive={this.getDay(`${el.info[5].datetime}${t}`)} dateFive={this.getDate(`${el.info[5].datetime}${t}`)} iconFive={el.info[5].weather.code} maxTempFive={Math.round(el.info[5].max_temp)} minTempFive={Math.round(el.info[5].min_temp)} rainFive={el.info[5].pop} frostFive={el.info[0].pop}
                daySix={this.getDay(`${el.info[6].datetime}${t}`)} dateSix={this.getDate(`${el.info[6].datetime}${t}`)} iconSix={el.info[6].weather.code} maxTempSix={Math.round(el.info[6].max_temp)} minTempSix={Math.round(el.info[6].min_temp)} rainSix={el.info[6].pop} frostSix={el.info[0].pop}
                daySeven={this.getDay(`${el.info[7].datetime}${t}`)} dateSeven={this.getDate(`${el.info[7].datetime}${t}`)} iconSeven={el.info[7].weather.code} maxTempSeven={Math.round(el.info[7].max_temp)} minTempSeven={Math.round(el.info[7].min_temp)} rainSeven={el.info[7].pop} frostSeven={el.info[0].pop}
            />
        })

        return (
            <div className="CourseWeather">
                <div className="CourseWeather-top-section">
                    <div className="CourseWeather-header">
                        <img src={GolfLogo} alt="" />
                        <span className="CourseWeather-header-title">Golf Course Weather</span>
                    </div>
                    <form className="CourseWeather-form" onSubmit={this.handleSubmit}>
                        <SearchBar className="CourseWeather-search-bar" name="city" placeholder="Search city" value={this.state.city} onChange={this.handleChange} />
                        <SearchBar className="CourseWeather-search-bar" name="stateCode" placeholder="State code" value={this.state.stateCode} onChange={this.handleChange} />
                        <button type="submit" className="CourseWeather-search-btn">
                            {this.state.isLoading && <img className="CourseWeather-loader" src={GolfBall} alt="" />}
                            {!this.state.isLoading && <span>SEARCH</span>}
                        </button>
                    </form>
                    <div className="CourseWeather-legend-card">
                        <WeatherCard day="Day" date="MM/DD" icon="Weather Condition" maxTemp="High" minTemp="Low" rain="Rain" frost="Frost Delay" />
                    </div>
                </div>
                <div className="body-section">
                    {courses}
                </div>
            </div>
        )
    }
}

export default CourseWeather;