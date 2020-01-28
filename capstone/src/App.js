import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlist from'./Playlist';
import Nav from './Nav';
import Profile from './Profile';
import Stats from './Stats';
import './App.css';

function App(){
    return(
        <Router>
            <div className="App">
                <Nav/>
                <Route path="/profile" component={Profile}/>
                <Route path="/playlist" component={Playlist}/>
                <Route path="/stats" component={Stats}/>
            </div>
        </Router>
    );
}

export default App;