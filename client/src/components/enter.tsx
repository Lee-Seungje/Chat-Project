/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as S from './style';

const Enter = ({
    setIsEntered,
    setRM,
    roomList,
    socket,
}: {
    socket: any;
    setIsEntered: any;
    setRM: any;
    roomList: any;
}) => {
    const [roomName, setRoomName] = useState<string>('');
    const [nickName, setNickName] = useState<string>('');

    const showRoom = () => {
        setIsEntered(false);
    };

    const handleSubmit = (event: React.FormEvent<Element>) => {
        event.preventDefault();
        console.log(roomName, nickName);
        socket.emit('nickname', nickName);
        setNickName('');

        socket.emit('enter_room', roomName, showRoom);
        setRM(roomName);
        setRoomName('');
    };
    return (
        <div>
            <S.Form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '300px',
                    }}
                >
                    <S.Input
                        required
                        value={roomName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setRoomName(event.target.value);
                        }}
                        placeholder="방 이름 입력."
                    ></S.Input>
                    <S.Input
                        required
                        placeholder="닉네임 입력."
                        value={nickName}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNickName(event.target.value);
                        }}
                    ></S.Input>
                    <S.Button>입장</S.Button>
                </div>
            </S.Form>
            <h3
                style={{
                    color: 'white',
                    fontSize: '25px',
                }}
            >
                입장 가능한 전장
            </h3>
            <S.Ul>{roomList}</S.Ul>
        </div>
    );
};

export default Enter;
