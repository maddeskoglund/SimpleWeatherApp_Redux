import React, { Component } from 'react';
import Sidebar from './Menu';

class Main extends Component {
    render() {




        return (
            <div>
                <Sidebar />
                Main
                //Här kan sidebaren ligga
                {/* <div>{React.cloneElement({ ...this.props }.children, { ...this.props })}</div> */}

            </div>
        )
    }
};

export default Main;