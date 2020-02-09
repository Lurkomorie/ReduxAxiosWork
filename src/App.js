import React, { Component } from 'react';
import FontList from './containers/FontList';
import TabList from './containers/TabList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  render() {
    return (
        <div className="container-sm">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-7">
                        <h2>Please select one font</h2>
                    </div>
                    <div className="col-5 mt-1">
                        <TabList/>
                    </div>
                </div>
                <div className="row mt-1 ">
                    <div className="col-12 borderDiv">
                        <FontList/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
