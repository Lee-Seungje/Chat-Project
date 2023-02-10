/** @jsxImportSource @emotion/react */
import React from 'react';
import { useEffect, useState } from 'react';
import * as S from './style';

const Room = ({
    socket,
    RM,
    setRoomList,
    roomList,
    setRM,
}: {
    socket: any;
    RM: string;
    setRoomList: any;
    roomList: any;
    setRM: any;
}) => {
    const [title, setTitle] = useState<string>('');
    const [msg, setMsg] = useState<string>('');

    const addMessage = (message: string) => {
        let Ul = document.querySelector('.Ul');
        const li = document.createElement('li');
        Ul?.appendChild(li);
        li.innerText = message;
        const ChatArea = document.querySelector('.ChatArea');
        ChatArea != null
            ? (ChatArea.scrollTop = ChatArea.scrollHeight)
            : console.log('');
    };

    const handleMessageSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault();
        socket.emit('new_message', msg, RM, () => {
            addMessage(`You: ${msg}`);
            setMsg('');
        });
    };

    socket.on('welcome', (user: any, newCount: any) => {
        console.log('이거 왜 안되냐');
        setRM(`${RM} (${newCount})`);
        addMessage(user + '가 출전했다!');
    });

    // socket.on('room_change', (rooms: any) => {
    //     setRoomList([]);
    //     if (rooms.length === 0) {
    //         return;
    //     }
    //     rooms.forEach((room: any) => {
    //         const li = document.createElement('li');
    //         li.innerText = room;
    //         setRoomList(roomList + li);
    //     });
    // });

    // socket.on('bye', (left: any, newCount: any) => {
    //     setRM(`${RM} (${newCount})`);
    //     addMessage(left + '가 도망갔다!');
    // });

    // socket.on('new_message', addMessage);

    useEffect(() => {
        setTitle(`Room ${RM}`);
    }, []);
    return (
        <div>
            <h3
                style={{
                    fontSize: '30px',
                    color: '#fff',
                }}
            >
                {title}
            </h3>
            <S.ChatArea className="ChatArea">
                <S.Ul className="Ul">{}</S.Ul>
            </S.ChatArea>
            <S.Form onSubmit={handleMessageSubmit}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '200px',
                        justifyContent: 'space-around',
                    }}
                >
                    <S.Input
                        placeholder="메세지 입력."
                        value={msg}
                        required
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setMsg(event.target.value);
                        }}
                    ></S.Input>
                    <S.Button>전송</S.Button>
                </div>
            </S.Form>
        </div>
    );
};
export default Room;
