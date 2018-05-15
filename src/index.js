import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div>
    <h1>Kurssikartta</h1>
    <img src="https://raw.githubusercontent.com/juhapekkamoilanen/cshy-coursemap/master/cs-hy-coursemap.png" alt="kuva"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))