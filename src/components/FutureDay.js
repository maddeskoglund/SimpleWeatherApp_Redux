import React, { Component } from "react";


class FutureDay extends Component {
    render() {
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
        const Icon = "images/" + Icons[this.props.Icon];

        return (
            <div>

                <div className="header">
                    <div className="place">Enköping</div>
                    <div className="date">{this.props.datum}</div>
                </div>
                <div className="weatherinfo">
                    <div className='icon-now'><img src={Icon} alt="" /></div>
                    <div className="temphighlow-futureday">
                        {this.props.TempMax}° / {this.props.TempMin}°
          </div>
                    <div className="wind">Vindstyrka: {this.props.Wind} m/s</div>
                    <div className="rain">Nederbörd: {this.props.Rain} mm</div>
                </div>
            </div >

        );
    }
}

export default FutureDay;