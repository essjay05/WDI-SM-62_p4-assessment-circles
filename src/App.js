import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';
import './App.css';

class App extends Component {
    state = {
        type: 'div',
        selected: null
    }
    render() {
        // if
        return (
        <div className="App">
            <header className="App-header">PROJECT 4 ASSESSMENT</header>
            <main className="container">
                { this.props.children }
                <CircleSelector />
                <Circles />
            </main>
        </div>
        );
    }
}

export default App;