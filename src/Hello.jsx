import { useState } from 'react'
import './Hello.css';

function Hello() {
    return (
        <div className="box">
            <h1>Hello World!</h1>
        </div>
    );
}

function Button() {
    const [index, setIndex] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);

    function click() {
        setIndex(index + 1);
        setMouseDown(true);
    }

    function unclick() {
        setMouseDown(false);
    }

    const buttonStyle = {
        border: mouseDown ? 'thick double maroon' : 'thick double slateblue',
    }

    const numStyle = {
        transition: 'color 0.5s ease',
        color: mouseDown ? 'red' : 'black',
    }

    return (
        <button id="button" className="box" style={buttonStyle} onMouseDown={click} onMouseUp={unclick}>
            <h1>Hi: <span style={numStyle}>{index}</span></h1>
        </button>
    );
}

function Container() {
    return (
        <div id="container">
            <Hello />
            <Hello />
            <Hello />
            <Button />
        </div>
    );
}

export { Container };