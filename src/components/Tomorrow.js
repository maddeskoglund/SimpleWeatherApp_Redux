import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';
import { Link } from 'react-router-dom';

class Tomorrow extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        const tomorrowicon = this.props.data.weather.tomorrow.icon;
        const tomorrowtempMax = this.props.data.weather.tomorrow.tempMax;
        const tomorrowtempMin = this.props.data.weather.tomorrow.tempMin;
        const tomorrowwind = this.props.data.weather.tomorrow.wind;
        const tomorrowrain = this.props.data.weather.tomorrow.rain;
        const tomorrowdate = this.props.data.weather.tomorrow.date;

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
        const tomorrowIcon = "images/" + Icons[tomorrowicon];

        return (
            <div>
                <Link to="/tomorrow" >
                    <div className="header">
                        <div className="place">Enköping</div>
                        <div className="date">{tomorrowdate}</div>
                    </div>
                    <div className="weatherinfo">
                        <div className='icon-now'><img src={tomorrowIcon} alt="" /></div>
                        <div className="kindofday">Imorgon</div>
                        <div className="temphighlow-futureday">
                            {tomorrowtempMax}° / {tomorrowtempMin}°
                        </div>
                        <div className="wind">Vindstyrka: {tomorrowwind} m/s</div>
                        <div className="rain">Nederbörd: {tomorrowrain} mm</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tomorrow);



