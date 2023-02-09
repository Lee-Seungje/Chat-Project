import React from 'react';
import './global.css';
import * as C from './components';
import { useState } from 'react';

function App() {
    const [isEntered, setIsEntered] = useState(false);

    return (
        <div className="App">
            <C.Header>KEY BA</C.Header>
            {isEntered ? <C.Enter></C.Enter> : <C.Room></C.Room>}
        </div>
    );
}

export default App;
