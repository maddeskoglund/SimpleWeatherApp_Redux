import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';
import { Link } from 'react-router-dom';

class Overmorgon extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        const tomorrowPlus1icon = this.props.data.weather.tomorrowPlus1.icon;
        const tomorrowPlus1tempMax = this.props.data.weather.tomorrowPlus1.tempMax;
        const tomorrowPlus1tempMin = this.props.data.weather.tomorrowPlus1.tempMin;
        const tomorrowPlus1wind = this.props.data.weather.tomorrowPlus1.wind;
        const tomorrowPlus1rain = this.props.data.weather.tomorrowPlus1.rain;
        const tomorrowPlus1date = this.props.data.weather.tomorrowPlus1.date;


        const Icons = [
            "",
            "sun.png",
            "sun.png",
            "suncloud.png",
            "suncloud.png",
            "cloud.png",
            "cloud.png",
            "cloud.png",
            "rain.png",
            "rain.png",
            "rain.png",
            "thunder.png",
            "rain.png",
            "rain.png",
            "rain.png",
            "snow.png",
            "snow.png",
            "snow.png",
            "rain.png",
            "rain.png",
            "rain.png",
            "thunder.png",
            "rain.png",
            "rain.png",
            "rain.png",
            "snow.png",
            "snow.png",
            "snow.png"
        ];
        const tomorrowPlus1Icon = "images/" + Icons[tomorrowPlus1icon];

        return (
            <div>
                <Link to="/tomorrowPlus1" >
                    <div className="header">
                        <div className="place">Enköping</div>
                        <div className="date">{tomorrowPlus1date}</div>
                    </div>
                    <div className="weatherinfo">
                        <div className='icon-now'><img src={tomorrowPlus1Icon} alt="" /></div>
                        <div className="kindofday">Övermorgon</div>
                        <div className="temphighlow-futureday">
                            {tomorrowPlus1tempMax}° / {tomorrowPlus1tempMin}°
                        </div>
                        <div className="wind">Vindstyrka: {tomorrowPlus1wind} m/s</div>
                        <div className="rain">Nederbörd: {tomorrowPlus1rain} mm</div>
                    </div>
                </Link>
            </div >

        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        data: state.weather,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overmorgon);


