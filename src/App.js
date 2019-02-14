import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">PROJECT 4 ASSESSMENT</header>
            <main>
                <CircleSelector>
                    <Circles />
                </CircleSelector>
            </main>
        </div>
        );
    }
}

export default App;