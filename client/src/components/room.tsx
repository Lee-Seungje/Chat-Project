/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as S from './style';

const Room = ({ socket, RM }: { socket: any; RM: string }) => {
    const [title, setTitle] = useState<string>('');
    const [msg, setMsg] = useState<string>('');

    const addMessage = (message: string) => {
        let Ul = document.querySelector('.Ul');
        // const msgLi = <li>{message}</li>;
        // const newLi = React.createElement('h1', null, message);
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
