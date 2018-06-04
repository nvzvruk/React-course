import React, { Component } from 'react';
import "./scss/index.scss"

class App extends Component {

    constructor() {
        super();
        this.state =  {time:new Date()}
    }

    makeClockLive() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(() => {
            this.makeClockLive();
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Simple digital clock</h1>
                </header>
                <div className="clock">{this.state.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default App;
