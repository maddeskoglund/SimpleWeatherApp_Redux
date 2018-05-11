import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';


class Day extends Component {
    // componentDidMount() {
    //     this.props.fetchWeather();
    // }


    render() {
        console.log(this.props.weather);
        console.log(this.props.weather.today.iconNow);
        // const tempNow = { this.props.weather.today.tempNow }
        return (
            <div>
                <h1>{this.props.weather.today.iconNow}Tempnow</h1>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        weather: state.weather
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

