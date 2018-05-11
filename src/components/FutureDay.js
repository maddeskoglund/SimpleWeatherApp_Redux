import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';
import { Link } from 'react-router-dom';



class FutureDay extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }


    render() {
        const tomorrowicon = this.props.data.weather.tomorrow.iconNow;
        const tomorrowtempMax = this.props.data.weather.tomorrow.tempMax;
        const tomorrowtempMin = this.props.data.weather.tomorrow.tempMin;
        const tomorrowwind = this.props.data.weather.tomorrow.wind;
        const tomorrowrain = this.props.data.weather.tomorrow.rain;
        const tomorrowdate = this.props.data.weather.tomorrow.date;
        const tomorrowPlus1icon = this.props.data.weather.tomorrowPlus1.iconNow;
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
        const tomorrowIcon = "images/" + Icons[tomorrowIcon];
        const tomorrowPlus1Icon = "images/" + Icons[tomorrowPlus1Icon];

        return (
            <div>
                <Link to='/tomorrow'>
                    <div className="header">
                        <div className="place">Enköping</div>
                        <div className="date">{tomorrowdate}</div>
                    </div>
                    <div className="weatherinfo">
                        <div className='icon-now'><img src={tomorrowIcon} alt="" /></div>
                        <div className="temphighlow-futureday">
                            {tomorrowtempMax}° / {tomorrowtempMin}°
                        </div>
                        <div className="wind">Vindstyrka: {tomorrowwind} m/s</div>
                        <div className="rain">Nederbörd: {tomorrowrain} mm</div>
                    </div>
                </Link>
                <Link to='/tomorrowPlus1'>
                    <div className="header">
                        <div className="place">Enköping</div>
                        <div className="date">{tomorrowPlus1date}</div>
                    </div>
                    <div className="weatherinfo">
                        <div className='icon-now'><img src={tomorrowPlus1Icon} alt="" /></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FutureDay);




// import React, { Component } from "react";


// class FutureDay extends Component {
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
//         const Icon = "images/" + Icons[this.props.Icon];

//         return (
//             <div>

//                 <div className="header">
//                     <div className="place">Enköping</div>
//                     <div className="date">{this.props.datum}</div>
//                 </div>
//                 <div className="weatherinfo">
//                     <div className='icon-now'><img src={Icon} alt="" /></div>
//                     <div className="temphighlow-futureday">
//                         {this.props.TempMax}° / {this.props.TempMin}°
//           </div>
//                     <div className="wind">Vindstyrka: {this.props.Wind} m/s</div>
//                     <div className="rain">Nederbörd: {this.props.Rain} mm</div>
//                 </div>
//             </div >

//         );
//     }
// }

// export default FutureDay;