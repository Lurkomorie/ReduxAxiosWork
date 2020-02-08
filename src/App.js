import React, { Component } from 'react';
import CreatePost from './containers/FontList';
import PostList from './containers/TabList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  render() {
    return (
        <div className="small-middle-container">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-7">
                        <h2>Please select one font</h2>
                    </div>
                    <div className="col-5 mt-1">
                        <PostList/>
                    </div>
                </div>
                <div className="row mt-1 justify-content-between">
                    <div className="col-12 borderDiv">
                        <CreatePost/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
