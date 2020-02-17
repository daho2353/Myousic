import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlist from'./Playlist';
import Nav from './Nav';
import Stats from './Stats';
import './App.css';

function App(){
    return(
        <Router>
            <div className="App">
                <Nav/>
                <Route path="/playlist" component={Playlist}/>
            </div>
        </Router>
    );
}

export default App;