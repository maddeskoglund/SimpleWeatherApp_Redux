import React, { Component } from 'react';
import Sidebar from './components/Menu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/weatheractions';

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const tempNow = this.props.data.weather.today.tempNow;

    const backgroundImages = {
      spring: <img src="images/spring.jpg" alt="" />,
      winter: <img src="images/winter.png" alt="" />,
      road: <img src="images/road.png" alt="" />,
      bridge: <img src="images/bridge.png" alt="" />,
      lavendel: <img src="images/lavendel.png" alt="" />,
    };

    var background =
      (tempNow >= 20) ? backgroundImages.lavendel :
        (tempNow >= 15 || tempNow <= 20) ? backgroundImages.spring :
          (tempNow >= 10 || tempNow <= 15) ? backgroundImages.bridge :
            (tempNow >= 0 || tempNow <= 10) ? backgroundImages.road :
              (tempNow <= 0) ? backgroundImages.winter : null;



    return (
      <div>
        <Sidebar />
        <div className="background"> {background}</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
