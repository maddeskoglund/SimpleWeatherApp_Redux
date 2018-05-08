import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Arrow from "react-icons/lib/ti/arrow-forward";
import { Link } from 'react-router-dom'


class Sidebar extends Component {
    showSettings(event) {
        event.preventDefault();
        // .
        // .
        // .
    }

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
        const IconToday = "images/" + Icons[this.props.TodayIcon];
        const IconTomorrow = "images/" + Icons[this.props.TomorrowIcon];
        const IconTomorrowPlus1 = "images/" + Icons[this.props.TomorrowPlus1Icon];


        return (

            <Menu right={true} width={170} className='menu' customBurgerIcon={<Arrow />}>
                <Link to='/'><p className='dag'>Idag</p>
                    <div className='icon-menu'><img src={IconToday} alt="" /></div>
                    <p className='temp-menu'> {this.props.TodayTempMax}° /  {this.props.TodayTempMin}°</p>
                </Link>
                <Link to='/tomorrow'><p className='dag'>Imorgon</p>
                    <div className='icon-menu'><img src={IconTomorrow} alt="" /></div>
                    <p className='temp-menu'> {this.props.TomorrowTempMax}° /  {this.props.TomorrowTempMin}°</p>
                </Link>
                <Link to='/tomorrowPlus1'><p className='dag'>Övermorgon</p>
                    <div className='icon-menu'><img src={IconTomorrowPlus1} alt="" /></div>
                    <p className='temp-menu'> {this.props.TomorrowPlus1TempMax}° /  {this.props.TomorrowPlus1TempMin}°</p>
                </Link>


                {/* <a id="today" className="menu-item" href="/">Idag</a>
                <a id="tomorrow" className="menu-item" href="/about">Imorgon</a>
                <a id="contact" className="menu-item" href="/contact">Övermorgon</a> */}
                {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu>
        );
    }
}

export default Sidebar;

//https://github.com/negomi/react-burger-menu