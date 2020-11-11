import React, {useState} from 'react';
import './App.css';
import {Message} from "./Message";

function App() {

    let name = "Artem";
    let text = "npm start нажимал?";
    let time = "20:30";


    return (
        <div className="App">
            <h1>Просто Заголвок!</h1>
            <Message name={name} text={text} time={time}/>
        </div>
    );
}

export default App;
