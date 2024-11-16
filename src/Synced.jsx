import { useState } from 'react'
import './Hello.css';

function Child({ children, text, isActive, onActive }) {
    let boxClass = 'box';

    if (isActive) {
        boxClass = 'box box-selected';
    }
    
    return (
        <div className={boxClass}>
            <h1>{text}</h1>
            {children}
            <button className="box button" style={{marginBottom: "25px"}} onClick={onActive}>Select</button>
        </div>
    );
}

function SyncedParent() {
    const [activeChild, setActiveChild] = useState(0);

    return (
        <div className="container wrap-around">
            <Child text="Hello." isActive={activeChild == 1} onActive={() => setActiveChild(1)}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Child>
            <Child text="Test." isActive={activeChild == 2} onActive={() => setActiveChild(2)}></Child>
            <Child text="Goodbye." isActive={activeChild == 3} onActive={() => setActiveChild(3)}></Child>
            <button className="box button" onClick={() => setActiveChild(0)}>
                <h1>Clear</h1>
            </button>
        </div>
    );
}

export { SyncedParent };