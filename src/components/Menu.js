import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Arrow from "react-icons/lib/ti/arrow-forward";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/weatheractions';



class Sidebar extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }

    showSettings(event) {
        event.preventDefault();
        // .
        // .
        // .
    }

    render() {
        const iconToday = this.props.data.weather.today.icon;
        const iconTomorrow = this.props.data.weather.tomorrow.icon;
        const iconTomorrowPlus1 = this.props.data.weather.tomorrowPlus1.icon;
        const TodayTempMax = this.props.data.weather.today.tempMax;
        const TodayTempMin = this.props.data.weather.today.tempMin;
        const TomorrowTempMax = this.props.data.weather.tomorrow.tempMax;
        const TomorrowTempMin = this.props.data.weather.tomorrow.tempMin;
        const TomorrowPlus1TempMax = this.props.data.weather.tomorrowPlus1.tempMax;
        const TomorrowPlus1TempMin = this.props.data.weather.tomorrowPlus1.tempMin;

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
        const IconToday = "images/" + Icons[iconToday];
        const IconTomorrow = "images/" + Icons[iconTomorrow];
        const IconTomorrowPlus1 = "images/" + Icons[iconTomorrowPlus1];



        return (

            <Menu right={true} width={170} className='menu' customBurgerIcon={<Arrow />}>
                <Link to='/'><p className='dag'>Idag</p>
                    <div className='icon-menu'><img src={IconToday} alt="" /></div>
                    <p className='temp-menu'> {TodayTempMax}° /  {TodayTempMin}°</p>
                </Link>
                <Link to="/tomorrow"><p className='dag'>Imorgon</p>
                    <div className='icon-menu'><img src={IconTomorrow} alt="" /></div>
                    <p className='temp-menu'> {TomorrowTempMax}° /  {TomorrowTempMin}°</p>
                </Link>
                <Link to="/tomorrowPlus1"><p className='dag'>Övermorgon</p>
                    <div className='icon-menu'><img src={IconTomorrowPlus1} alt="" /></div>
                    <p className='temp-menu'> {TomorrowPlus1TempMax}° /  {TomorrowPlus1TempMin}°</p>
                </Link>
            </Menu>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);






//https://github.com/negomi/react-burger-menu