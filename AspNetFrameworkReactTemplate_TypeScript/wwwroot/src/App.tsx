
import React from "react"
import ReactLogo from './icons/logo.svg';
//const ReactLogo = require('./icons/logo.svg');
import './App.css';
import FormElementTest from "./TsTestComponent";
import Exampleform from "./Examples/ExampleForm";

function App() {
    return (
        <div className="App">
            <div style={{marginBottom:48}}>
                {/*<FormElementTest />*/}
                <Exampleform />
                </div>
            <header className="App-header">
                <ReactLogo className="App-logo" />
                <p>                   
                    Edit <code>src/App.js</code> and save to reload (won't work hot reload as it's not configured here). 
                </p> 
                      <p>Test</p>      
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;