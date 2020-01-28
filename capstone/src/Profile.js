import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function Profile(){
    return(
        <div className="Playlist">
            <h2> Profile</h2>
            <button> Connect to Spotify </button>
        </div>
    );
}

export default Profile;