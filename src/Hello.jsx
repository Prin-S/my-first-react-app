import { useState } from 'react'
import './Hello.css';

function Hello({ text = 'World', icon = '🌏', color = 'blue' }) {
    const textStyle = {
        color: color
    };

    return (
        <div className="box">
            <h1 style={textStyle}>Hello {text}! {icon}</h1>
        </div>
    );
}

function Button({ text = 'Count' }) {
    const [index, setIndex] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);

    function click() {
        setIndex(index + 1);
        setMouseDown(true);
    }

    function unclick() {
        setMouseDown(false);
    }

    let buttonStyle, numStyle;
    
    if (mouseDown) {
        buttonStyle = {border: 'thick double maroon'};
        numStyle = 'num-style num-style-clicked';
    } else {
        buttonStyle = {border: 'thick double slateblue'};
        numStyle = 'num-style';
    }

    return (
        <button id="button" className="box" style={buttonStyle} onMouseDown={click} onMouseUp={unclick}>
            <h1>{text}: <span className={numStyle}>{index}</span></h1>
        </button>
    );
}

function Wrapper({ children }) {
    return (
        <div className="box">
            {children}
        </div>
    );
}

function Container() {
    return (
        <div id="container">
            <Hello />
            <Hello text="Earth" icon="🌎" color="green"/>
            <Hello text="Dog" icon="🐶"/>
            <Button />
            <Button text="hi"/>
            <Wrapper>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Wrapper>
        </div>
    );
}

export { Container };