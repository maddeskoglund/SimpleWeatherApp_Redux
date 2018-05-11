import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';


class Day extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }


    render() {
        const tempNow = this.props.data.weather.today.tempNow;
        const iconNow = this.props.data.weather.today.iconNow;
        const tempMax = this.props.data.weather.today.tempMax;
        const tempMin = this.props.data.weather.today.tempMin;
        const wind = this.props.data.weather.today.wind;
        const rain = this.props.data.weather.today.rain;
        const date = this.props.data.weather.today.date;
        // const rain = this.props.data.weather.today.rain;

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
        const IconNow = "images/" + Icons[iconNow];

        return (
            <div>
                <div className="header">
                    <div className="place">Enköping</div>
                    <div className="date">{date}</div>
                </div>
                <div className="weatherinfo">
                    <div className='icon-now'><img src={IconNow} alt="" /></div>
                    <div className="tempnow">{tempNow}°</div>
                    <div className="temphighlow">
                        <ArrowUp /> {tempMax}° <ArrowDown /> {tempMin}°</div>
                    <div className="wind">Vindstyrka: {wind} m/s</div>
                    <div className="rain">Nederbörd: {rain} mm</div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Day);









// class Day extends Component {
//     render() {
//         const Icons = [
//             "",
//             "sun.png",
//             "sun.png",
//             "suncloud.png",
//             "suncloud.png",
//             "cloud.png",
//             "cloud.png",
//             "cloud.png",
//             "rain.png",
//             "rain.png",
//             "rain.png",
//             "thunder.png",
//             "rain.png",
//             "rain.png",
//             "rain.png",
//             "snow.png",
//             "snow.png",
//             "snow.png",
//             "rain.png",
//             "rain.png",
//             "rain.png",
//             "thunder.png",
//             "rain.png",
//             "rain.png",
//             "rain.png",
//             "snow.png",
//             "snow.png",
//             "snow.png"
//         ];
//         const IconNow = "images/" + Icons[this.props.IconNow];


//         return (
//             <div>


//                 <div className="header">
//                     <div className="place">Enköping</div>
//                     <div className="date">{this.props.datum}</div>
//                     {/* <div>Latitud: {this.props.myLatitude}</div><div>Longitud: {this.props.myLongitude}</div> */}
//                 </div>
//                 <div className="weatherinfo">
//                     <div className='icon-now'><img src={IconNow} alt="" /></div>
//                     <div className="tempnow">{this.props.TempNow}°</div>
//                     <div className="temphighlow">
//                         <ArrowUp /> {this.props.TempMax}° <ArrowDown /> {this.props.TempMin}°</div>
//                     <div className="wind">Vindstyrka: {this.props.Wind} m/s</div>
//                     <div className="rain">Nederbörd: {this.props.Rain} mm</div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Day;

