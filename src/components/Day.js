import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";

import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatheractions';


class Day extends Component {
    componentWillMount() {
        this.props.fetchWeather();
    }

    render() {
        return (
            <div>
                <h1>{this.props.weather.today.tempNow}Tempnow</h1>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    weather: state.weather
})

export default connect(mapStateToProps, { fetchWeather })(Day);









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

