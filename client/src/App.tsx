import React from 'react';
import './global.css';
import * as C from './components';
import { useState } from 'react';
import { io } from 'socket.io-client';

function App() {
    const [isEntered, setIsEntered] = useState<boolean>(true);
    const [RM, setRM] = useState<string>('');
    const [roomList, setRoomList] = useState([]);

    const socket = io();

    return (
        <div className="App">
            <C.Header>KEY BA</C.Header>
            {isEntered ? (
                <C.Enter
                    socket={socket}
                    setIsEntered={setIsEntered}
                    setRM={setRM}
                    roomList={roomList}
                ></C.Enter>
            ) : (
                <C.Room
                    socket={socket}
                    RM={RM}
                    setRM={setRM}
                    setRoomList={setRoomList}
                    roomList={roomList}
                ></C.Room>
            )}
        </div>
    );
}

export default App;
