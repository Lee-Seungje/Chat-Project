import React from 'react';
import './global.css';
import * as C from './components';
import { useState } from 'react';
import { io } from 'socket.io-client';

function App() {
    const socket = io();
    const [isEntered, setIsEntered] = useState<boolean>(true);
    const [RM, setRM] = useState<string>('');
    const [roomList, setRoomList] = useState([]);

    return (
        <div className="App">
            <C.Header>KEY BA</C.Header>
            {isEntered ? (
                <C.Enter
                    setIsEntered={setIsEntered}
                    setRM={setRM}
                    roomList={roomList}
                    socket={socket}
                ></C.Enter>
            ) : (
                <C.Room
                    RM={RM}
                    setRM={setRM}
                    setRoomList={setRoomList}
                    roomList={roomList}
                    socket={socket}
                ></C.Room>
            )}
        </div>
    );
}

export default App;
