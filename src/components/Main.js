import React, { Component } from 'react';
import Sidebar from './Menu';

class Main extends Component {
    render() {




        return (
            <div>
                <Sidebar />
                Main
                //Här kan sidebaren ligga
                {/* {React.cloneElement({ ...this.props }.children, { ...this.props })} */}

            </div>
        )
    }
};

export default Main;